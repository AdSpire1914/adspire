import type React from 'react'
import { useTranslation } from 'react-i18next'

import { getStaticAssetPath } from '../utils/assetPath'
import { scrollToId } from '../utils/scrollToId'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'contact', labelKey: 'nav.contact' }
]

const Header = () => {
  const { t } = useTranslation()

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    scrollToId(targetId)
  }

  return (
    <header className="site-header">
      <div className="container header-bar">
        <a className="brand" href="#home" onClick={(event) => handleNavClick(event, 'home')}>
          <img src={getStaticAssetPath('static/logo/logo.png')} alt="Adspire logo" />
        </a>
        <div className="header-right">
          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              {navItems.map(({ id, labelKey }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
