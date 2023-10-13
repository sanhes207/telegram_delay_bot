import TelegramBot from 'node-telegram-bot-api/lib/telegram.js';

const token = '6438161093:AAGtEPPHA68o16LKclkTl9PTNn7EM8h2c6o';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.chat.text;

  bot.sendMessage(chatId, 'Ответ на сообщение')
})