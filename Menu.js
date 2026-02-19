// 📁 commands/gerais/menu.js
module.exports = {
  name: "menu",
  aliases: ["help", "comandos"],
  category: "gerais",
  description: "Mostra o menu de comandos",

  execute(sock, msg, _args) {
    const from = msg.key.remoteJid;

    const menu = `
⛩️ SUKUNA GRXX BOT ⛩️
━━━━━━━━━━━━━━━━━━
📌 GERAIS
• !menu
• !ping
• !info
• !owner

🤖 BOT
• !sticker
• !toimg
• !tts
• !ia

👥 GRUPO
• !ban
• !kick
• !add
━━━━━━━━━━━━━━━━━━
`.trim();

    sock.sendMessage(from, { text: menu });
  }
};
