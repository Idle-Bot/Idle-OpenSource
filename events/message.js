const { Collection, MessageEmbed } = require('discord.js')
const Timeout = new Collection();
const schema = require('../models/custom-commands')
const db = require('./reconDB')


module.exports.run = async (client, message) => {

  if (!message.guild) return;



  const config = require('../config.json')

  let prefix = await db.get(`${message.guild.id}.prefix`)
  if(!prefix) prefix = config.default_prefix;

  if (message.mentions.users.first() === client.user) {
    const replyEmbed = new MessageEmbed()
      .setDescription(`The current prefix for your server is \`${prefix}\``)
      .setTimestamp()
      .setColor("BLURPLE")

    message.channel.send(replyEmbed)
  }

  const words = [
    "Fuck",
    "Sucks",
    "Bitch",
    "Nigger",
    "Nigga",
    "Cock",
    "Ass",
    "Asshole"
  ]

  





  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;


  const data = await schema.findOne({ Guild: message.guild.id, Command: message.content });
  if (data) message.channel.send(data.Response)

  // Get the command
  let command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!command) return;




  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------

  if (command.cooldown) {
    if (Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}\` cooldown.`)
    command.run(bot, message, args)

    Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
    setTimeout(() => {
      Timeout.delete(`${command.name}${message.author.id}`)
    }, command.cooldown)
  }

  //NOW LETS TEST

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args);







}


//-------------------------------------------- F U N C T I O N ------------------------------------------
