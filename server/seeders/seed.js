const db = require("../config/connection");
const { User, Character, Party } = require("../models");
const userSeeds = require("./userSeeds.json");
const characterSeeds = require("./characterSeeds.json");
const partySeeds = require("./partySeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Character", "characters");

    await cleanDB("User", "users");

    await cleanDB("Party", "parties");

    await User.create(userSeeds);

    await Character.create(characterSeeds);

    await Party.create(partySeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
