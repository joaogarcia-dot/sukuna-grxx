module.exports = {
  name: "menu",
  description: "Mostra o menu do bot",
  execute(sock, msg, args) {
    const menu = `
⛩️ SUKUNA GRXX BOT ⛩️
━━━━━━━━━━━━━━━━━━
🤖 Comandos disponíveis:

• !ping
• !sticker
• !add
• !kick
• !tagall
• !antilink

🔥 Sukuna domina este bot 🔥
`;
    sock.sendMessage(msg.key.remoteJid, { text: menu }, { quoted: msg });
  }
};
const fs = require("fs");

module.exports = {
  name: "menu",
  description: "Menu principal do bot",
  execute: async (sock, msg) => {

    const menuTexto = `
⛩️ *SUKUNA GRXX BOT* ⛩️
━━━━━━━━━━━━━━━━━━
🤖 Bot de grupo completo

📌 *COMANDOS*
• !ping
• !info
• !sticker
• !toimg
• !ia

👥 *GRUPO*
• !add
• !kick
• !promote
• !demote
• !tagall
• !hidetag

🛡️ *ADMIN*
• !antilink on/off
• !fechar / !abrir

🔥 Sukuna domina este bot 🔥
━━━━━━━━━━━━━━━━━━
`;

    const buttons = [
      { buttonId: "!ping", buttonText: { displayText: "📡 PING" }, type: 1 },
      { buttonId: "!menu", buttonText: { displayText: "📜 MENU" }, type: 1 },
      { buttonId: "!owner", buttonText: { displayText: "👑 DONO" }, type: 1 }
    ];

    const buttonMessage = {
      image: { url: "https://t2.pixhost.to/thumbs/5408/689995159_whatsapp_image.jpg" },
      caption: menuTexto,
      footer: "Sukuna-GRXX • WhatsApp Bot",
      buttons: buttons,
      headerType: 4
    };

    await sock.sendMessage(msg.key.remoteJid, buttonMessage, { quoted: msg });
  }
};
