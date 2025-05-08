import { Box, LinkV2, Text } from '@island.is/island-ui/core'
import { useLanguage } from '../../contexts/language/LanguageContext'

const MemberMenu = ({ id }: { id?: string }) => {
  const { language } = useLanguage()
  
  const menuItems = [
    { label: 'Tillögur', href: `/${language}/members/${id}/suggestions` },
    { label: 'Hagsmunaskrá', href: `/${language}/members/${id}/interests` },
    { label: 'Önnur þing skjöl', href: `/${language}/members/${id}/documents` },
    { label: 'Atkvæðaskrá', href: `/${language}/members/${id}/votes` },
    { label: 'Nefndaseta', href: `/${language}/members/${id}/committees` },
    { label: 'Hagsmunaskrá ráðherra', href: `/${language}/members/${id}/minister-interests` },
    { label: 'Fyrirspurnir og skýrslur', href: `/${language}/members/${id}/questions` },
    { label: 'Ræður', href: `/${language}/members/${id}/speeches` },
    { label: 'Þingseta', href: `/${language}/members/${id}/parliament-sessions` },
    { label: 'Framsögumaður', href: `/${language}/members/${id}/sponsor` },
    { label: 'Laun og kostnaðargreiðslur', href: `/${language}/members/${id}/salary` },
  ]

  return (
    <Box marginBottom={6}>
      <Text variant="h3" as="h2" marginBottom={3}>
        Þingstörf og hagsmunaskrá
      </Text>
      <Box display="flex" flexWrap="wrap" style={{ gap: 16 }}>
        {menuItems.map((item, idx) => (
          <Box
            key={idx}
            borderRadius="large"
            borderColor="blue200"
            borderWidth="standard"
            borderStyle="solid"
            paddingY={3}
            paddingX={3}
            marginBottom={2}
            style={{ minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}
          >
            <LinkV2 href={item.href} color="blue400">
              <Text fontWeight="semiBold" as="span">
                {item.label}
              </Text>
            </LinkV2>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MemberMenu
