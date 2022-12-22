#! /usr/bin/env node
const { runCommand } = require("./../utils/run-command");
const { argv } = require("process");

runCommand("npm", ["i", ...argv.splice(2)]);
