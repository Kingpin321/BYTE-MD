
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJOMXFQR05jcEw5YklBWDd5WERGcHRTakN5cysvcmJNMVV4Vlk2MHFuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3FjT2lIYUFxMjl0SkhIZUhRdEwzOEdDQUxXcUl1ZXcxVTZpOTVQc1F5Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQlNSWEpnQzBjRmQ2bzljdzN6N2xsRmlMd0I3dDVocSs2cW1Rb2pPc25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMT0Rxb2Y3ZCtiUFN5ZnN1SHluQlNqWm1lUlhtWDNYM1V1SVgzSzE1bEhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGQWZOaEJ3ZXhId1h4K2NhZGNVTm9YaDlYNXkxYzRJZC84Tm9UYWx1RXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9tdlRpb0R3ZVMwSTNkSVdQa3FiWE5qNnE5WkVOenVaZmdqNzJTaUU0UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFHa1FGd21TdllHSU5rUjlMazBmd2RXRGRhQzdjbWdLbG52WUpCS3NVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1c3Z3Z5RlNITERvWVZQQWhYRVFzdHFXU0tLc1JiNlhubnNIUVZqcFNFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUySWtxdTErckxpQjdGVldPaVd5MFU3eVlBNWFuZG1nS1Q5QnAxcE1UMmNCR2NjcHRvREpVYXh3K1lZU1k1TkY5c3JFWHBnVlJZRnVRUjhML1diM0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6ImpBTXI2eHpTSm55SFNkZm4wZU1CUi9GamRFUTBrSTdJMHNkMitlczBsZzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iml6amZ4NG94U1BxNVpNV003d0tZUkEiLCJwaG9uZUlkIjoiZGVhMjZiNTUtN2RjYi00YzkxLWE1NjMtYjNlNDc4NTI1MjZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNicmRUTm1NZnVVaHhzRU9kTkVZRzVQRy9KMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTbXdCS05VQUN3V04vdUl1RTM1bTQ4UUNOVDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzFBNUtMVEwiLCJtZSI6eyJpZCI6IjI1NDc1NDA5OTkzMToxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTY29vcHkgU2F2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYncxaWdRMDZqQXRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5b0hlSHU2MStoTWV2WTY2cEFYd1ZKZEdSQWdFMWZudTd6R2lCVWdNL2lNPSIsImFjY291bnRTaWduYXR1cmUiOiJtTmZpSHUwTEZyZG80M21Pb3RzbytsZXdTQk94NTRCSXQ4QUJCNnJHbUhoeFJhNjhPeHpDc2lhT2RkRWVDMVdGdDZQVGxDMXgvWWZhZ0JaVE1FSkdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieHBnSy9Jb01ab3cyYWJuNUJ4NHgwbjVlQmRDRVlIemc1TWZRZXFQYmQvQUI3M2VES0tCUUNHbVZHbGczeTBhMkdwTjFrdlozaGx6VVpON0w5cHZxQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTQwOTk5MzE6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFCM2g3dXRmb1RIcjJPdXFRRjhGU1hSa1FJQk5YNTd1OHhvZ1ZJRFA0aiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDcxODQyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBV0QifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Kingpin*",
  author: process.env.PACK_AUTHER || "Kingpin",
  packname: process.env.PACK_NAME || "♥️",
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
