
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk54Q0dSZXZ1aWRkSHV0YkZNaFJ3L3VnY0k3VE9pOHFRL1ZEVTRtVU9Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXYvNFJmaldnSTBsb0djVGtHcXhObDkyUkxjeHZLdlBhUUZJNVBhLzlnTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTnVhT2hIb1JiaUFEZGUvWHBBaDlIbVluTXl2V25KUUV0WFhkck01c0VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjcTZLL0g0dVVRUU1hUXdkRDl3ZmR0dXkrNjM2M2pZaFlPd1pHOGpqdW44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEdVYzVHBxQm8zV3hxNDJWdXUwL096OWtXL1RTT3lsRjFVUzRaZ3lUWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill2QUdRSGFqSERBc2dSdVdCd3pLVG1OM0l1bW11alQ0OCtWdGJDcGF3QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVqTnJOYmh2ZEQrWGxpL0lHNm9hK0J2dVdiK0ZHY1NpQktyNUFmdlZudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXNabUw2akd0bzN6dGFQVEV6VGhsSGM3OHZzdE9kUTlkRjJLUFFzSnVCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QTU5ucmlqUzR5OGNQbnBUQXRDeGd2V3NoOUhkSDdEQWM5VHZjcEVBY01paEhPL2QrM3d6cVNKKzNLaFFUcW0zd3FYbnlrVVBxWFVlOXFnR3gvckFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJPSVIwMjRMNGtqZXRJMy9JdGlrcTRuTHBEVWdidVpVRmx6V1Jrd3VreDQ0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyTzdQVXdXX1IzZXdUOE95MGdmSVBRIiwicGhvbmVJZCI6IjI1OTVhMzUyLTM2ZjgtNDIwNS1iZTA4LWE3MjBjYTJmMzg1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDelgrVzFYVVV1aXk0NDlXZUxRZmROWmgycEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0MvMVRmd3pNNGpJNUd6ZWRudUt3REs3alNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZRNUxWRzlFIiwibWUiOnsiaWQiOiIyNjM3NzQxOTk0OTk6NTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHdHEya1F1cENIdFFZWUhpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilk2bnlGd3Urenk1ZDA5ZTBGWlBQWVFmNHkvQWdHSlF1djFEVFFWNEJzemc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9VblYzZ1VRejZSRTJySVdBdzBTQy9nMDNja21lVDA0QkpiUVpMaGFOSENEeEFnVy9ObUxuTDM0c3NBN3Y4Vms1TGthek9nc2p0c3YvZkYvN0gyUERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVM1BLaDdWMktxZXpLaGpWanJMeDAvUTJEem1PdlJoaWVXOHRWeDEvdmVFYmdHdWxPajBHZGJxblFlT3dFZnQ4SW1GaGx1S2FVSUcvVlNORUdBd2RBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NDE5OTQ5OTo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXT3A4aGNMdnM4dVhkUFh0QldUejJFSCtNdndJQmlVTHI5UTAwRmVBYk00In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODc4NTk4fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Kingpin*",
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
