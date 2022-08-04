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
```
- [hệ thống âm nhạc đỉnh cao dễ sử dụng](https://github.com/VinhBot/blackcat-music) 🎶

# Các phụ thuộc:

- [`Discord = discord.js`](https://github.com/discordjs/discord.js)
```js
const { Discord: { Client, EmbedBuilder, /* Vân vân ...*/ }} = require("blackcat-club"); // discord.js
```
- [`DjsVoice = @discordjs/voice`](https://github.com/discordjs/discord.js)
```js
const { DjsVoice: { AudioPlayerStatus, joinVoiceChannel, createAudioResource, /* vân vân...*/}} = require("blackcat-club"); // @discordjs/voice
```

- [Các Game Cmds](https://github.com/VinhBot/blackcat-club/blob/main/Modules/Game/README.md) 🎮
- [Các Simply Cmds](https://github.com/VinhBot/blackcat-club/blob/main/Modules/Commands/README.md) 🔮

# <p align="center">Package Run</p>
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
# màu console
![Demo](https://raw.githubusercontent.com/VinhBot/blackcat-club/main/Modules/Preview/demoColors.jpg)
```js
console.log(`black`.black)
console.log(`red`.red)
console.log(`green`.green)
console.log(`yellow`.yellow)
console.log(`blue`.blue)
console.log(`magenta`.magenta)
console.log(`cyan`.cyan)
console.log(`white`.white)
console.log(`gray`.gray)
console.log(`grey`.grey)
```
# <p align="center">Hãy thiết kế bots theo ý thích của bạn</p>