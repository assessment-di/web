import { Box, Text, LinkV2 } from '@island.is/island-ui/core'
import { useLanguage } from '../../contexts/language/LanguageContext'

interface AgendaItemProps {
  item: {
    title: string
    description?: string
    bold?: boolean
    underline?: boolean
    link?: {
      href: string
      label: string
    }
    extraLink?: {
      href: string
      label: string
    }
  }
  index: number
}

export const AgendaItem = ({ item, index }: AgendaItemProps) => {
  const { language } = useLanguage()

  return (
    <Box display="flex" alignItems="flexStart" marginBottom={3}>
      <Box
        borderRadius="full"
        background={
          index === 2 || index === 3 || index === 4 ? 'purple100' : 'blue100'
        }
        color={
          index === 2 || index === 3 || index === 4 ? 'purple400' : 'blue400'
        }
        borderColor={
          index === 2 || index === 3 || index === 4 ? 'purple400' : 'blue400'
        }
        borderWidth="standard"
        borderStyle="solid"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight={3}
        style={{ minWidth: 32, minHeight: 32 }}
      >
        <Text variant="h5" as="span">
          {index + 1}
        </Text>
      </Box>
      <Box flexGrow={1}>
        <Text
          as="div"
          fontWeight={item.bold ? 'semiBold' : 'regular'}
          variant="h5"
          marginBottom={1}
        >
          {item.underline ? <u>{item.title}</u> : item.title}
        </Text>
        {item.link && (
          <LinkV2 href={`/${language}${item.link.href}`}>
            <u>{item.link.label}</u>
          </LinkV2>
        )}
        {item.description && (
          <Text as="div" color="dark400" marginBottom={1}>
            {item.description}{' '}
            {item.extraLink && (
              <LinkV2 href={`/${language}${item.extraLink.href}`}>
                <u>{item.extraLink.label}</u>
              </LinkV2>
            )}
          </Text>
        )}
      </Box>
    </Box>
  )
} 