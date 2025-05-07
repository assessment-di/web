export interface Member {
  id: string
  name: string
  title: string
  ministry: string
  party: string
  dateOfBirth: string
  email: string
  phone: string
  image?: string
  linkedin?: string
  parliamentaryCareer?: string
  committees?: string[]
  presentCommittees?: string[]
  previousCommittees?: string[]
  ministerialCareer?: string[]
} 