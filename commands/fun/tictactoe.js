const { Client, Message, MessageEmbed } = require('discord.js');
const { tictactoe } = require("reconlx");



module.exports = {
    name: 'tictactoe',
    description: 'Create a tictactoe game in discord with the 2nd user you mentioned!',
    usage: '+tictactoe <@user>',
    category: 'fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const user = message.mentions.members.first();
        if(!user) return message.reply('**Usage :** +tictactoe <@user>')

        var game = new tictactoe({
            message: message,
            player_two: user,
        });



    }
}