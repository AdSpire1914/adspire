import { useTranslation } from 'react-i18next'

import { scrollToId } from '../utils/scrollToId'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="brand-tagline">{t('brand.tagline')}</p>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <button className="cta-button" type="button" onClick={() => scrollToId('services')}>
          {t('hero.cta')}
        </button>
        <div className="scroll-hint">{t('hero.scrollHint')}</div>
      </div>
    </section>
  )
}

export default HeroSection
