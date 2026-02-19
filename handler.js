// 📁 handler.js  (executor de comandos)
const { commands } = require("./loader");

function handleCommand(sock, msg, prefix) {
  const body = msg.message?.conversation || "";
  if (!body.startsWith(prefix)) return;

  const args = body.slice(prefix.length).trim().split(/\s+/);
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);
  if (!command) return;

  command.execute(sock, msg, args);
}

module.exports = handleCommand;
