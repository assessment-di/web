export interface ParliamentMember {
  id: string
  name: string
  party: string
  image: string
  constituency: string
  email: string
  phone: string
  termStart: string
  termEnd: string
  committees: string[]
  previousCommittees?: string[]
  ministerialCareer?: string[]
  parliamentaryCareer?: string
}

export const parliamentMembers: ParliamentMember[] = [
  {
    id: '1',
    name: 'Alma D. Möller',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/media/althingismenn/Alma-D-Moller-2021.jpg',
    constituency: 'Reykjavík North',
    email: 'alma.moller@althingi.is',
    phone: '+354 563-2000',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    committees: ['Budget Committee', 'Future Committee'],
    previousCommittees: [
      'Foreign Affairs Committee (Chair 2017-2019)',
      'Icelandic delegation to the Inter-Parliamentary Union (IPU) (Chair 2017-2019)',
      'Judicial Affairs and Education Committee (Chair 2017)',
      'Economic Affairs and Trade Committee',
      'Icelandic delegation to the NATO Parliamentary Assembly (Chair 2017)',
      'EU-Iceland joint Parliamentary Committee (Chair 2018-2019)'
    ],
    ministerialCareer: [
      'Minister of Higher Education, Science and Innovation 2021-2024',
      'Minister of Justice 2019-2021'
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik North Constituency 2016-2021 and the Reykjavik North Constituency since 2021 (Independence Party)'
  },
  {
    id: '2',
    name: 'Bjarni Benediktsson',
    party: 'Independence Party',
    image: 'https://www.althingi.is/media/althingismenn/Bjarni-Benediktsson-2021.jpg',
    constituency: 'Reykjavík South',
    email: 'bjarni.benediktsson@althingi.is',
    phone: '+354 563-2001',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    committees: ['Foreign Affairs Committee', 'Economic Affairs and Trade Committee'],
    previousCommittees: [
      'Budget Committee (Chair 2013-2016)',
      'Icelandic delegation to the Nordic Council',
      'Icelandic delegation to the NATO Parliamentary Assembly'
    ],
    ministerialCareer: [
      'Prime Minister 2017, 2024-present',
      'Minister of Finance and Economic Affairs 2013-2016',
      'Minister of Justice and Human Rights 2009-2013'
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik South Constituency since 2003'
  },
  {
    id: '3',
    name: 'Katrín Jakobsdóttir',
    party: 'Left-Green Movement',
    image: 'https://www.althingi.is/media/althingismenn/Katrin-Jakobsdottir-2021.jpg',
    constituency: 'Reykjavík North',
    email: 'katrin.jakobsdottir@althingi.is',
    phone: '+354 563-2002',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    committees: ['Environment and Communications Committee'],
    previousCommittees: [
      'Education and Culture Committee (Chair 2009-2013)',
      'Icelandic delegation to the Nordic Council',
      'Icelandic delegation to the Inter-Parliamentary Union (IPU)'
    ],
    ministerialCareer: [
      'Prime Minister 2017-2024',
      'Minister of Education, Science and Culture 2009-2013'
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik North Constituency since 2007'
  },
  {
    id: '4',
    name: 'Sigurður Ingi Jóhannsson',
    party: 'Progressive Party',
    image: 'https://www.althingi.is/media/althingismenn/Sigurdur-Ingi-Johannsson-2021.jpg',
    constituency: 'Northwest',
    email: 'sigurdur.ingi.johannsson@althingi.is',
    phone: '+354 563-2003',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    committees: ['Agriculture and Fisheries Committee', 'Transportation Committee'],
    previousCommittees: [
      'Budget Committee',
      'Icelandic delegation to the Nordic Council',
      'Icelandic delegation to the Inter-Parliamentary Union (IPU)'
    ],
    ministerialCareer: [
      'Prime Minister 2016-2017',
      'Minister of Transport and Local Government 2013-2016',
      'Minister of Fisheries and Agriculture 2013-2016'
    ],
    parliamentaryCareer: 'Member of Althingi for the Northwest Constituency since 2003'
  },
  {
    id: '5',
    name: 'Þórhildur Sunna Ævarsdóttir',
    party: 'Pirate Party',
    image: 'https://www.althingi.is/media/althingismenn/Thorhildur-Sunna-Aevarsdottir-2021.jpg',
    constituency: 'Reykjavík South',
    email: 'thorhildur.sunna.aevarsdottir@althingi.is',
    phone: '+354 563-2004',
    termStart: '2021-09-25',
    termEnd: '2025-09-25',
    committees: ['Digital Affairs Committee', 'Justice Committee'],
    previousCommittees: [
      'Education and Culture Committee',
      'Icelandic delegation to the Nordic Council'
    ],
    parliamentaryCareer: 'Member of Althingi for the Reykjavik South Constituency since 2021'
  }
] 