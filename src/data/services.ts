export type Service = {
  id: string
  icon: string
  titleKey: string
  bodyKey: string
}

export const services: Service[] = [
  {
    id: 'web',
    icon: '🌐',
    titleKey: 'services.items.web.title',
    bodyKey: 'services.items.web.body'
  },
  {
    id: 'uiux',
    icon: '✨',
    titleKey: 'services.items.uiux.title',
    bodyKey: 'services.items.uiux.body'
  },
  {
    id: 'brand',
    icon: '🎨',
    titleKey: 'services.items.brand.title',
    bodyKey: 'services.items.brand.body'
  },
  {
    id: 'marketing',
    icon: '📣',
    titleKey: 'services.items.marketing.title',
    bodyKey: 'services.items.marketing.body'
  },
  {
    id: 'mobile',
    icon: '📱',
    titleKey: 'services.items.mobile.title',
    bodyKey: 'services.items.mobile.body'
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    titleKey: 'services.items.ecommerce.title',
    bodyKey: 'services.items.ecommerce.body'
  }
]
