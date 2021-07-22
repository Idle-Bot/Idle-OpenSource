const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    permissions: ["MANAGE_MESSAGES"],
    description: 'The bot says the word you provided in the command',
    usage: '+say <message>',
    category: 'fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {


        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<:idle_wrong:867305011137740840> You need `MANAGE_MESSAGES` permission.')
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            const sayto = args.join(" ");
            if(!sayto) return message.reply('<:idle_wrong:867305011137740840> Please give a message for me to say').then((m) => {
                setTimeout(() => {
                    message.delete();
                    m.delete();
                }, 3000);
            })
            if(sayto) {
                message.delete();
                message.channel.send(sayto)
            }
        }


    }
}