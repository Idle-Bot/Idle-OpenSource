const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../events/reconDB')
const config = require('../../config.json')


module.exports = {
    name: 'help',
    description: 'Sends the help embed',
    usage: '+help',
    category: 'help',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        let prefix = await db.get(`${message.guild.id}.prefix`)
        if(!prefix) prefix = config.default_prefix;

        const mainPage = new MessageEmbed()
        .setTitle(`${client.user.username} Commands`)
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`To get the bot prefix , mention the bot in the channel | ${client.user}\n\n**Bot Configs :** \`${prefix}setprefix <new prefix>\` \n\n**Commands Category**\n\`${prefix}help config\`\n\`${prefix}help moderation\`\n\`${prefix}help utility\`\n\`${prefix}help fun\``)
        .setTimestamp()
        .setColor("BLURPLE")

        const configPage = new MessageEmbed()
        .setTitle(`${client.user.username} Config Commands`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**Configs**', `\`${prefix}setprefix\` | Sets a new prefix for the server\n\`${prefix}resetprefix\` | Resets' the server prefix to the default prefix`)
        .setTimestamp()
        .setColor("BLURPLE")

        const moderationPage = new MessageEmbed()
        .setTitle(`${client.user.username} Moderation Commands`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**Messages**', `\`${prefix}purge\` | BulkDeletes the amount of messages in the command`)
        .setColor("BLURPLE")
        .setTimestamp()

        const utilityPage = new MessageEmbed()
        .setTitle(`${client.user.username} Utility Commands`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**Custom Commands**', `\`${prefix}customcommand\` | Creates a custom command\n\`${prefix}customcommand-delete\` | Deletes a custom command\n\`${prefix}customcommand-list\` | Sends the list of servers' custom comamnds`)
        .setTimestamp()
        .setColor("BLURPLE")

        const funPage = new MessageEmbed()
         .setTitle(`${client.user.username} Fun Commands`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**Games**', `\`${prefix}snakecord\` | Creates a snake game\n\`${prefix}tictactoe\` | Creates a tictactoe game\n\`${prefix}trivia\` | Creates a trivia embed`)
        .addField('**Chat System**', `\`${prefix}chat\` | Start a conversation with the bot\n\`${prefix}say\` | Says something that you provided in the command`)
        .setTimestamp()
        .setColor("BLURPLE")
        
        if(!args[0]) {
            message.channel.send(mainPage);
        }
        if(args[0].toLowerCase().toString() === 'config') {
            message.channel.send(configPage)
        }
        if(args[0].toLowerCase().toString() === 'utility') {

            message.channel.send(utilityPage)

        }
        if(args[0].toLowerCase().toString() === 'fun') {
            message.channel.send(funPage);
        }
        if(args[0].toLowerCase().toString() === 'moderation') {
            message.channel.send(moderationPage)
        }
        
      
        
    }
}