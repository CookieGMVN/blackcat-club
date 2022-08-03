const { GatewayIntentBits, Partials } = require("discord.js");
module.exports = {
  Client_BlackCat: function() {
      return {
         restTimeOffset: 0,  
         fetchAllMembers: false,
         shards: "auto",
         allowedMentions: {
            parse: ["users"],
            repliedUser: false 
         },
         restWsBridgeTimeout: 100,  
         failIfNotExists: false,
         partials: [
            Partials.Message, 
            Partials.Channel,  
            Partials.Reaction,  
         ],
         intents: [
            GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, 
            GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, 
            GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent, 
         ]
     };
  }, 
  /*
   * GAME
   */
  Game: {
    SnakeGame: require("./Modules/Game/snake"),
    ConnectFour: require("./Modules/Game/connect4"),
  },
  /////
  
  embedPages: require("./Modules/Commands/embedPages"),
  ascii: require("./Modules/Modules/cmdlog"),
  version: require("./package.json").version,
  infoBLC: function() {
     const { version, author, name } = require("./package.json");
     const ascii = require("./Modules/Modules/cmdlog");
     var table = new ascii("BlackCat-Club");
     table.setHeading("Tên Mục", "Thông Tin");
     table.addRow("author:", `${author}`)
     table.addRow("name:", `${name}`)
     table.addRow("version:", `v${version}`)
     return table.toString();
  },
  colors: require("colors"),
  files_name: require("path"),
  fetch: require("node-fetch"),
  Discord: require("discord.js"),
  DjsVoice: require("@discordjs/voice"),
};