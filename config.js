
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "254702626305@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Kingpin321/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "254702626305";
global.sudo = process.env.SUDO || "254716860343";
global.owner = process.env.OWNER_NUMBER || "254702626305";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0szVmRxdVlnSEpDV1Q0TituOCtkcnYzTzZ2UktpakRnRWJxazZiekFsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjIvcHA4azRKak1ZNTV4dDFqbDNOWWdwWkMxQTVmaDZ1bWIydTdRMDhoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSENFYnJiNXdvbHRZb2FZVVF3QkRuTDRNdXo4OFlxLzNndmNvd1I0ZTFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodWIzdGhsMXdsbjhucngwMElleDR4WTlhRTNwZDg3WkJUaWRGK1FhTEhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCVk83SFVnK3lMNDUxZTRXZlhPMWNJc0lZNzVTMmNuR1o0ZGkvZGFLMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild6UFJacjdXMTVpb05TNGRBVlZUL0UxTEdIdUxMaDVxdDdTeTlYRVMwazg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUphWjc2ajZTeHg3b0F1VVpFL1ByY2J1aStUWWFwQnVlUUZ6S2VXWXNtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0lwVnRtajdLSkFFTVRVUU9WU3gvQ1VDbFE4aVhyVmJuUWViM3FiT0pIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEySVJ0NFB5RWsySE9JUjhMQ3ZRVnR1QzRsZGY0THBBS29iZU43NU5xZWNQNWFWdEk1N0pSdTM0L0Zuelowekh1eG9GeU1IdmRkS1F3VTJyd2FKamdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJYNThFTEdnNVRqeXRZTkpFcEd4QkhXSHV1VitITUQvNndpajc0Qkd5TkVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXajlhS2VNZFRZMmt5ekRBUV9Nc3ZBIiwicGhvbmVJZCI6Ijk5ZGU3ZTQxLTEwZmQtNGVhZC04ZjNiLWEzMzVjNDU5MjNkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESUZWSDJzeTQ1dDlsb2NkaTVobmxmWWR4eFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE9qQjk1ZzBiUmNBTTBIczl2bDllbzFpbzY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg4VExYWlg5IiwibWUiOnsiaWQiOiIyNTQ3NTk3OTk5OTU6MjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMZjBUd1FnY09YdFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJEeC9UOFIyV1dXZGVKZ1Z5bU4zN1BPTFJEbEk4d29IbzN3NzUwTXFKQVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjYvOHBGWm54SWZTMEw2ZW91M2ovZW5nenE2bExtUGtQQ25ZYUxwTlhrK0JFR1o4Q0d1SGNpOG05R25aVkNjNmx0bzFJR3F3aHZzYjd3emdLMXpXOER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDSXdXK3FsQnFQbGhqaTFYbi9qamMwR1dSdDhLMVo5blFpL1FJWkZMOFBnbk5abTdPaEp3L3pPRFZzenZZbzhZTjUwRFN2Z08wMzZLb2FBUVM2c0xqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1OTc5OTk5NToyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZzhmMC9FZGxsbG5YaVlGY3BqZCt6emkwUTVTUE1LQjZOOE8rZERLaVFFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTQ3MjE1fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.0.0",
  caption: process.env.CAPTION || "*𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐊𝐈𝐍𝐆𝐏𝐈𝐍😍",
  author: process.env.PACK_AUTHER || "Kingpin",
  packname: process.env.PACK_NAME || " Kingpin♥️",
  botname: process.env.BOT_NAME || "KINGS-MD",
  ownername: process.env.OWNER_NAME || "🇰🇪KINGPIN TECH🇰🇪",
  errorChat: process.env.ERROR_CHAT || "254702626305",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KINGS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
