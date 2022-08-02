const { GatewayIntentBits, Partials, Collection, EmbedBuilder,  ButtonBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
module.exports = {
  // await message
  wait: function(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    };
  },
  ////////////////////
  num: function(a, b) {
    const math = a + b;
    return math;
  },
  ////////////////////
  /***
   * Buttons Embed Pages
  ***/
  embedPages: async function(client, message, pages, style = {}) {
  	style.firstEmoji ||= '⏪'
	  style.forwardEmoji ||= '▶️'
	  style.backEmoji ||= '◀️'
	  style.lastEmoji ||= '⏩'
	  style.btncolor ||= 'Success'
	  style.delEmoji ||= '🗑'
	  style.delcolor ||= 'Danger'
	  style.skipcolor ||= 'Primary'
	  style.pgCount ??= false
	  style.skipBtn ??= true
	  style.delBtn ??= true
	  try {
		if (!pages)
		var comps
		if (style.rows) {
			if (!Array.isArray(style.rows))
			comps = rows
		} else {
			comps = []
		}
		let firstBtn = new ButtonBuilder()
			.setCustomId('first_embed')
			.setEmoji(style.firstEmoji)
			.setStyle(style.skipcolor)
		let forwardBtn = new ButtonBuilder()
			.setCustomId('forward_button_embed')
			.setEmoji(style.forwardEmoji)
			.setStyle(style.btncolor)
		let backBtn = new ButtonBuilder()
			.setCustomId('back_button_embed')
			.setEmoji(style.backEmoji)
			.setStyle(style.btncolor)
		let lastBtn = new ButtonBuilder()
			.setCustomId('last_embed')
			.setEmoji(style.lastEmoji)
			.setStyle(style.skipcolor)
		let deleteBtn = new ButtonBuilder()
			.setCustomId('delete_embed')
			.setEmoji(style.delEmoji)
			.setStyle(style.delcolor)
		let pageMovingButtons = new ActionRowBuilder()
		if (style.skipBtn == true) {
			if (style.delBtn) {
				pageMovingButtons.addComponents([ firstBtn, backBtn, deleteBtn, forwardBtn, lastBtn ]);
			} else {
				pageMovingButtons.addComponents([ firstBtn, backBtn, forwardBtn, lastBtn ]);
			};
		} else {
			if (style.delBtn) {
				pageMovingButtons.addComponents([backBtn, deleteBtn, forwardBtn])
			} else {
				pageMovingButtons.addComponents([backBtn, forwardBtn])
			};
		};
		var currentPage = 0
		comps.push(pageMovingButtons);
		var m
		if (message.commandId) {
			if (style.pgCount) {
				await message.followUp({ content: `***trang: 1/${pages.length}***`, embeds: [pages[0]], components: comps, allowedMentions: { repliedUser: false } });
			} else {
				await message.followUp({ embeds: [pages[0]], components: comps, allowedMentions: { repliedUser: false } });
			};
			m = await message.fetchReply()
		} else if (!message.commandId) {
			if (style.pgCount) {
				m = await message.reply({ content: `***trang: 1/${pages.length}***`, embeds: [pages[0]], components: comps, allowedMentions: { repliedUser: false }});
			} else {
				m = await message.reply({ embeds: [pages[0]], components: comps, allowedMentions: { repliedUser: false } });
			};
		};
		let collector = m.createMessageComponentCollector({ time: style.timeout || 120000 });
		collector.on('collect', async (b) => {
			if (!b.isButton()) return
			if (b.message.id !== m.id) return
			b.deferUpdate()
			if (b.user.id !== (message.user ? message.user : message.author).id) return;
			if (b.customId == 'back_button_embed') {
				if (currentPage - 1 < 0) currentPage = pages.length - 1
				else currentPage -= 1
			} else if (b.customId == 'forward_button_embed') {
				if (currentPage + 1 == pages.length) currentPage = 0
				else currentPage += 1
			} else if (b.customId == 'last_embed') {
				currentPage = pages.length - 1
			} else if (b.customId == 'first_embed') {
				currentPage = 0
			};
			if (b.customId !== 'delete_embed') {
				if (style.pgCount) {
					m.edit({ content: `***trang: ${currentPage + 1}/${pages.length}***`, embeds: [pages[currentPage]], components: comps, allowedMentions: { repliedUser: false } });
				} else {
					m.edit({ embeds: [pages[currentPage]], components: comps, allowedMentions: { repliedUser: false }});
				};
			} else if (b.customId === 'delete_embed') {
				collector.stop('del')
			};
		});
		collector.on('end', async (coll, reason) => {
			if (reason === 'del') {
				await m.delete().catch(() => {})
			} else {
				firstBtn = new ButtonBuilder()
					.setCustomId('first_embed')
					.setEmoji(style.firstEmoji)
					.setStyle(style.skipcolor)
					.setDisabled(true)
				forwardBtn = new ButtonBuilder()
					.setCustomId('forward_button_embed')
					.setEmoji(style.forwardEmoji)
					.setStyle(style.btncolor)
					.setDisabled(true)
				backBtn = new ButtonBuilder()
					.setCustomId('back_button_embed')
					.setEmoji(style.backEmoji)
					.setStyle(style.btncolor)
					.setDisabled(true)
				lastBtn = new ButtonBuilder()
					.setCustomId('last_embed')
					.setEmoji(style.lastEmoji)
					.setStyle(style.skipcolor)
					.setDisabled(true)
				deleteBtn = new ButtonBuilder()
					.setCustomId('delete_embed')
					.setEmoji(style.delEmoji)
					.setStyle(style.delcolor)
					.setDisabled(true)
				pageMovingButtons = new ActionRowBuilder()
				if (style.skipBtn == true) {
					if (style.delBtn) {
						pageMovingButtons.addComponents([ firstBtn, backBtn, deleteBtn, forwardBtn, lastBtn ]);
					} else {
						pageMovingButtons.addComponents([ firstBtn, backBtn, forwardBtn, lastBtn ]);
					};
				} else {
					if (style.delBtn) {
						pageMovingButtons.addComponents([backBtn, deleteBtn, forwardBtn])
					} else {
						pageMovingButtons.addComponents([backBtn, forwardBtn])
					};
				};
				m.edit({ components: [pageMovingButtons] });
			};
		 });
	  } catch (err) {
		  console.log(`embedPages | lỗi: ${err.stack}`)
	  }
   },
/***
  **
***/
};