const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../events/reconDB')


module.exports = {
    name: 'resetprefix',
    description: 'Resets the server prefix to default prefix',
    usage: '+resetprefix',
    category: 'config',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        db.delete(`${message.guild.id}.prefix`).then(() => {
            message.channel.send('<:idle_correct:867340107699060756> **Prefix has been resetted**')
        })

    }


}