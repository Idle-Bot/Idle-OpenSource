const { Client, Message, MessageEmbed } = require('discord.js');
const SnakeGame = require('snakecord');


module.exports = {
    name: 'snakecord',
    aliases: ['playsnake'],
    description: 'Start playing a snake game in discord with our bot!',
    usage: '+snakecord',
    category: 'fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {


        const snakeGame = new SnakeGame({
            title: 'Discord SnakeGame',
            color: "GREEN",
            timestamp: false,
            gameOverTitle: "You have lost!"
        });

        snakeGame.newGame(message);

    }
}