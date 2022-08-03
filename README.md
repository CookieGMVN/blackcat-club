# <p align="center">BlackCat-Club</p>
`sử dụng bot discord v14 cực kỳ đơn giản với BlackCat-club dành cho những bạn mới làm quen với code bot discord`

<p align="center">
	<a href="https://www.facebook.com/BlackCat.2k3">
	<img src="https://statics.voz.tech/data/avatars/o/1093/1093136.jpg?1584167722" width = "200" alt="TNT">
	</a>
</p>

# <p align="center">BlackCat-Music</p>
```css
npm i blackcat-music
/*
 * hệ thống âm nhạc đỉnh cao dễ sử dụng
 * có ví dụ trong package
 */
```
# Các yếu tố phụ thuộc:
`Discord = discord.js`
```js
const { Discord: { Client, EmbedBuilder, /* Vân vân ...*/ }} = require("blackcat-club"); // discord.js
```
`DjsVoice = @discordjs/voice`
```js
const { DjsVoice: { AudioPlayerStatus, joinVoiceChannel, createAudioResource, /* vân vân...*/}} = require("blackcat-club"); // @discordjs/voice
```
`files_name = path`
```js
const { files_name: { parse, /*Vân vân...*/}} = require("blackcat-club"); // path
// ví dụ: 
module.exports = {
    name: parse(__filename).name,
    run: async() => {
      // vân vân...
    },
};
```
# <p align="center">Package Run</p>
# Thông tin package
```js
const { infoBLC } = require("blackcat-club");
console.log(`${infoBLC()}`.magenta);
```
## màu chữ ("colors")
```js
console.log("màu console".red)
```
  - black
  - red
  -  green
  - yellow
  - blue
  - magenta
  - cyan
  - white
  - gray
  - grey

```js
const { Client_BlackCat, version, infoBLC, Discord: { Client, Collection, /*....*/ }} = require("blackcat-club");
const client = new Client(Client_BlackCat());
// xem bot đã hoạt động hay là chưa 
client.on("ready", () => {
    console.log(client.user.username + " is ready 😊".blue);
    console.log(`${infoBLC()}`.red);
});

// prefix: tiền tố để gọi bot
const config = {
   "prefix": "prefix của bạn",
   "token": "token của bạn"
};
// messageCreate
client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.inGuild()) return;
	if (!message.content.startsWith(config.prefix)) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift();

  if (command === 'ping') {
		message.reply("ping của tôi là: " + client.ws.ping);
	};
  if (command === 'name') {
     // code
  };
  
});
client.login(config.token);
```
# <p align="center">Commands</p>

# Nút Buttons
```js
const { embedPages, Discord: { EmbedBuilder }} = require("blackcat-club");
let embed1 = new EmbedBuilder().setDescription(...)
let embed2 = new EmbedBuilder().setDescription(...)

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
```
# <p align="center">Hãy thiết kế bots theo ý thích của bạn</p>