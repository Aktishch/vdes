import { dialog } from './fancybox'
import { validation } from './functions/validation'

const submitHandler = (event: Event): void => {
  const form = event.target as HTMLFormElement

  switch (form.dataset.form) {
    case 'action': {
      if (!validation(form)) event.preventDefault()
      break
    }

    default: {
      event.preventDefault()

      if (!validation(form)) return

      const formData: FormData = new FormData(form)
      const submitBtn = form.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement
      let requestUrl: string

      switch (form.dataset.form) {
        case 'submit': {
          requestUrl = './ajax/submit-handler.php'
          submitBtn.disabled = true
          dialog.notClosing('./dialogs/dialog-preloader.html')

          fetch(requestUrl, {
            method: 'POST',
            body: formData,
          })
            .then((response: Response) => {
              return response.json()
            })
            .then((response): void => {
              dialog.close()
              response.status
                ? dialog.open('./dialogs/dialog-success.html')
                : dialog.open('./dialogs/dialog-error.html')
              form.reset()
              submitBtn.disabled = false
            })
            .catch((error: string): void =>
              console.log('The form has not been sent', error)
            )
          break
        }
      }

      break
    }
  }
}

export default (): void => {
  document.addEventListener('submit', ((event: Event): void => {
    if ((event.target as HTMLFormElement).hasAttribute('data-form'))
      submitHandler(event)
  }) as EventListener)
}
