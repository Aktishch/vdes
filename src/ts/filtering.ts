const filterHandler = ({
  name,
  cards,
}: {
  name: string
  cards: NodeListOf<Element>
}): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement
    const absence: boolean =
      String(card.dataset.filteringValue).split(' ').includes(name) === false
    const showAll: boolean = name.toLowerCase() === 'all'

    switch (absence && !showAll) {
      case true: {
        card.classList.add('hidden')
        break
      }

      case false: {
        card.classList.remove('hidden')
        card.classList.add('filtering-active')
        setTimeout((): void => card.classList.remove('filtering-active'), 300)
        break
      }
    }
  })
}

export default (): void => {
  const filters = document.querySelectorAll(
    '*[data-filtering]'
  ) as NodeListOf<Element>

  filters.forEach((element: Element): void => {
    const filter = element as HTMLElement

    if (!filter) return

    const value = String(filter.dataset.filtering)
    const hash: string = window.location.hash.substr(1)
    const categories = document.querySelectorAll(
      `*[data-filtering-category="${value}"]`
    ) as NodeListOf<Element>
    const cards = document.querySelectorAll(
      `*[data-filtering-card="${value}"]`
    ) as NodeListOf<Element>
    const line = document.querySelector(
      `*[data-filtering-line="${value}"]`
    ) as HTMLElement

    const currentCategory = (): HTMLElement => {
      let active = categories[0] as HTMLElement

      categories.forEach((element: Element): void => {
        const category = element as HTMLElement

        if (category.classList.contains('filtering-active')) active = category
      })

      return active
    }

    const currentCard = (category: HTMLElement): void => {
      const active = currentCategory()
      const name = String(category.dataset.filteringValue)

      active.classList.remove('filtering-active')
      category.classList.add('filtering-active')

      if (line) {
        line.style.width = `${category.offsetWidth}px`
        line.style.left = `${category.offsetLeft}px`
      }

      filterHandler({ name: name, cards: cards })
    }

    currentCard(currentCategory())

    categories.forEach((element: Element): void => {
      const category = element as HTMLElement

      if (!category) return

      category.addEventListener('click', ((): void => {
        currentCard(category)
      }) as EventListener)
    })

    if (hash && hash !== '') {
      for (const [index, card] of cards.entries()) {
        if (card.querySelector(`#${hash}`)) {
          const category = categories[index] as HTMLElement

          currentCard(category)
        }
      }
    }
  })
}
