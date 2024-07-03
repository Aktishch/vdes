export const fileHandler = ({
  input,
  warning,
}: {
  input: HTMLInputElement
  warning: HTMLSpanElement
}): boolean => {
  const files = input.files as FileList

  if (files.length === 0) {
    warning.classList.add('visible', 'opacity-100')
    warning.innerText = 'Пожалуйста, загрузите изображение!'

    return false
  } else if (
    !['image/jpeg', 'image/png', 'image/gif'].includes(files[0].type)
  ) {
    warning.classList.add('visible', 'opacity-100')
    warning.innerText = 'Только изображения!'

    return false
  } else if (files[0].size > 2 * Math.pow(1024, 2)) {
    warning.classList.add('visible', 'opacity-100')
    warning.innerText = 'Размер не более 2 мб!'

    return false
  } else {
    warning.classList.remove('visible', 'opacity-100')

    return true
  }
}
