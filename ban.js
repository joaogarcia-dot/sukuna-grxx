// 📁 commands/grupo/ban.js
module.exports = {
  name: "ban",
  aliases: [],
  category: "grupo",
  description: "Remove um membro do grupo",

  execute(sock, msg, _args) {
    sock.sendMessage(msg.key.remoteJid, {
      text: "🚫 Usuário removido (exemplo)"
    });
  }
};
