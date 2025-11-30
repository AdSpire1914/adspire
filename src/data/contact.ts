export type ContactCard = {
  id: string
  icon: string
  translationBase: string
}

export const contactCards: ContactCard[] = [
  {
    id: 'phone',
    icon: '📞',
    translationBase: 'contact.cards.phone'
  },
  {
    id: 'email',
    icon: '✉️',
    translationBase: 'contact.cards.email'
  }
]
