const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    description: 'Bulkdeletes messages in the channel',
    usage: '+purge <amount of messages>',
    category: 'moderation',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {


        const amount = args[0];
        if(!args[0]) return message.channel.send(new MessageEmbed().setDescription('<:idle_wrong:867305011137740840> Please specify how many messages you want to purge').setColor("RED").setTimestamp())
        if(isNaN(args[0])) return message.channel.send(new MessageEmbed().setDescription('<:idle_wrong:867305011137740840> You can\`t put words as the amount of messages you want to delete').setColor("RED").setTimestamp())
        if(parseInt(args[0]) > 99) return message.channel.send(new MessageEmbed().setDescription('<:idle_wrong:867305011137740840> You can\`t delete more than 99 messages at once').setColor("RED").setTimestamp())

        await message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
            message.channel.send(
                new MessageEmbed()
                .setDescription(`<:idle_correct:867340107699060756> Sucessfully deleted \`${args[0]}\` message(s)`)
                .setColor("GREEN")
                .setTimestamp()
            )
        })

    }
}