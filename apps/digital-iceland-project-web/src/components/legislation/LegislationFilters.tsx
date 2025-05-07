import { Select, Inline } from '@island.is/island-ui/core'
import { LegislationFiltersProps } from '../../types/legislation'

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: '1st discussion', value: '1st' },
  { label: 'Committee opinion', value: 'committee' },
  { label: 'Law', value: 'law' },
]

export const LegislationFilters = ({
  status,
  onStatusChange,
}: LegislationFiltersProps) => {
  return (
    <Inline space={2} align="right" justifyContent="flexStart">
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
