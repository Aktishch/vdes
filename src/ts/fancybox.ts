import { Fancybox } from '@fancyapps/ui'
import airDatepicker from './air-datepicker'
import filtering from './filtering'
import waved from './waved'

type Dialog = {
  open: (src: string) => void
  notClosing: (src: string) => void
  close: () => void
}

declare global {
  interface Window {
    Fancybox: typeof Fancybox
    dialog: Dialog
  }
}

Fancybox.defaults.mainClass = 'fancybox-custom'
Fancybox.defaults.trapFocus = false
Fancybox.defaults.autoFocus = false
Fancybox.defaults.placeFocusBack = false
window.Fancybox = Fancybox

const open = (src: string): void => {
  window.Fancybox.show(
    [
      {
        src: src,
        type: 'ajax',
      },
    ],
    {
      dragToClose: false,
      on: {
        done: (): void => waved(),
      },
    }
  )
}

const notClosing = (src: string): void => {
  window.Fancybox.show(
    [
      {
        src: src,
        type: 'ajax',
      },
    ],
    {
      dragToClose: false,
      closeButton: false,
      backdropClick: false,
      on: {
        done: (): void => waved(),
      },
    }
  )
}

const close = (): void => window.Fancybox.close()

export const dialog: Dialog = {
  open: open,
  notClosing: notClosing,
  close: close,
}

window.dialog = dialog

export default (): void => {
  window.Fancybox.bind('[data-fancybox]')

  window.Fancybox.bind('[data-fancybox-dialog]', {
    dragToClose: false,
    on: {
      done: (): void => waved(),
    },
  })

  window.Fancybox.bind('[data-fancybox-calendar]', {
    dragToClose: false,
    on: {
      done: (): void => {
        airDatepicker()
        filtering()
        waved()
      },
    },
  })
}
