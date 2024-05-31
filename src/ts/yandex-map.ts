import ymaps from 'ymaps'

declare global {
  interface Window {
    ymaps: typeof ymaps
  }
}

window.ymaps = ymaps

export default (): void => {
  const yandexMap = document.querySelector('#yandex-map') as HTMLDivElement

  if (!yandexMap) return

  window.ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then((maps): void => {
      const center: number[] = [45.03191007458623, 38.921171499999936]
      const mark: number[] = [45.03191007458623, 38.921171499999936]
      const inputs: Element[] = [
        ...document.querySelectorAll('[data-suggest-view]'),
      ]

      const map = new maps.Map(yandexMap, {
        center: center,
        zoom: 16,
      })

      const placemark = new maps.Placemark(
        mark,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: './img/pictures/geo.png',
          iconImageSize: [40, 50],
          iconImageOffset: [-20, -25],
        }
      )

      inputs.forEach((input: Element): void => {
        new maps.SuggestView(input, {
          results: 5,
          container: document.body,
        })
      })

      map.controls.remove('geolocationControl')
      map.controls.remove('searchControl')
      map.controls.remove('trafficControl')
      map.controls.remove('typeSelector')
      map.controls.remove('fullscreenControl')
      map.controls.remove('zoomControl')
      map.controls.remove('rulerControl')
      map.behaviors.disable(['scrollZoom'])
      map.geoObjects.add(placemark)
    })
    .catch((error: string) => console.log('Failed to load Yandex Maps', error))
}
