import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <small>
          © {year} {t('brand.name')}. {t('footer.copy')}
        </small>
      </div>
    </footer>
  )
}

export default Footer
