import { useTranslation } from 'react-i18next'

import { services } from '../data/services'

const ServicesSection = () => {
  const { t } = useTranslation()

  return (
    <section id="services">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">{t('services.title')}</h2>
        </div>
        <div className="services-grid">
          {services.map(({ id, icon, titleKey, bodyKey }) => (
            <article key={id} className="service-card">
              <span className="service-icon" aria-hidden="true">
                {icon}
              </span>
              <h3>{t(titleKey)}</h3>
              <p>{t(bodyKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
