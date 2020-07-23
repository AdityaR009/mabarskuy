const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
console.log("bisa di pake");          
});
 

client.on("message", async message => {

 if (message.content === "!ms command") {
message.channel.send("**Command** :[__!ms-help__]-[__!ms yuri1-5__]-[__!ms meme__]-[__!ms channel__]-[__!ms game__]-[__!ms]");
 }

if (message.content === "!ms help") {
message.channel.send("**Halo** saya maskot server dan silahkan ketik [!ms command] tanpa [] untuk list command nya :)");
 }

if (message.content === "!ms channel") {
message.channel.send("**list channel** : baca di #read_this");
 }
  
  if (message.content === "!ms server") {
message.channel.send("**>Server yang di dirikan atas dasar tidak ingin bermain dengan random player, karna kita tidak tau apa yang akan terjadi saat main dengan orang tidak di kenal.**");
 }

if (message.content === "!ms game") {
message.channel.send("**list game di Mabar Skuy** :[CODM]-[CSGO]-[FF]-[Web Game]-[MINECRAFT]-[ML]-[OSU!]-[PUBG]-[PUBGM]-[VALORANT] [Left 4 Dead], **Selamat mabar**.");
 }


if (message.content === "!ms meme") {
message.channel.send("**meme list**: [upin]-[halal]-[doge]-[puyuh]-[school]-[anime] gunakan comand meme+tag tersebut, Contoh:[!ms meme upin] tanpa [].");
 }

if (message.content === "!ms meme upin") {
message.channel.send("https://i.pinimg.com/474x/41/7c/4c/417c4c4c34aabba31c609d25cceed65c.jpg");
 }

if (message.content === "!ms meme doge") {
message.channel.send("https://img-9gag-fun.9cache.com/photo/aZ7zVBV_460s.jpg");
 }

if (message.content === "!ms meme school") {
message.channel.send("https://cdn.discordapp.com/attachments/707735366295355472/730321368050171914/unknown.png");
 }

if (message.content === "!ms meme anime") {
message.channel.send("https://cdn.discordapp.com/attachments/707735366295355472/730325184417890314/Screenshot_20200706-2108592.png");
 }

if (message.content === "!ms meme puyuh") {
message.channel.send("https://cdn.discordapp.com/attachments/729302904615207045/729557164057952307/puyuh.mp4");
 }

if (message.content.startsWith ("!ms meme halal")) {
message.channel.send ("https://cdn.glitch.com/d0c74181-e9a4-4c7a-8499-ed18d47e4e86%2FScreenshot_20200702-2323092.png?v=1594003653975","https://cdn.glitch.com/d0c74181-e9a4-4c7a-8499-ed18d47e4e86%2F8-0ac25697bb899957f6640b47aa9b1384.jpg?v=1594006830125");
 }

 if (message.content === "!ms yuri") {
message.channel.send("https://cdn.discordapp.com/attachments/707735366295355472/729213678729297929/yuri.gif");
 }

  if (message.content === "!ms yuri2") {
message.channel.send("https://cdn.discordapp.com/attachments/707735366295355472/733217659860025435/621813813943205901.gif");
 }
  
   if (message.content === "!ms yuri3") {
message.channel.send("https://cdn.discordapp.com/attachments/590712356838047749/735721935693938688/yuri3.gif");
 }
  
  if (message.content === "!ms yuri4") {
message.channel.send("https://media.tenor.com/images/0e59006fafd34091ab9a8661f89ec145/tenor.gif");
 }

  if (message.content === "!ms yuri5") {
message.channel.send("https://cdn.zerotwo.dev/KISS/cec73ce9-c133-4a8a-8e40-045c878ee72c.gif");
 }
  
  if (message.content === "!ms kocheng") {
message.channel.send("https://cdn.discordapp.com/attachments/590712356838047749/735716214453829642/images_19_7.jpeg");
 }

   if (message.content === "!ms ayam") {
message.channel.send("https://cdn.discordapp.com/attachments/590712356838047749/735722552818794556/images_19_8.jpeg");
 }
  
});
client.login('NzI5MTc0ODQ3MjcxMjA3MDIy.XwGi_g.T3N39PwD1C2m6cURM6Xh4-ITSh4')