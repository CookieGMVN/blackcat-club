module.exports = {
  // Client bot
  Client_BlackCat: require("./Modules/functions/Client"),
  // embedpages button 
  embedPages: require("./Modules/functions/embedPages"),
  // table
  ascii: require("./Modules/Modules/cmdlog"),
  // version package
  version: require("./package.json").version,
  /* 
   *   PACKAGE 
   */
  files_name: require("path"),
  Discord: require("discord.js"),
  Discord_Voice: require("@discordjs/voice")
}; 