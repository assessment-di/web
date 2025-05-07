import { Select, Inline } from '@island.is/island-ui/core'
import { LegislationFiltersProps } from '../../types/legislation'

const statusOptions = [
  { label: 'Allt', value: 'all' },
  { label: '1. umræða', value: '1. umræða' },
  { label: 'Nefndarálit', value: 'Nefndarálit' },
  { label: 'Lög', value: 'Lög' },
]

export const LegislationFilters = ({
  status,
  onStatusChange,
}: LegislationFiltersProps) => {
  return (
    <Inline space={2} align="right" justifyContent="flexStart">
      <Select
        label="Staða"
        name="status"
        size="sm"
        value={status}
        options={statusOptions}
        onChange={(opt) => opt && onStatusChange(opt)}
      />
    </Inline>
  )
}
