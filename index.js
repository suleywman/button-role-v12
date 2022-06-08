const Discord = require("discord.js");
const  sulo   = require('discord-buttons')
const client = new Discord.Client()
sulo(client);

const role1 = "984010057303859251" //1. rol idsi
const role2 = "984010094863876136" //2. rol idsi
const role3 = "984010168939474944" //3. rol idsi

client.on("message", (message) => {
  if (message.content !== "!button") return;

  let Ar = new sulo.MessageButton()
    .setStyle('red') 
    .setLabel('Rol 1') 
    .setID('A'); 

  let Br = new sulo.MessageButton()
    .setStyle('green') 
    .setLabel('Rol 2') 
    .setID('B'); 
  
  let Cr = new sulo.MessageButton()
    .setStyle("blurple") 
    .setLabel('Rol 3') 
    .setID('C'); 
  
  message.channel.send(`
   **Sunucu rollerini alabilirsin!**

  **__ROLLER__**;

  \`>\` <@&${role1}> **Sahip olmak için butona tıkla.**
  \`>\` <@&${role2}> **Sahip olmak için butona tıkla.**
  \`>\` <@&${role3}> **Sahip olmak için butona tıkla.**
  `, { 
    buttons: [Ar, Br, Cr]
});
});
  
client.on('clickButton', async (button) => {
  
    if (button.id === 'A') {
        if (button.clicker.member.roles.cache.get(role1)) {
            await button.clicker.member.roles.remove(role1)
            await button.reply.think(true);
            await button.reply.edit("A Rol üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(role1)
            await button.reply.think(true);
            await button.reply.edit("A Rol üzerinize verildi.")
        }
    }

  
    if (button.id === 'B') {
        if (button.clicker.member.roles.cache.get(role2)) {
            await button.clicker.member.roles.remove(role2)
            await button.reply.think(true);
            await button.reply.edit(`B Rol üzerinizden alındı.`)
        } else {
            await button.clicker.member.roles.add(role2)
            await button.reply.think(true);
            await button.reply.edit(`B Rol üzerinize verildi.`)
        }

    }
  
    if (button.id === 'C') {
        if (button.clicker.member.roles.cache.get(role3)) {
            await button.clicker.member.roles.remove(role3)
            await button.reply.think(true)
            await button.reply.edit(`C Rol üzerinizden alındı.`)
        } else {
            await button.clicker.member.roles.add(role3)
            await button.reply.think(true);
            await button.reply.edit("C Rol üzerinize verildi.")
        }
    }
});
  
client.login("TOKEN")