require("dotenv").config()

const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

const BOT_PREFIX = ""
const MOD_ME_COMMAND = "mod-me"

client.on("ready", () => {
  console.log("Fix mexi")
})

// client.on("messageDelete", msg => {
//   msg.channel.send("Stop deleting messages")
// })

client.on("message", msg => {
  if (msg.content == "wat") {
    msg.channel.send("hoezo");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
  }
})

client.on('message', message => {
    if (message.content === 'mexico') {
        getal1 = Math.floor(Math.random() * 6)+1;
        getal2 = Math.floor(Math.random() * 6)+1;
        
        if (getal1 === 1){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-one.png';
        } else if (getal1 === 2){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-two.png';
        } else if (getal1 === 3){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-three.png';
        } else if (getal1 === 4){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-four.png';
        } else if (getal1 === 5){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-five.png';
        } else if (getal1 === 6){
            dice1 = 'https://img.icons8.com/windows/2x/ffffff/dice-six.png';
        }
        if (getal2 == 1){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-one.png';
        } else if (getal2 == 2){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-two.png';
        } else if (getal2 == 3){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-three.png';
        } else if (getal2 == 4){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-four.png';
        } else if (getal2 == 5){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-five.png';
        } else if (getal2 == 6){
            dice2 = 'https://img.icons8.com/windows/2x/ffffee/dice-six.png';
        }
      message.channel.send({
        files: [dice1]
      });
      message.channel.send({
        files: [dice2]
      });
      console.log(getal1+ " " + getal2)
    }
  });

client.login(process.env.BOT_TOKEN)