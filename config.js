
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
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Kingpin321/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxhRDU3RHMvdExQczVQUTVhNHlTZXA3WERhYWp0OFNHeWFuTzNFQ08xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGZyR1ZraEVVanBRbnduenk3QlVTRktHOUtGb2J2LzQydDIxRWVUeVdrdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR3creUtrOFBsUmhNNEVsV1BPTTlzUVFQR0dpemJoL2xBNkNGSVlkNkVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTjFFTEN6VXpMZ05iQ2ZvOGRHSjhkeHlQMWthMjZPRTZuQkxNMTc1K20wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCcjlUWEE1ZkFYa05VeTJSaDB0dUhselhib0txbVhpd1phNmVQak5ubXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc4cHJlQVBuRFlyVkp2NnRBU2F5Q2NlRE82RXRNYitEMWRKc0E5Y3h6QjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtNUVptTURLUlZTSXhhajhJbE1aZHNlZElrTlM2WjFDbFZPSmRpUnZuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3gyanVLVUNxUTBuUk8xYzdIM0QvRERqNWh6NFBqWmk5RGxWRDhERTR6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iksyb21SZ2trSGJBVTJaaFZvSUh1aWljSFRQOWdmemNKZXUxRk1Na1lDaUVod25pYnJuM3hESjFUNDNCUndSa3oyZ1R0M1BoSkpYNUFPUDFuUGtERGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InNuL1Z4NGR1ejBpT2QxWjdkT0dqU3JtdGVSd0hHSDFmN1gxOEdvRVFaR3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFUOVJ5UlRRUTRHSHB5MWlOSG5pOXciLCJwaG9uZUlkIjoiZGM1Y2IwMjYtMmRiOS00NWFmLWFmOTEtY2Y4YjcyMDYzYjU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9yOHZKMWhRRGNaakhweVVGaXE0QkYxYjdBaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTHJSa01nd21HWHJwVWQrcE04alorTVNtaHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREFDUkNKQlYiLCJtZSI6eyJpZCI6IjI1NDExNDI2MzQ5MzoyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExJK2RFQ0VObWZ5YlFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidlJFMXZ6N2txRlBXa2NQVXdZcFYyVGh4azQvSmtRUXV5Qk1zVXpoY3pTYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTlBaK3M0V2kwNVpEZ1RWU2c0d2dtbmlnZWl1cHZqWjRtcUVudU5vYitzMUZ4RjlvR0tETFZITlNRbjJHY1RNZjVpdFFud1NQbWhRRE9LQUd4aWVsREE9PSIsImRldmljZVNpZ25hdHVyZSI6InZONzFKUGo5VStWRzZLOHFlQjgyWWd0Z0NCWGUzL0g1b3VYQlAvTGFvTStjYmRPU3RwWHlteG1rQzF5ZzRYRjBnQ1FYTlY0Y29GSFV1YlU0UEFNYmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTE0MjYzNDkzOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIwUk5iOCs1S2hUMXBIRDFNR0tWZGs0Y1pPUHlaRUVMc2dUTEZNNFhNMG4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4NjQ3NDJ9"
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
  errorChat: process.env.ERROR_CHAT || "923072380380",
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
