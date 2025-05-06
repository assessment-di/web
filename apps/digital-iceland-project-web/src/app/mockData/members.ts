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
    title: 'Minister of Health',
    ministry: 'Ministry of Health',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1510/1510-220.jpg',
    constituency: 'Reykjavík North',
    email: 'alma.moller@althingi.is',
    phone: '+354 563-1500',
    dateOfBirth: '1974-05-15',
    linkedin: 'https://linkedin.com/in/alma-moller',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Member of the Health Committee',
      'Member of the Welfare Committee',
      'Member of the Icelandic delegation to the Nordic Council',
    ],
    previousCommittees: [
      'Member of the Foreign Affairs Committee 2017–2019',
      'Member of the Judicial Affairs and Education Committee 2017',
      'Member of the Economic Affairs and Trade Committee 2017',
    ],
    ministerialCareer: [
      'Minister of Health 2024-present',
      'Minister of Higher Education, Science and Innovation 2021–2024',
      'Minister of Justice 2019–2021',
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik North Constituency since 2016',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/en/?nfaerslunr=1510',
  },
  {
    id: '2',
    name: 'Arna Lára Jónsdóttir',
    title: 'Member of Parliament',
    ministry: 'Parliament',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1511/1511-220.jpg',
    constituency: 'Reykjavík South',
    email: 'arna.lara.jonsdottir@althingi.is',
    phone: '+354 563-1501',
    dateOfBirth: '1980-03-20',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Member of the Environment and Communications Committee',
      'Member of the Welfare Committee',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik South Constituency since 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/en/?nfaerslunr=1511',
  },
  {
    id: '3',
    name: 'Ása Berglind Hjálmarsdóttir',
    title: 'Member of Parliament',
    ministry: 'Parliament',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1512/1512-220.jpg',
    constituency: 'Reykjavík North',
    email: 'asa.berglin.hjalmarsdottir@althingi.is',
    phone: '+354 563-1502',
    dateOfBirth: '1982-06-10',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Member of the Education and Culture Committee',
      'Member of the Icelandic delegation to the Nordic Council',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik North Constituency since 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/en/?nfaerslunr=1512',
  },
  {
    id: '4',
    name: 'Áslaug Arna Sigurbjörnsdóttir',
    title: 'Minister of Infrastructure',
    ministry: 'Ministry of Infrastructure',
    party: 'Independence Party',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1513/1513-220.jpg',
    constituency: 'Reykjavík South',
    email: 'aslaug.arna.sigurbjornsdottir@althingi.is',
    phone: '+354 563-1503',
    dateOfBirth: '1990-09-15',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Member of the Transport Committee',
      'Member of the Icelandic delegation to the Nordic Council',
    ],
    previousCommittees: [
      'Member of the Environment and Communications Committee 2017-2021',
    ],
    ministerialCareer: [
      'Minister of Infrastructure 2024-present',
      'Minister of Justice 2019-2021',
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik South Constituency since 2016',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/en/?nfaerslunr=1513',
  },
  {
    id: '5',
    name: 'Ásthildur Lóa Þórsdóttir',
    title: 'Member of Parliament',
    ministry: 'Parliament',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/myndir/thingmenn-cache/1514/1514-220.jpg',
    constituency: 'Reykjavík North',
    email: 'asthildur.loa.thorsdottir@althingi.is',
    phone: '+354 563-1504',
    dateOfBirth: '1985-11-30',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    presentCommittees: [
      'Member of the Health Committee',
      'Member of the Welfare Committee',
    ],
    previousCommittees: [],
    ministerialCareer: [],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik North Constituency since 2021',
    shareProfileUrl: 'https://www.althingi.is/altext/cv/en/?nfaerslunr=1514',
  },
]
