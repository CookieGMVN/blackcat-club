const { GatewayIntentBits, Partials, Collection, EmbedBuilder,  ButtonBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
module.exports = {
   /****
      **  Client Bot 
   ****/
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
  /***
     *
  ***/
  // embedpages button 
  embedPages: require("./Modules/functions/embedPages"),
  // table
  ascii: require("./Modules/Modules/cmdlog"),
  // version package
  version: require("./package.json").version,
  /* 
   *   PACKAGE 
   */
  colors: require("colors"),
  files_name: require("path"),
  Discord: require("discord.js"),
  Discord_Voice: require("@discordjs/voice"), 
}; 