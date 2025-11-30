export const scrollToId = (id: string) => {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
