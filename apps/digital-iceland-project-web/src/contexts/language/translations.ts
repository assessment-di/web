import { Language, Translations } from './types'

export const translations: Record<Language, Translations> = {
  is: {
    'home.search.placeholder': 'Leitaðu að þjónustu eða upplýsingum',
    'home.search.button': 'Leita',
    'home.search.title': 'Alþingi',
    'home.search.subtitle':
      'Löggjöf er aðalverkefni Alþingis, sem hefur einnig umfangsmikið eftirlit',
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
    'home.broadcast.nextSession':
      'Næsti fundur verður miðvikudaginn 7. maí kl. 15:00',
    'home.broadcast.recordings': 'Upptökur',
    'home.newOnWeb.title': 'Nýtt á vefnum',
    'home.newOnWeb.viewAll': 'Skoða allt',
    'home.newOnWeb.announcements.heading': 'Tilkynningar',
    'home.newOnWeb.announcements.text':
      'Nýjustu fréttir og mikilvægar uppfærslur frá yfirvöldum',
    'home.newOnWeb.announcements.tag': 'Fréttir',
    'home.newOnWeb.laws.heading': 'Lög og ályktanir',
    'home.newOnWeb.laws.text': 'Nýleg lög, breytingar og þingsályktanir',
    'home.newOnWeb.laws.tag': 'Lög',
    'home.newOnWeb.speeches.heading': 'Ræður',
    'home.newOnWeb.speeches.text':
      'Opinberar ræður og yfirlýsingar frá embættismönnum',
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
    'home.webReader.title':
      'Hlustaðu á þessa síðu lesna af ReadSpeaker webReader',
    'menu.main.legislation': 'Þingfundir og mál',
    'menu.main.members': 'Þingmenn',
    'menu.main.committees': 'Nefndir',
    'menu.main.laws': 'Lagasafn',
    'menu.main.about': 'Um Alþingi',
    'menu.main.manuals': 'Handbækur Alþingis',
    'menu.main.annual-reports': 'Ársskýrslur Alþingis',
    'menu.extra.status': 'Staða mála',
    'menu.extra.budget': 'Fjárlög 2024',
    'menu.main.title': 'Valmynd',
    'menu.extra.title': 'Aðrar upplýsingar',
  },
  en: {
    'home.search.placeholder': 'Search for services or information',
    'home.search.button': 'Search',
    'home.search.title': 'Althingi',
    'home.search.subtitle':
      'Legislation is the main task of Althingi, which also has extensive oversight',
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
    'home.broadcast.nextSession':
      'Next session will be on Wednesday, May 7th at 15:00',
    'home.broadcast.recordings': 'Recordings',
    'home.newOnWeb.title': 'New on the web',
    'home.newOnWeb.viewAll': 'View all',
    'home.newOnWeb.announcements.heading': 'Announcements',
    'home.newOnWeb.announcements.text':
      'Latest news and important updates from authorities',
    'home.newOnWeb.announcements.tag': 'News',
    'home.newOnWeb.laws.heading': 'Laws and resolutions',
    'home.newOnWeb.laws.text':
      'Recent laws, amendments and parliamentary resolutions',
    'home.newOnWeb.laws.tag': 'Laws',
    'home.newOnWeb.speeches.heading': 'Speeches',
    'home.newOnWeb.speeches.text':
      'Official speeches and statements from officials',
    'home.newOnWeb.speeches.tag': 'Speech',
    'home.newOnWeb.documents.heading': 'Parliamentary documents',
    'home.newOnWeb.documents.text':
      'Access to parliamentary documents and files',
    'home.newOnWeb.documents.tag': 'Documents',
    'home.newOnWeb.cases.heading': 'Cases',
    'home.newOnWeb.cases.text': 'View and search for parliamentary cases',
    'home.newOnWeb.cases.tag': 'Cases',
    'home.newOnWeb.events.heading': 'Events',
    'home.newOnWeb.events.text':
      'Upcoming and past events related to parliament',
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
    'home.webReader.title': 'Listen to this page using ReadSpeaker',
    'menu.main.legislation': 'Parliamentary Sessions and Cases',
    'menu.main.members': 'Members of Parliament',
    'menu.main.committees': 'Committees',
    'menu.main.laws': 'Law Collection',
    'menu.main.about': 'About Althingi',
    'menu.main.manuals': 'Althingi Handbooks',
    'menu.main.annual-reports': 'Annual Reports of Althingi',
    'menu.extra.status': 'Case Status',
    'menu.extra.budget': 'Budget 2024',
    'menu.main.title': 'Menu',
    'menu.extra.title': 'Other Information',
  },
}
