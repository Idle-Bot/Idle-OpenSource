const { Client, Message, MessageEmbed } = require('discord.js');
const schema = require('../../models/custom-commands')

module.exports = {
    name: 'customcommand-delete',
    aliases: ['cc-delete'],
    description: 'Deletes an auto-respond that was previously created from your server',
    usage: '+customcommand-delete <respond name>',
    category: 'utility',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<:idle_wrong:867305011137740840> You do not have permissions to use this command');

        const name = args[0];

        if(!name) return message.channel.send('<:idle_wrong:867305011137740840> Please specify a command name');

        const data = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(!data) return message.channel.send('<:idle_wrong:867305011137740840>That custom command does not exist!');
        await schema.findOneAndDelete({ Guild: message.guild.id, Command: name });
        message.channel.send(`<:idle_correct:867340107699060756> Removed **${name}** from custom commands!`);
    }
}