import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          slogan: 'photo by any inspiration',
          'sign-up': 'sign up',
          'sign-in': 'sign in123',
          author: `Author is：<1>code1 and beast</1>`
        }
      },
      zh: {
        translation: {
          slogan: '借由灵感创作图片',
          'sign-up': '注册',
          'sign-in': '登录',
          author: `作者是：<1>代码与野兽</1>`
        }
      }
    }
  })

export default i18n
