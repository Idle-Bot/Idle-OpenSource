const { Client, Message, MessageEmbed } = require('discord.js');
const schema = require('../../models/custom-commands')

module.exports = {
    name: 'customcommand',
    aliases: ['cc'],
    description: 'Automaticly responds to a message from the servers auto-respond system',
    usage: '+cc <message> <respond>',
    category: 'utility',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command');

        const name = args.slice(0).join(" "); const response = args.slice(2).join(" ");

        if(!name) return message.channel.send('<:idle_wrong:867305011137740840> Please specify a command name');
        if(!response) return message.channel.send('<:idle_wrong:867305011137740840> Please specify a response');

        const data = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(data) return message.channel.send('<:idle_wrong:867305011137740840> This custom commands exists already!');
        const newData =  new schema({
            Guild: message.guild.id,
            Command: name,
            Response: response
        })
        await newData.save();
        message.channel.send(`<:idle_correct:867340107699060756> Saved **${name}** as a custom command!`);

    }
}