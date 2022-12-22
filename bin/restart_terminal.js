#! /usr/bin/env node
const { runCommand } = require("./../utils/run-command");

runCommand("clear");
runCommand("exec", ["zsh", "-l"]);
