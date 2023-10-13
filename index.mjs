import TelegramBot from 'node-telegram-bot-api/lib/telegram.js';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.chat.text;
})