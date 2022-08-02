# BlackCat-Djsv14
sử dụng bot discord v14 cực kỳ đơn giản với BlackCat-djs
#Nút Buttons v14
```js
npm:
const { embedPages } = require("blackcat-djs");
let embed1 = new EmbedBuilder().setDescription(...)
let embed2 = new EmbedBuilder().setDescription(...)
run: .... {
  ///////// code pages
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