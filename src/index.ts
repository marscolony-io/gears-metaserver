import { getData, updateLoop, tokensMap } from "./services/TokenService";
import express from "express";
import cors from "cors";
import { environment } from "./environment";
import path from "path";
import fs from "fs";

updateLoop();

const app = express();
app.use(cors());
app.use((req: express.Request, res: express.Response, next: Function) => {
  if (!req.url.endsWith(".png")) {
    console.log("ACCESS LOG", req.url);
  }
  next();
});

// image for a token
app.get("/:token.jpg", (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  if (!tokensMap.has(+token)) return res.status(404).end();
  const gear = tokensMap.get(+token);
  const filePath = path.join(
    __dirname,
    "../public/images/",
    `${gear?.locked ? "locked" : "unlocked"}`,
    `/${token}.jpg`
  );

  const s = fs.createReadStream(filePath);
  s.on("open", () => {
    res.set("Content-Type", "image/jpg");
    s.pipe(res);
  });
  s.on("error", () => {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

// metadata
app.get("/:token", (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (Number.isNaN(tokenNumber) || tokenNumber < 1) {
    res.status(404).end();
    return;
  }
  getData(tokenNumber).then((meta) => {
    if (meta === null) {
      res.sendStatus(404);
    } else {
      res.json(meta);
    }
  });
});

app.use((req: express.Request, res: express.Response, next: Function) => {
  res.status(404).end();
});

app.listen(environment.PORT, "127.0.0.1", () => {
  console.log("server started", environment.PORT);
});
