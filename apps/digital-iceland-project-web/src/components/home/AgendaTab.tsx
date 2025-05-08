import { Box, Text, Link } from '@island.is/island-ui/core'
import { agendaItems } from '../../mockData/home'
import { useLanguage } from '../../contexts/LanguageContext'

export const AgendaTab = () => {
  const { t, language } = useLanguage()

  return (
    <Box background="blue100" borderRadius="large" padding={2}>
      <Text variant="h3" as="h2" marginBottom={1}>
        {t('home.agenda.title')}
      </Text>
      <Text color="dark400" marginBottom={4}>
        {t('home.agenda.subtitle')}
      </Text>
      <Box display="flex">
        <Box position="relative" marginRight={4}>
          {agendaItems.map((item, idx) => (
            <Box
              key={idx}
              display="flex"
              alignItems="flexStart"
              marginBottom={3}
            >
              <Box
                borderRadius="full"
                background={
                  idx === 2 || idx === 3 || idx === 4 ? 'purple100' : 'blue100'
                }
                color={
                  idx === 2 || idx === 3 || idx === 4 ? 'purple400' : 'blue400'
                }
                borderColor={
                  idx === 2 || idx === 3 || idx === 4 ? 'purple400' : 'blue400'
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
                  {idx + 1}
                </Text>
              </Box>
              <Box flexGrow={1}>
                <Text
                  as="div"
                  fontWeight={item.bold ? 'semiBold' : 'regular'}
                  variant="h5"
                  marginBottom={1}
                >
                  {item.underline ? <u>{item.title[language]}</u> : item.title[language]}
                </Text>
                {item.link && (
                  <Link href={item.link.href}>
                    <u>{item.link.label[language]}</u>
                  </Link>
                )}
                {item.description && (
                  <Text as="div" color="dark400" marginBottom={1}>
                    {item.description[language]}{' '}
                    {item.extraLink && (
                      <Link href={item.extraLink.href}>
                        <u>{item.extraLink.label[language]}</u>
                      </Link>
                    )}
                  </Text>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
