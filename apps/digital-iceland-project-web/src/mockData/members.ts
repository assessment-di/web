export interface ParliamentMember {
  id: string
  name: string
  title: string
  ministry: string
  party: string
  image: string
  constituency: string
  email: string
  phone: string
  dateOfBirth: string
  linkedin?: string
  termStart: string
  termEnd: string
  presentCommittees?: string[]
  committees?: string[]
  previousCommittees?: string[]
  ministerialCareer?: string[]
  parliamentaryCareer?: string
  shareProfileUrl?: string
}

export const parliamentMembers: ParliamentMember[] = [
  {
    id: '1',
    name: 'Alma D. Möller',
    title: 'Heilbrigðisráðherra',
    ministry: 'Heilbrigðisráðuneytið',
    party: 'Samfylkingin',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1510/1510-220.jpg',
    constituency: 'Reykjavíkurkjördæmi norður',
    email: 'alma.moller@althingi.is',
    phone: '+354 563-1500',
    dateOfBirth: '1974-05-15',
    linkedin: 'https://linkedin.com/in/alma-moller',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Meðlimur í heilbrigðisnefnd',
      'Meðlimur í velferðarnefnd',
      'Meðlimur í íslenska sendinefndinni til Norðurlandaráðs',
    ],
    previousCommittees: [
      'Meðlimur í utanríkismálanefnd 2017–2019',
      'Meðlimur í dóms- og menntamálanefnd 2017',
      'Meðlimur í atvinnuvega- og viðskiptanefnd 2017',
    ],
    ministerialCareer: [
      'Heilbrigðisráðherra 2024-nú',
      'Háskóla- og iðnaðarráðherra 2021–2024',
      'Dómsmálaráðherra 2019–2021',
    ],
    parliamentaryCareer: 'Þingmaður fyrir Reykjavíkurkjördæmi norður frá 2016',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/is/?nfaerslunr=1510',
  },
  {
    id: '2',
    name: 'Arna Lára Jónsdóttir',
    title: 'Þingmaður',
    ministry: 'Alþingi',
    party: 'Samfylkingin',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1511/1511-220.jpg',
    constituency: 'Reykjavíkurkjördæmi suður',
    email: 'arna.lara.jonsdottir@althingi.is',
    phone: '+354 563-1501',
    dateOfBirth: '1980-03-20',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Meðlimur í umhverfis- og samgöngunefnd',
      'Meðlimur í velferðarnefnd',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Þingmaður fyrir Reykjavíkurkjördæmi suður frá 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/is/?nfaerslunr=1511',
  },
  {
    id: '3',
    name: 'Ása Berglind Hjálmarsdóttir',
    title: 'Þingmaður',
    ministry: 'Alþingi',
    party: 'Samfylkingin',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1512/1512-220.jpg',
    constituency: 'Reykjavíkurkjördæmi norður',
    email: 'asa.berglin.hjalmarsdottir@althingi.is',
    phone: '+354 563-1502',
    dateOfBirth: '1982-06-10',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Meðlimur í mennta- og menningarmálanefnd',
      'Meðlimur í íslenska sendinefndinni til Norðurlandaráðs',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Þingmaður fyrir Reykjavíkurkjördæmi norður frá 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/is/?nfaerslunr=1512',
  },
  {
    id: '4',
    name: 'Áslaug Arna Sigurbjörnsdóttir',
    title: 'Innviðaráðherra',
    ministry: 'Innviðaráðuneytið',
    party: 'Sjálfstæðisflokkurinn',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1513/1513-220.jpg',
    constituency: 'Reykjavíkurkjördæmi suður',
    email: 'aslaug.arna.sigurbjornsdottir@althingi.is',
    phone: '+354 563-1503',
    dateOfBirth: '1990-09-15',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Meðlimur í samgöngunefnd',
      'Meðlimur í íslenska sendinefndinni til Norðurlandaráðs',
    ],
    previousCommittees: [
      'Meðlimur í umhverfis- og samgöngunefnd 2017-2021',
    ],
    ministerialCareer: [
      'Innviðaráðherra 2024-nú',
      'Dómsmálaráðherra 2019-2021',
    ],
    parliamentaryCareer: 'Þingmaður fyrir Reykjavíkurkjördæmi suður frá 2016',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/is/?nfaerslunr=1513',
  },
  {
    id: '5',
    name: 'Ásthildur Lóa Þórsdóttir',
    title: 'Þingmaður',
    ministry: 'Alþingi',
    party: 'Samfylkingin',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1514/1514-220.jpg',
    constituency: 'Reykjavíkurkjördæmi norður',
    email: 'asthildur.loa.thorsdottir@althingi.is',
    phone: '+354 563-1504',
    dateOfBirth: '1985-11-30',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Meðlimur í heilbrigðisnefnd',
      'Meðlimur í velferðarnefnd',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Þingmaður fyrir Reykjavíkurkjördæmi norður frá 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/is/?nfaerslunr=1514',
  },
]
