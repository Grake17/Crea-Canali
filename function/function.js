// ===================================================
// Function 
// ===================================================

module.exports = {

    createChannel: async function (name,NewChannel,NewMember, parente, limit){
        var pos = NewChannel.position 
        console.log(pos, NewChannel.position)
        await NewMember.guild.channels.create(name, {
            type: "voice",            
            userLimit: limit,
            position: pos 
        }).then(async channel => {
            await NewChannel.setParent(parente)
            await NewMember.setChannel(channel.id)
        }).catch(e => console.error(e))
        return;
    },

    deleteChannel: async function (OldChannel){
        let num = OldChannel.members.size
        if(num == 0) await OldChannel.delete("No members");
        return;
    }

}