const { Client, Message, MessageEmbed } = require('discord.js');
const { chatBot } = require('reconlx')

module.exports = {
    name: 'chat',
    description: 'Create a conversation with our bot!',
    usage: `+chat <message>`,
    aliases: ['talk'],
    category: 'fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        

 
        chatBot(message, args.join(" "));

    }
}