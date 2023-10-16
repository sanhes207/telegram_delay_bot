import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"
import config from "config"

const bot = new Telegraf(config.get('TELEGRAM_BOT_TOKEN'), {
  handlerTimeout: Infinity
})

bot.start((ctx) => {
    ctx.reply('Вас приветствует мой бот, надеюсь работа будет продуктивной')
})

bot.launch();
