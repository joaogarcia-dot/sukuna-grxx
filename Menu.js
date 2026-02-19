// Menu.js (README Style)
const menu = (prefix, nome, grupo, hora, data) => {
return `
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=mono&size=28&duration=4000&color=1E90FF&center=true&vCenter=true&lines=🌀+NAGI+BOT+🌀;🤖+AUTOMAÇÃO+WHATSAPP;⚡+RÁPIDO+E+PODEROSO" />
</p>

---

## 👤 NAGL BOT
- **Usuário:** ${nome}
- **Grupo:** ${grupo || 'Privado'}
- **Hora:** ${hora}
- **Data:** ${data}

---

## 📌 Comandos Gerais
- \`${prefix}menu\`
- \`${prefix}ping\`
- \`${prefix}info\`
- \`${prefix}owner\`

---

## 🤖 Comandos do Bot
- \`${prefix}sticker\`
- \`${prefix}toimg\`
- \`${prefix}tts\`
- \`${prefix}traduzir\`
- \`${prefix}ia\`

---

## 👥 Comandos de Grupo
- \`${prefix}add\`
- \`${prefix}kick\`
- \`${prefix}promote\`
- \`${prefix}demote\`
- \`${prefix}linkgp\`

---

## ⚙️ Outros
- \`${prefix}perfil\`
- \`${prefix}rank\`
- \`${prefix}status\`

---

<p align="center">
  ⚡ <b>Nagi Bot</b> • Automação WhatsApp Moderna
</p>
`;
};

module.exports = menu;
