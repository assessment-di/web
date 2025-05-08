import { Input } from '@island.is/island-ui/core'
import { LegislationSearchProps } from '../../types/legislation'

export const LegislationSearch = ({
  value,
  onChange,
}: LegislationSearchProps) => {
  return (
    <Input
      name="search"
      value={value}
      placeholder="Leita í lögum"
      onChange={(e) => onChange(e.target.value)}
      size="md"
      icon={{ name: 'search' }}
      aria-label="Leita í lögum"
    />
  )
}
