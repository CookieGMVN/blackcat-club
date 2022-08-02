# **BlackCat-Djsv14**
`sử dụng bot discord v14 cực kỳ đơn giản với BlackCat-djs dành cho những bạn mới làm quen với code bot discord`
# Bot Run
```js
const { Client_BlackCat, Discord: { Client, Collection, /*....*/ }} = require("blackcat-djsv14");
const client = new Client(Client_BlackCat());
// xem bot đã hoạt động hay là chưa 
client.on("ready", () => {
    console.log(client.user.username + " is ready 😊");
});

// prefix: tiền tố để gọi bot
const prefix = " prefix của bạn "
// messageCreate
client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.inGuild()) return;
	if (!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift();

  if (command === 'ping') {
		message.reply("ping của tôi là: " + client.ws.ping);
	};
  if (command === 'name') {
     // code
  };
});

client.login("token here");
```
*note:* => 
`Discord = discord.js`
`blackcatfiles = path`

# Nút Buttons v14
```js
npm:
const { embedPages, Discord: { EmbedBuilder }} = require("blackcat-club");
let embed1 = new EmbedBuilder().setDescription(...)
let embed2 = new EmbedBuilder().setDescription(...)
run: .... {
  ///////// code pages
  const pages = [embed1, embed2];
  embedPages(client, message, pages, {
          firstEmoji: "⏪",
          backEmoji: "◀️",
          delEmoji: "🗑",
          forwardEmoji: "▶️",
          lastEmoji: "⏩",
          btncolor: "Success",
          delcolor: "Danger",
          skipcolor: "Primary",
          skipBtn: true,
          delBtn: true
  });
  ///// end code
};
```