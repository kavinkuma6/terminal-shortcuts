# Terminal Shortcuts

`@xniva/terminal-shortcuts` is a cli tool which provides shortcuts for the commanly used terminal commands.

#### Example:

use `c` for the `clear`(mac) or `cls`(windows) command to clear the terminal

## Installation:

Install it globally using the command

```
npm i -g @xniva/terminal-shortcuts
```

## List of available commands:

| shortcut command | actual git command     | action                             |
| ---------------- | ---------------------- | ---------------------------------- |
| `c` or `cls`     | `clear`                | Clear the terminal                 |
| `re`             | `clear && exec zsh -l` | Restart the terminal session       |
| `dc`             | `docker compose up`    | Start running the docker container |
| `ns`             | `npm run start`        | Start the script                   |
| `ni`             | `npm install`          | Install the package                |
