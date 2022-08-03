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
# Các phụ thuộc:
`Discord = discord.js`
```js
const { Discord: { Client, EmbedBuilder, /* Vân vân ...*/ }} = require("blackcat-club"); // discord.js
```
`DjsVoice = @discordjs/voice`
```js
const { DjsVoice: { AudioPlayerStatus, joinVoiceChannel, createAudioResource, /* vân vân...*/}} = require("blackcat-club"); // @discordjs/voice
```
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
```js
console.log("màu console".red)
```
 • black, • red, • green, • yellow
 • blue, • magenta, • cyan, • white
 • gray, • grey
# <p align="center">Game Commands</p>
# ConnectFour
```js
const { Game: { ConnectFour }} = require("blackcat-club");

const game = new ConnectFour({
      message: message, // message = message
      player1: '🔴', // người chơi 1
      player2: '🔞', // người chơi 2 
})
game.start()
```
# SnakeGame
```js
const { Game: { SnakeGame }} = require("blackcat-club");

const snake =  new SnakeGame({
         message: message,
         slash_command: false,
         embed: {
           title: 'Snake',
           color: "#FFFB00",
           footer: "blackcat",
           overTitle: 'end game',
         },
         snake: { 
           head: '😋', // đầu rắn
           body: '🟦', // thân rắn
           tail: '🔹', // đuôi rắn
           over: '💀' // chết
         },
         emojis: { board: '⬛',  food: '🍔', up: '🔼',  right: '▶️', down: '🔽', left: '◀️', },
         foods: ['🍎', '🍇', '🍊', "🍕", "🍔", "🥪", "🥙", "🥗", "🥐", "🍿", "🥓", "🌯", "🍗", "🥟"], // thức ăn 
         stopButton: `Dừng Chơi`,
         othersMessage: `Bạn không được phép sử dụng các nút cho tin nhắn này`,
})
snake.startGame();
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