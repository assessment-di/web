import { FC, useEffect, useState } from 'react'
import { Box } from '@island.is/island-ui/core'
import { useLanguage } from '../contexts/language/LanguageContext'

const CUSTOMER_ID = '11963'
const SCRIPT_URL = `//cdn1.readspeaker.com/script/${CUSTOMER_ID}/webReader/webReader.js?pids=wr`

interface WebReaderProps {
  readId?: string
  readClass?: string
  language?: 'is' | 'en'
}

const WebReader: FC<WebReaderProps> = ({
  readId = 'main-content',
  readClass,
  language = 'en',
}) => {
  const [href, setHref] = useState('')
  const { t } = useLanguage()

  useEffect(() => {
    if (!window?.rsConf) {
      window.rsConf = {
        general: {
          usePost: true,
          customerId: CUSTOMER_ID,
        },
      }

      const el = document.createElement('script')
      el.id = 'rs_req_Init'
      el.src = SCRIPT_URL
      el.type = 'text/javascript'
      document.body.appendChild(el)
    } else if (typeof window.rspkr !== 'undefined' && window.rspkr.ui) {
      window.onload = () => {
        window.rspkr.init()
        window.rspkr.ui.addClickEvents()
      }
    }
  }, [])

  useEffect(() => {
    const lang = language === 'is' ? 'is' : 'en'

    let h =
      `https://app-eu.readspeaker.com/cgi-bin/rsent?` +
      `customerid=${CUSTOMER_ID}` +
      `&ver=3.8.7_rev2728-wr` +
      `&wrc=2014018964` +
      `&lang=${lang}`

    if (readId) {
      h += `&readid=${readId}`
    }
    if (readClass) {
      h += `&readclass=${readClass}`
    }
    setHref(h)
  }, [readId, readClass, language])

  const buttonLabel = t('home.webReader.listen')
  const buttonTitle = t('home.webReader.title')

  return (
    <Box printHidden={true}>
      <div id="readspeaker_button1" className="rs_skip rsbtn rs_preserve">
        <a
          rel="nofollow"
          className="rsbtn_play"
          title={buttonTitle}
          href={href}
          onClick={(event) => {
            event.preventDefault()
          }}
        >
          <span className="rsbtn_left rsimg rspart">
            <span className="rsbtn_text">
              <span>{buttonLabel}</span>
            </span>
          </span>
          <span className="rsbtn_right rsimg rsplay rspart" />
        </a>
      </div>
    </Box>
  )
}

export default WebReader
