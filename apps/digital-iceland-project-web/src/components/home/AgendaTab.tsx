import { Box, Text, Link } from '@island.is/island-ui/core'
import { agendaItems } from '../../mockData/home'

export const AgendaTab = () => {
  return (
    <Box background="blue100" borderRadius="large" padding={2}>
      <Text variant="h3" as="h2" marginBottom={1}>
        Dagskrá 35. þingfundar
      </Text>
      <Text color="dark400" marginBottom={4}>
        Þriðjudaginn 6. maí, fundur hófst kl. 13:30
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
                  {item.underline ? <u>{item.title}</u> : item.title}
                </Text>
                {item.link && (
                  <Link href={item.link.href}>
                    <u>{item.link.label}</u>
                  </Link>
                )}
                {item.description && (
                  <Text as="div" color="dark400" marginBottom={1}>
                    {item.description}{' '}
                    {item.extraLink && (
                      <Link href={item.extraLink.href}>
                        <u>{item.extraLink.label}</u>
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
