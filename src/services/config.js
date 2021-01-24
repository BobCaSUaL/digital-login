const { pathExists } = require("fs-extra");

const path = require('path');

const port = process.env.DIGITAL_LOGIN_SERVICES_PORT || 3003;
const assetsDirectory = process.env.DIGITAL_LOGIN_ASSETS_DIR || path.resolve(__dirname, '../../assets');
const publicDirectory = process.env.DIGITAL_LOGIN_PUBLIC_DIR || path.resolve(__dirname, '../../public');

module.exports = {
  port,
  assetsDirectory,
  publicDirectory,
};
