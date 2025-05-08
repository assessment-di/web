import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'is' | 'en'

type TranslationKey = 
  | 'home.search.placeholder'
  | 'home.search.button'
  | 'home.search.title'
  | 'home.search.subtitle'
  | 'home.search.resultType.law'
  | 'home.search.resultType.member'
  | 'home.tabs.popular'
  | 'home.tabs.new'
  | 'home.tabs.all'
  | 'home.tabs.label'
  | 'home.tabs.meetings'
  | 'home.tabs.agenda'
  | 'home.broadcast.title'
  | 'home.broadcast.viewAll'
  | 'home.broadcast.live'
  | 'home.broadcast.nextSession'
  | 'home.broadcast.recordings'
  | 'home.newOnWeb.title'
  | 'home.newOnWeb.viewAll'
  | 'home.newOnWeb.announcements.heading'
  | 'home.newOnWeb.announcements.text'
  | 'home.newOnWeb.announcements.tag'
  | 'home.newOnWeb.laws.heading'
  | 'home.newOnWeb.laws.text'
  | 'home.newOnWeb.laws.tag'
  | 'home.newOnWeb.speeches.heading'
  | 'home.newOnWeb.speeches.text'
  | 'home.newOnWeb.speeches.tag'
  | 'home.newOnWeb.documents.heading'
  | 'home.newOnWeb.documents.text'
  | 'home.newOnWeb.documents.tag'
  | 'home.newOnWeb.cases.heading'
  | 'home.newOnWeb.cases.text'
  | 'home.newOnWeb.cases.tag'
  | 'home.newOnWeb.events.heading'
  | 'home.newOnWeb.events.text'
  | 'home.newOnWeb.events.tag'
  | 'home.meetings.date'
  | 'home.meetings.speaker'
  | 'home.agenda.title'
  | 'home.agenda.subtitle'
  | 'home.menu.title'
  | 'home.menu.otherSites'
  | 'home.menu.myPages'
  | 'home.menu.driving'
  | 'home.menu.business'
  | 'home.menu.courts'
  | 'home.menu.finance'
  | 'home.menu.family'
  | 'home.menu.health'
  | 'home.menu.housing'
  | 'home.menu.industry'
  | 'home.menu.immigration'
  | 'home.menu.employment'
  | 'home.menu.disability'
  | 'home.menu.education'
  | 'home.menu.consumer'
  | 'home.menu.society'
  | 'home.menu.transport'
  | 'home.menu.environment'
  | 'home.menu.travel'
  | 'home.menu.services'
  | 'home.menu.institutions'
  | 'home.menu.digital'
  | 'home.menu.development'
  | 'home.menu.development.wisdom'
  | 'home.menu.development.ui'
  | 'home.menu.development.design'
  | 'home.menu.development.content'
  | 'home.menu.information'
  | 'home.menu.information.link'
  | 'home.menu.consultation'
  | 'home.menu.names'
  | 'home.menu.petitions'
  | 'home.menu.openData'
  | 'home.menu.innovation'
  | 'home.menu.income'
  | 'home.breadcrumbs.home'
  | 'home.breadcrumbs.legislation'
  | 'home.breadcrumbs.members'
  | 'home.breadcrumbs.details'
  | 'home.webReader.listen'
  | 'home.webReader.title'

type Translations = {
  [key in TranslationKey]: string
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const translations: Record<Language, Translations> = {
  is: {
    'home.search.placeholder': 'Leitaðu að þjónustu eða upplýsingum',
    'home.search.button': 'Leita',
    'home.search.title': 'Alþingi',
    'home.search.subtitle': 'Löggjöf er aðalverkefni Alþingis, sem hefur einnig umfangsmikið eftirlit',
    'home.search.resultType.law': 'Löggjöf',
    'home.search.resultType.member': 'Þingmaður',
    'home.tabs.popular': 'Vinsælt',
    'home.tabs.new': 'Nýtt',
    'home.tabs.all': 'Allt',
    'home.tabs.label': 'Dagskrárflipar',
    'home.tabs.meetings': 'Fundir og heimsóknir',
    'home.tabs.agenda': 'Dagskrá',
    'home.broadcast.title': 'Fréttir og tilkynningar',
    'home.broadcast.viewAll': 'Skoða allt',
    'home.broadcast.live': 'Beint',
    'home.broadcast.nextSession': 'Næsta þingsetning verður á miðvikudaginn 7. maí klukkan 15:00',
    'home.broadcast.recordings': 'Upptökur',
    'home.newOnWeb.title': 'Nýtt á vefnum',
    'home.newOnWeb.viewAll': 'Skoða allt',
    'home.newOnWeb.announcements.heading': 'Tilkynningar',
    'home.newOnWeb.announcements.text': 'Nýjustu fréttir og mikilvægar uppfærslur frá stjórnvöldum',
    'home.newOnWeb.announcements.tag': 'Fréttir',
    'home.newOnWeb.laws.heading': 'Lög og ályktanir',
    'home.newOnWeb.laws.text': 'Nýleg lög, lagabreytingar og þingsályktanir',
    'home.newOnWeb.laws.tag': 'Lög',
    'home.newOnWeb.speeches.heading': 'Ræður',
    'home.newOnWeb.speeches.text': 'Opinberar ræður og yfirlýsingar frá embættismönnum',
    'home.newOnWeb.speeches.tag': 'Ræða',
    'home.newOnWeb.documents.heading': 'Þingskjöl',
    'home.newOnWeb.documents.text': 'Aðgangur að þingskjölum og skrám',
    'home.newOnWeb.documents.tag': 'Skjöl',
    'home.newOnWeb.cases.heading': 'Mál',
    'home.newOnWeb.cases.text': 'Skoða og leita að þingsmálum',
    'home.newOnWeb.cases.tag': 'Mál',
    'home.newOnWeb.events.heading': 'Viðburðir',
    'home.newOnWeb.events.text': 'Kommandi og liðnir viðburðir tengdir þinginu',
    'home.newOnWeb.events.tag': 'Viðburðir',
    'home.meetings.date': 'Miðvikudagur, 7. maí',
    'home.meetings.speaker': 'Sigurjón',
    'home.agenda.title': 'Dagskrá 35. þingfundar',
    'home.agenda.subtitle': 'Þriðjudaginn 6. maí, fundur hófst kl. 13:30',
    'home.menu.title': 'Þjónustuflokkar',
    'home.menu.otherSites': 'Aðrir opinberir vefir',
    'home.menu.myPages': 'Mínar síður',
    'home.menu.driving': 'Akstur og bifreiðar',
    'home.menu.business': 'Atvinnurekstur og sjálfstætt starfandi',
    'home.menu.courts': 'Dómstólar og réttarfar',
    'home.menu.finance': 'Fjármál og skattar',
    'home.menu.family': 'Fjölskylda og velferð',
    'home.menu.health': 'Heilbrigðismál',
    'home.menu.housing': 'Húsnæðismál',
    'home.menu.industry': 'Iðnaður',
    'home.menu.immigration': 'Innflytjendamál',
    'home.menu.employment': 'Launþegi, réttindi og lífeyrir',
    'home.menu.disability': 'Málefni fatlaðs fólks',
    'home.menu.education': 'Menntun',
    'home.menu.consumer': 'Neytendamál',
    'home.menu.society': 'Samfélag og réttindi',
    'home.menu.transport': 'Samgöngur',
    'home.menu.environment': 'Umhverfismál',
    'home.menu.travel': 'Vegabréf, ferðalög og búseta erlendis',
    'home.menu.services': 'Vörur og þjónusta Ísland.is',
    'home.menu.institutions': 'Stofnanir',
    'home.menu.digital': 'Stafrænt Ísland',
    'home.menu.development': 'Þróun',
    'home.menu.development.wisdom': 'Viskuausan',
    'home.menu.development.ui': 'Ísland UI',
    'home.menu.development.design': 'Hönnunarkerfi',
    'home.menu.development.content': 'Efnisstefna',
    'home.menu.information': 'Upplýsingarsvæði',
    'home.menu.information.link': 'linkur á eitthvað',
    'home.menu.consultation': 'Samráðsgátt',
    'home.menu.names': 'Mannanöfn',
    'home.menu.petitions': 'Undirskriftarlistar',
    'home.menu.openData': 'Opin gögn',
    'home.menu.innovation': 'Opinber nýsköpun',
    'home.menu.income': 'Tekjusagan',
    'home.breadcrumbs.home': 'Heim',
    'home.breadcrumbs.legislation': 'Þingfundir og mál',
    'home.breadcrumbs.members': 'Þingmenn',
    'home.breadcrumbs.details': 'Nánar',
    'home.webReader.listen': 'Hlusta',
    'home.webReader.title': 'Hlustaðu á þessa síðu lesna af ReadSpeaker webReader'
  },
  en: {
    'home.search.placeholder': 'Search for services or information',
    'home.search.button': 'Search',
    'home.search.title': 'Althingi',
    'home.search.subtitle': 'Legislation is the main task of Althingi, which also has extensive oversight',
    'home.search.resultType.law': 'Legislation',
    'home.search.resultType.member': 'Member of Parliament',
    'home.tabs.popular': 'Popular',
    'home.tabs.new': 'New',
    'home.tabs.all': 'All',
    'home.tabs.label': 'Schedule tabs',
    'home.tabs.meetings': 'Meetings and visits',
    'home.tabs.agenda': 'Schedule',
    'home.broadcast.title': 'News and announcements',
    'home.broadcast.viewAll': 'View all',
    'home.broadcast.live': 'Live',
    'home.broadcast.nextSession': 'Next session will be on Wednesday, May 7th at 15:00',
    'home.broadcast.recordings': 'Recordings',
    'home.newOnWeb.title': 'New on the web',
    'home.newOnWeb.viewAll': 'View all',
    'home.newOnWeb.announcements.heading': 'Announcements',
    'home.newOnWeb.announcements.text': 'Latest news and important updates from authorities',
    'home.newOnWeb.announcements.tag': 'News',
    'home.newOnWeb.laws.heading': 'Laws and resolutions',
    'home.newOnWeb.laws.text': 'Recent laws, amendments and parliamentary resolutions',
    'home.newOnWeb.laws.tag': 'Laws',
    'home.newOnWeb.speeches.heading': 'Speeches',
    'home.newOnWeb.speeches.text': 'Official speeches and statements from officials',
    'home.newOnWeb.speeches.tag': 'Speech',
    'home.newOnWeb.documents.heading': 'Parliamentary documents',
    'home.newOnWeb.documents.text': 'Access to parliamentary documents and files',
    'home.newOnWeb.documents.tag': 'Documents',
    'home.newOnWeb.cases.heading': 'Cases',
    'home.newOnWeb.cases.text': 'View and search for parliamentary cases',
    'home.newOnWeb.cases.tag': 'Cases',
    'home.newOnWeb.events.heading': 'Events',
    'home.newOnWeb.events.text': 'Upcoming and past events related to parliament',
    'home.newOnWeb.events.tag': 'Events',
    'home.meetings.date': 'Wednesday, May 7th',
    'home.meetings.speaker': 'Sigurjón',
    'home.agenda.title': 'Schedule of the 35th parliamentary session',
    'home.agenda.subtitle': 'Tuesday, May 6th, session started at 13:30',
    'home.menu.title': 'Service Categories',
    'home.menu.otherSites': 'Other Official Websites',
    'home.menu.myPages': 'My Pages',
    'home.menu.driving': 'Driving and Vehicles',
    'home.menu.business': 'Business and Self-Employment',
    'home.menu.courts': 'Courts and Legal Process',
    'home.menu.finance': 'Finance and Taxes',
    'home.menu.family': 'Family and Welfare',
    'home.menu.health': 'Health',
    'home.menu.housing': 'Housing',
    'home.menu.industry': 'Industry',
    'home.menu.immigration': 'Immigration',
    'home.menu.employment': 'Employment, Rights and Pensions',
    'home.menu.disability': 'Disability Issues',
    'home.menu.education': 'Education',
    'home.menu.consumer': 'Consumer Affairs',
    'home.menu.society': 'Society and Rights',
    'home.menu.transport': 'Transport',
    'home.menu.environment': 'Environment',
    'home.menu.travel': 'Passport, Travel and Residence Abroad',
    'home.menu.services': 'Products and Services of Island.is',
    'home.menu.institutions': 'Institutions',
    'home.menu.digital': 'Digital Iceland',
    'home.menu.development': 'Development',
    'home.menu.development.wisdom': 'Wisdom Box',
    'home.menu.development.ui': 'Island UI',
    'home.menu.development.design': 'Design System',
    'home.menu.development.content': 'Content Strategy',
    'home.menu.information': 'Information Area',
    'home.menu.information.link': 'link to something',
    'home.menu.consultation': 'Consultation Portal',
    'home.menu.names': 'Personal Names',
    'home.menu.petitions': 'Petitions',
    'home.menu.openData': 'Open Data',
    'home.menu.innovation': 'Public Innovation',
    'home.menu.income': 'Income History',
    'home.breadcrumbs.home': 'Home',
    'home.breadcrumbs.legislation': 'Parliamentary Sessions and Cases',
    'home.breadcrumbs.members': 'Members of Parliament',
    'home.breadcrumbs.details': 'Details',
    'home.webReader.listen': 'Listen',
    'home.webReader.title': 'Listen to this page using ReadSpeaker'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('selected-language')
    return (savedLanguage as Language) || 'is'
  })

  useEffect(() => {
    localStorage.setItem('selected-language', language)
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 