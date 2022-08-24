export type gearDescription = {
  type: string;
  description: string;
};

export const gearsData: gearDescription[] = [
  {
    type: "Rocket Fuel",
    description:
      "Fuel for the space shuttles on which the Martians arrived from Earth. Allows you to accelerate the transport to an incredible speed. It is used in a small volume, because there is a limited amount of it on the planet.",
  },
  {
    type: "Engine Furious",
    description: "Hall-effect thruster. Its name speaks for itself.",
  },
  {
    type: "WD-40",
    description:
      "The spray, composed of various hydrocarbons, was originally designed to be used by Convair to protect the outer skin of the Atlas missile from rust and corrosion.",
  },
  {
    type: "Titanium Drill",
    description:
      "A strong drill, which is used in mines on Earth. Speeds up the drilling process",
  },
  {
    type: "Diamond Drill",
    description:
      "The drill of this beauty is specially created for work in space. It withstands pressure and temperature changes, significantly accelerates drilling.",
  },
  {
    type: "Laser Drill",
    description:
      "The test technology of the EGN corporation. NASA can only dream about such technologies.",
  },
  {
    type: "Small Area Scanner",
    description:
      "An inconspicuous device that provides information about resources nearby. On Earth, such things are used above ground and underground.",
  },
  {
    type: "Medium Area Scanner",
    description:
      "A high-tech device that is used in the extraction of uranium on Earth. Durable and reliable, great for working in space.",
  },
  {
    type: "Large Area Scanner",
    description:
      "The device uses laser scanning technology - optically directed laser beams to collect information about an object in direct three-dimensional space.",
  },
  {
    type: "Ultrasonic Transmitter",
    description:
      "An inconspicuous satellite dish on board the vehicle will remain invisible to humans, but extremely unpleasant for worms.",
  },
  {
    type: "Vibration Transmitter",
    description:
      "Worms are blind and are guided by vibrations in space, which is why they are so attracted to drilling underground. To avoid meeting with a worm, it is worth using a vibration transmitter. Preferably send a signal away from the place of work.",
  },
  {
    type: "The Nebuchadnezzar",
    description:
      "This transport is a unique masterpiece of earth engineers. You will truly want to drive it  someday but for now its only “Can I sit and spin a wheel for a sec?“",
  },
  {
    type: "The Wraith",
    description: "Explosion was always an art for its creators",
  },
  {
    type: "The Polyminer",
    description: "Let me guess… Transport from another universe?",
  },
];

export const rarities = ["Common", "Rare", "Legendary"];

export const categories = [
  "Engine",
  "Drill",
  "Scanner",
  "Transmitter",
  "Transport",
];
