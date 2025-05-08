import { Text, Link as IslandLink } from '@island.is/island-ui/core'
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
      {time} <IslandLink href={href}>{title[language]}</IslandLink>
    </Text>
  )
} 