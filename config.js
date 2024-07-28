
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
  "Byte;;;Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhRMXlldjByWDRYNG1vUlllN3EyUDl2cWJXUEo5OFgzam8rQXYvTGRsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmh3cjR1ZHlRcHBOdEt6ZFUzb04zWnc4ZTRwU3loRVBVWGE1V0wzNHFrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR1duNC9vSWVpbkhzbHBJZUphcGkxNlFmaitLV2JOWGFzOURzM2RUdlYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJbWowU3Q3ZE5iQXA0WUFacVVGVlVCbUg5WkhCN3dYZFdnUVRkUlV1d2h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEVU5wQzJNUU1XQzRkVzVtSlJSclJ4VTBlSWlTTXM5RkdQeHdCMFY4VUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5RUTRxYklJTGZNYmJDQUk4ZW5DUjhYbUFBWHdiZmsxSXRRbTBVZjhsUUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBnalBTNzZmMENHM2p0NzY2czRQUEY2NVY2cWtlWG1md3VpaTI5ZkcwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkFhQ3NjS2JSQUVXTzFPOFFjS2F4SHhPdDVzUVl3MEtWM3BWVUMvRUpCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEUFFPblVGTnlVcm5OWm9tU25LMXJpRWJoVjR5Wk0rN2xaL3ZtaDdEdzZBd2ZFUVNsWXlJUlRscUtHOEE3a0xTd0V4UHR4TDVoc29EU3V3KzkwQWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJZZ01abXZIdkdsMG5Ed1NBUHo2eDY3RTAzM01Rb01JQ3V2WlZMTkMyVlhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjA0NjkwMjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTQ4RDRCQUQwQzZDNjA5QkY5RkNCQjI1QzkxMEQ2MjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjEwODgwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYmJMX3ppVkZURHlLcXJ2UER6Z1ItUSIsInBob25lSWQiOiIzYzkwMTAwYS0xN2U4LTRlNjMtOTZjYS01ZjA0YzQzZWNjZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXhRcTN3aXZlNUpuQzdxTHVjWU5QaFlCWVBvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndmOU42NEREQ2ovdnJCS3FLa0xCNERqdG1qVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGMzJWUU4ySiIsIm1lIjp7ImlkIjoiMjM0ODE2MDQ2OTAyNTozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9sYXNjbyBHb2xkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdWVvT3NIRVBPV2xiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2T3QrR3JCQkgxZFNiVjNuVGVCbko2eFZBQXVHYldkTkhWbituRWVHaGtNPSIsImFjY291bnRTaWduYXR1cmUiOiJ0R0RyZGpLT1YxY3hTeU5JeG96Q2ZzcUptMkdiVU5SQTNwS2dIaGdGSlEwcWxIbVROZEtHS0tUZWpEa3c3U3lFWjdyclUyZUhZSWtuSWZ3SlpPZ1ZDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib0RLMVEybkgwbmMzQW1mMnB5ajFvdnNkNmdkVGVURXVNVDRhWFVIcnFyRUhlVXhhOXNsMnVEZFRTV3VwSVFtb0x5bjlCaTB0emIvdnYvZ1hJNXlwaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYwNDY5MDI1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnpyZmhxd1FSOVhVbTFkNTAzZ1p5ZXNWUUFMaG0xblRSMVovcHhIaG9aRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjEwODgwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIajMifQ=="
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
