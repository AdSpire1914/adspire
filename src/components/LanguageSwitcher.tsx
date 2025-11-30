import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const languages = [
    { code: 'bg', label: t('language.bg') },
    { code: 'en', label: t('language.en') }
  ]

  const activeLang = (i18n.resolvedLanguage ?? i18n.language).split('-')[0]

  return (
    <div className="language-switcher" role="group" aria-label={t('language.label')}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn ${activeLang === code ? 'active' : ''}`}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
