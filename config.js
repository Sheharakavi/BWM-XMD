const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVa4+qSBD9K5v+qrMXEHmYTLKIgMqgIiojm/3QQIMtr7Zp8HEz/33DOJOZ7N57d5ZPnaY4derUqeI7KCtcIxtdweg7IBS3kKHuyK4EgREYN0mCKOiDGDIIRqCwhp4+sMqFuXXEImdzQTrOUKCVe+WQ9bxA44X9ddEGylZ5BC99QJowx9EvAGfqQPDh2D/5aHD0N2Nrai+fdomfodv0OWwu5iY6Hd25gLbaI3jpECGmuEwNckAFojC30XUFMf0a/b3TSOtz8FRPU2VrV5QssBS3qRwMN85241ULdz22yt7kaLhfoz/Hi0NV3cIr98x8K9/mRhUP1oFVccLKX2cmcu3TiSqTJ+uNfo3TEsWzGJUMs+uXdTdM3TwZi1LdJ9a5uCk2JU9LbpXOg5u2801B/DbIz0MBtfz2a8SJ7xWXWlL9lqDKs0myLtdBsA3NBa0n3EkMw6a3O0qpys8+E1/Rd69k/0d3aRyYxf4pIo2DyGpH3CPXPgX5XlvKeSLYoSFhN2yd09NXdTeupa4Y22+TxfEWz4W5veztTJ2D5b5cSMQ6o5af0Srhe9j5oA9ZQ3/FsjonRNcLIzt4l8zysiAchpfq1Ji4R1fTjdes56ujHxyywTS6aVJ5mUnnlS3NkmjfHj2+amf6IliHjW6F2aIOBV4Obew+vlaUoessBiP+pQ8oSnHNKGS4Kl/vhD6AceuhiCL2qi4Inp01mm4utBBPSRQKRnY7G5n2fNN1QwsnrirZczNoxXTnPoI+ILSKUF2jeIprVtGrg+oapqgGoz9fG9XVTFFRMTTHMRgBVZR5QRwoKif+Uf9+PkBWQ0J+LxEDfZDQqnAQGDHaoD54jZe1oTERBvJwoqsmxw05Y8CNx4oo6KI6MYfjrsDinnODC1QzWBAw4uWBzAmyyMsvf/VBiS7s7p6u5gHfBwmmNduWDckrGL9b6/0ljKKqKZl3LSO9OyAKRp+uEWO4TOuusKaENDrgFuldHWCUwLxGL30QoxZHqMMDW4FJHl6YLickW7hYu89rKqadcIeqvIcISA45aQgfIkURH8RYhg+Q57iHUIh5dRjJEkQx6OS4D273zU99tJ2RoSpn6eIJsnAopKLoq+ccRwMve/XC3QCIovhd5RBGWUM2VYbKX+CKda0Y7sJwt9NEmjlGuo2T9aWNReJ8wr0bC4y+fyxLvYo7PEUVRdvcmKDrVpfnn2YY8f+2Qwm7WFAV8PJbnWFCEO1yvTWiQ4kRgzivwQjoc7k9Esc0nBJV8tmyNCPV9FQDH417H8M3n4eJOfX81YbX2RKpvUgmw5YuFVyMc+WGUD3k99Pxiac4e/wBCBgBr2HCbUfF5c7x1rM6OoeRxzfLaaJF/pEnciOiyWXf9C425SImf4s0xWWHnVuXziW8QNUyneEzWcqx2qM9iy/GdoT19LHLdjfQ52QxdNsYiRDn8nMYTuMjx2mrtewVF+/K24ehmI3t3TgcXEUu3whjl+mwKRd2eolc7xhjS1sGByikZo9ala04s4JA46jdF8Trgsrffgz4bXbvdkswet2zb634j4Z9+J576X9CeNvbP/HW2PcHlzWXHznVpZuyTcqlhELp1s5IGiTOoKTL2B+fIYMiAS/dQJMcsqSiBRiBuggh6IMc1kz7mNsfrQKxD4qrRojHIHsfd6B1z9Kegpe/AUxZ1a2PCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

