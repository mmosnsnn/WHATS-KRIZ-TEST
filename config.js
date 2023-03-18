const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID:process.env.SESSION_ID || " ",
  BRANCH: "master",
  MENU_MEDIA: process.env.MENUMEDIA || " ",
  PACKNAME: process.env.PACKNAME || "WHATS-KRIZ-AI",
  BCAUDIO_IMAGE: process.env.BCAUDIO_IMAGE || " ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || " ",
  MENTION_IMG: process.env.MENTION_IMG || " ",
  MENTION_MURL: process.env.MENTION_MURL || " ",
  MENTION_TITLE: process.env.MENTION_TITLE || " ",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  MENTION_BODY: process.env.MENTION_BODY || " ",
  MENTION_SURL: process.env.MENTION_SURL || " ",
  AUTHOR: process.env.AUTHOR || "TEAM-TOXIC",
  BOTNAME: process.env.BOTNAME || "WHATS-KRIZ-AI",
  OWNERNAME: process.env.OWNERNAME || "KRIZ-SER",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
};
