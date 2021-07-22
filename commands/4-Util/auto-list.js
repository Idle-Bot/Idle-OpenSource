const { Client, Message, MessageEmbed } = require('discord.js');
const schema = require('../../models/custom-commands')

module.exports = {
    name: 'customcommand-list',
    aliases: ['cc-list'],
    description: 'Sends the list of all of the servers\' auto responds',
    usage: '+customcommand-list',
    category: 'utility',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const data  = await schema.find({ Guild: message.guild.id });
        if(!!data === false) return message.channel.send('<:idle_wrong:867305011137740840> There is no custom commands!');
        message.channel.send(
            new MessageEmbed()
                .setColor('BLURPLE')
                .setDescription(
                    data.map((cmd, i) => 
                        `**${i + 1}**.): ${cmd.Command} | **Respond:** ${cmd.Response}`
                    ).join('\n')
                )
        )

    }
}