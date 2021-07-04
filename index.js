// ===================================================
// Start script
// ===================================================

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const R = require("ramda");
const create = require("./function/create");
const tools = require("./function/function");

client.on("ready", () => {
  console.log("Login as: " + client.user.tag);
});

client.on("voiceStateUpdate", async (OldMember, NewMember) => {
  const NewChannel = NewMember.channel;
  const OldChannel = OldMember.channel;

  // Users Join channel
  if (
    NewChannel != null &&
    (NewChannel.id == config.channel_galeon ||
      NewChannel.id == config.channel_tdm ||
      NewChannel.id == config.channel_scrim ||
      NewChannel.id == config.channel_sloop ||
      NewChannel.id == config.channel_portosloop ||
      NewChannel.id == config.channel_portogal ||
      NewChannel.id == config.channel_portobrig)
  ) {
    await create(NewChannel, NewMember, config);
  }
  // Users leave channel
  if (
    OldChannel &&
    (OldChannel.name.startsWith("⚓ Galleon") ||
      OldChannel.name.startsWith("⚓ Sloop") ||
      OldChannel.name.startsWith("💥 TDM") ||
      OldChannel.name.startsWith("📯 Scrim") ||
      OldChannel.name.startsWith("🚢Galeone") ||
      OldChannel.name.startsWith("🚤Brigantino") ||
      OldChannel.name.startsWith("⛵️Sloop"))
  ) {
    await tools.deleteChannel(OldChannel);
  }
});

client.login(config.token);
