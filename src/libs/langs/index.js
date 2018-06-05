import i18n from "i18n-js"
import en from "libs/langs/en"

i18n.translations.en = en
i18n.defaultLocale = "en"

const locales = {
  en: () => import("libs/langs/en")
}

export async function changeLang(locale) {
  if (!i18n.translations[locale]) {
    i18n.translations[locale] = (await locales[locale]()).default
  }
  i18n.locale = locale
}
