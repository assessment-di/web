import { Select, Inline } from '@island.is/island-ui/core'
import { LegislationFiltersProps } from '../../types/legislation'

const legislationPeriods = [
  { label: '156: 2025', value: '156:2025' },
  { label: '155: 2024', value: '155:2024' },
]

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: '1st discussion', value: '1st' },
  { label: 'Committee opinion', value: 'committee' },
  { label: 'Law', value: 'law' },
]

export const LegislationFilters = ({
  period,
  status,
  onPeriodChange,
  onStatusChange,
}: LegislationFiltersProps) => {
  return (
    <Inline space={2} align="right" justifyContent="flexStart">
      <Select
        label="Legislation period"
        name="period"
        size="sm"
        value={period}
        options={legislationPeriods}
        onChange={(opt) => opt && onPeriodChange(opt)}
      />
      <Select
        label="Status"
        name="status"
        size="sm"
        value={status}
        options={statusOptions}
        onChange={(opt) => opt && onStatusChange(opt)}
      />
    </Inline>
  )
} 