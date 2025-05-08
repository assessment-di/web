import { Text, LinkV2 } from '@island.is/island-ui/core'
import { useLanguage } from '../../contexts/language/LanguageContext'

interface MeetingItemProps {
  time: string
  title: {
    is: string
    en: string
  }
  href: string
}

export const MeetingItem = ({ time, title, href }: MeetingItemProps) => {
  const { language } = useLanguage()
  
  return (
    <Text marginBottom={0}>
      {time} <LinkV2 href={href}>{title[language]}</LinkV2>
    </Text>
  )
} 