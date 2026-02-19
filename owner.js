// 📁 commands/gerais/owner.js
module.exports = {
  name: "owner",
  aliases: ["dono"],
  category: "gerais",
  description: "Mostra o dono do bot",

  execute(sock, msg, _args) {
    sock.sendMessage(msg.key.remoteJid, {
      text: "👑 Dono: Rony"
    });
  }
};
