interface RsConf {
  general: {
    usePost: boolean
    customerId?: string
  }
}

interface RsUi {
  addClickEvents: () => void
}

interface RsSpeaker {
  init: () => void
  ui: RsUi
}

declare global {
  interface Window {
    rsConf: RsConf
    rspkr: RsSpeaker
  }
}

export {} 