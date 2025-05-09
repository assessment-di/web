export interface Law {
  caseNumber: string
  date: string
  title: string
  subtitle: string
  proposer: string
  status: string
  description: string
  originalDocumentUrl: string
  history: LawHistory[]
  committees: Committee[]
  relatedDocuments: RelatedDocument[]
  isNew?: boolean
}

export interface LawHistory {
  date: string
  event: string
  description: string
}

export interface Committee {
  name: string
  status: string
  deadline: string
}

export interface RelatedDocument {
  title: string
  url: string
}

export interface LegislationFiltersProps {
  status: { label: string; value: string }
  onStatusChange: (status: { label: string; value: string }) => void
}

export interface LegislationTableProps {
  laws: Law[]
}

export interface LegislationPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  startIndex: number
  endIndex: number
  totalItems: number
}

export interface LegislationSearchProps {
  value: string
  onChange: (value: string) => void
} 