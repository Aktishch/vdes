export default (): void => {
  const year = document.querySelector('#year') as HTMLSpanElement

  if (!year) return

  const currentYear: number = new Date().getFullYear()

  year.innerText = String(currentYear)
}
