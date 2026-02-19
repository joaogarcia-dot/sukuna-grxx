// 📁 commands/gerais/ping.js
module.exports = {
  name: "ping",
  aliases: [],
  category: "gerais",
  description: "Verifica se o bot está online",

  execute(sock, msg, _args) {
    sock.sendMessage(msg.key.remoteJid, {
      text: "🏓 Pong! Bot online."
    });
  }
};
