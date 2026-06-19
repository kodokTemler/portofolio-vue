import { ref } from 'vue'
import { translations } from '@/translations.js'

const locale = ref(localStorage.getItem('locale') || 'en')

export function useI18n() {
  const t = (key) => translations[key]?.[locale.value] ?? key

  const setLang = (lang) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  const toggleLang = () => {
    setLang(locale.value === 'en' ? 'id' : 'en')
  }

  return { locale, t, toggleLang, setLang }
}
