// 📁 loader.js  (carregador de comandos)
const fs = require("fs");
const path = require("path");

const commands = new Map();

function loadCommands() {
  const baseDir = path.join(__dirname, "commands");

  for (const category of fs.readdirSync(baseDir)) {
    const categoryPath = path.join(baseDir, category);

    for (const file of fs.readdirSync(categoryPath)) {
      if (!file.endsWith(".js")) continue;

      const command = require(path.join(categoryPath, file));
      commands.set(command.name, command);

      if (command.aliases) {
        for (const alias of command.aliases) {
          commands.set(alias, command);
        }
      }
    }
  }
}

module.exports = { commands, loadCommands };
