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
