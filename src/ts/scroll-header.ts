import { scrolledPage } from './functions/scrolled-page'

export default (): void => {
  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  const nav = document.querySelector('*[data-nav]') as HTMLElement

  let prevOffsetTop: number = scrolledPage().top

  const scrollHeader = (): void => {
    const currentOffsetTop: number = scrolledPage().top

    nav.offsetHeight < currentOffsetTop
      ? header.classList.remove('bg-opacity-0')
      : header.classList.add('bg-opacity-0')

    prevOffsetTop = currentOffsetTop
  }

  scrollHeader()
  document.addEventListener('scroll', scrollHeader as EventListener)
}
