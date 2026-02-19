// 📁 commands/gerais/info.js
module.exports = {
  name: "info",
  aliases: ["botinfo"],
  category: "gerais",
  description: "Informações do bot",

  execute(sock, msg, _args) {
    sock.sendMessage(msg.key.remoteJid, {
      text: "🤖 SUKUNA GRXX BOT\n⚡ Rápido e poderoso"
    });
  }
};
