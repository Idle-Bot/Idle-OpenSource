const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../events/reconDB')

module.exports = {
    name: 'setprefix',
    aliases: ['prefixset'],
    description: 'Changes the prefix for the server',
    usage: '+setprefix <new prefix>',
    category: 'config',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        if(!args[0]) return message.channel.send('<:idle_wrong:867305011137740840> Please specify a prefix to change to')

        const data = await db.set(`${message.guild.id}.prefix`, args[0]);
        message.channel.send(`**Prefix set to :** ` + `\`${args[0]}\``);

    }
}