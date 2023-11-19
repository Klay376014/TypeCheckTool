import { createI18n } from 'vue-i18n'
import zhHant from '../locales/zh-tw.json'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zhHant',
    messages: {
      zhHant,
      en,
      ja
    }
  })

  vueApp.use(i18n)
})