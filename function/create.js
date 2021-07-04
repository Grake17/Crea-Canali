// ===================================================
// Function create
// ===================================================

const { createChannel } = require("./function");

var num_gal = 0
var num_sloop = 0
var num_scrim = 0
var num_tdm = 0
var porto_gal = 0
var porto_brig = 0
var porto_sloop = 0

async function reset(num){
    if(num > 20){
        return 0
    } else {
        return num + 1
    }
}

module.exports = async function create(NewChannel, NewMember, config) {
    switch (NewChannel.id) {
        case config.channel_galeon: // Create Galeone Channel
            let name_gal = "⚓ Galleon #" + (num_gal + 1) + " 🚢"
            await createChannel(name_gal, NewChannel, NewMember, config.parent, config.Galleon_limit)
            num_gal = reset(num)
            break;
        case config.channel_sloop: // Create Sloop Channel
            let name_sloop = "⚓ Sloop #" + (num_sloop + 1) + " ⛵"
            await createChannel(name_sloop, NewChannel, NewMember, config.parent, config.Sloop_limit)
            num_sloop = reset(num)
            break;
        case config.channel_tdm: // Create TDM Channel
            let name_tdm = "💥 TDM #" + (num_tdm + 1) + " 💥"
            await createChannel(name_tdm, NewChannel, NewMember, config.parent, config.TDM_limit)
            num_tdm = reset(num)
            break;
        case config.channel_scrim: // Create Scrim Channel
            let name_scrim = "📯 Scrim #" + (num_scrim + 1) + " 📯"
            await createChannel(name_scrim, NewChannel, NewMember, config.parent, config.Scrim_limit)
            num_scrim = reset(num)
            break;
        case config.channel_portogal: // Create Porto Sloop
            let name_portogal = "🚢Galeone #" + (porto_gal + 1)
            await createChannel(name_portogal, NewChannel, NewMember, config.parentporto, 4)
            porto_gal = reset(num)
            break;
        case config.channel_portosloop: // Create Scrim Channel
            let name_portobrig = "🚤Brigantino #" + (porto_brig + 1)
            await createChannel(name_portobrig, NewChannel, NewMember, config.parentporto, 3)
            porto_brig = reset(num)
            break;
        case config.channel_portosloop: // Create Scrim Channel
            let name_portosloop = "⛵️Sloop #" + (porto_sloop + 1)
            await createChannel(name_portosloop, NewChannel, NewMember, config.parentporto, 2)
            porto_sloop = reset(num)
            break;
        default:
            return;
    }        
}