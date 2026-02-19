// 📁 commands/bot/sticker.js
module.exports = {
  name: "sticker",
  aliases: ["fig"],
  category: "bot",
  description: "Cria figurinha",

  execute(sock, msg, _args) {
    sock.sendMessage(msg.key.remoteJid, {
      text: "🖼️ Envie uma imagem para virar figurinha"
    });
  }
};
