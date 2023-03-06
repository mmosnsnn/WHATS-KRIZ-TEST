const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID:process.env.SESSION_ID || " ",
  BRANCH: "master",
  MENU_MEDIA: process.env.MENUTYPE || "https://i.imgur.com/9WOLsb9.png",
  PACKNAME: process.env.PACKNAME || "WHATS-KRIZ-AI",
  SUDO: process.env.SUD0 || "919633687665,919961857267",
  AUTHOR: process.env.AUTHOR || "TEAM-TOXIC",
  BOTNAME: process.env.BOTNAME || "WHATS-KRIZ-AI",
  OWNERNAME: process.env.OWNERNAME || "KRIZ-SER",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
};
