module.exports = {
  // Client bot
  Client_BlackCat: require("./Modules/functions/Client"),
  // embedpages button 
  embedPages: require("./Modules/functions/embedPages"),
  // path 
  files_name: require("./Modules/Commands/path"),
  // util
  util: require("./Modules/support_files/util"),
  // table
  ascii: require("./Modules/Modules/cmdlog"),
  // version package
  version: require("./package.json").version,
  // discord.js
  Discord: require("discord.js")
}; 