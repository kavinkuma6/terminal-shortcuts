#! /usr/bin/env node
const { runCommand } = require("./../utils/run-command");

runCommand("docker", ["compose", "up"]);
