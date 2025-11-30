import { useTranslation } from 'react-i18next'

import { contactCards } from '../data/contact'

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        <div className="contact-grid">
          {contactCards.map(({ id, icon, translationBase }) => {
            const heading = t(`${translationBase}.heading`)
            const copy = t(`${translationBase}.copy`)
            const action = t(`${translationBase}.action`)
            const value = t(`${translationBase}.value`)
            const href = t(`${translationBase}.href`)

            return (
              <article key={id} className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  {icon}
                </span>
                <div>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </div>
                <span className="contact-value">{value}</span>
                <div className="contact-actions">
                  <a href={href} aria-label={`${action} ${value}`}>
                    {action}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
