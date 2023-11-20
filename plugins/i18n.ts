import { createI18n } from 'vue-i18n'
import zhTw from '../locales/zh-tw.json'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zhTw',
    messages: {
      zhTw,
      en,
      ja
    }
  })

  vueApp.use(i18n)
})