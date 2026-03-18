const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔══════════════════════════════╗
║        👑 MUZAN BOT 👑       ║
╠══════════════════════════════╣
║ 🤖 Bot : ${settings.botName || 'MUZAN BOT'}
║ ⚙ Version : ${settings.version || '3.0.0'}
║ 👑 Owner : ${settings.botOwner || '࿐᭄𝐒𝐀𝐊𝐀𝐌𝐎𝐓𝐎 ᭄࿐ dev'}
║ 📺 YT : ${global.ytch}
╚══════════════════════════════╝

╔════「 GENERAL 」════╗
║ .menu
║ .help
║ .ping
║ .alive
║ .tts <text>
║ .owner
║ .joke
║ .quote
║ .fact
║ .weather
║ .news
║ .attp
║ .lyrics
║ .groupinfo
║ .jid
╚════════════════════╝

╔════「 ADMIN 」════╗
║ .ban
║ .kick
║ .warn
║ .promote
║ .demote
║ .mute
║ .unmute
║ .delete
║ .clear
║ .tagall
║ .hidetag
║ .antilink
║ .welcome
║ .goodbye
╚════════════════════╝

╔════「 OWNER 」════╗
║ .mode public
║ .mode private
║ .update
║ .settings
║ .autostatus
║ .autoread
║ .anticall
║ .setpp
╚════════════════════╝

╔════「 EDITING 」════╗
║ .sticker
║ .remini
║ .removebg
║ .blur
║ .crop
║ .meme
║ .emojimix
╚════════════════════╝

╔════「 AI & GAMES 」════╗
║ .gpt
║ .gemini
║ .imagine
║ .tictactoe
║ .hangman
║ .trivia
║ .truth
║ .dare
╚════════════════════╝

╔════「 DOWNLOADER 」════╗
║ .play
║ .song
║ .video
║ .spotify
║ .ytmp4
║ .instagram
║ .facebook
║ .tiktok
╚════════════════════╝

╔════「 SYSTEM 」════╗
║ .git
║ .github
║ .repo
║ .script
╚════════════════════╝

`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: 'https://whatsapp.com/channel/0029VbCmpwK89inpJICAG21A',
                newsletterName: 'MUZAN BOT',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;