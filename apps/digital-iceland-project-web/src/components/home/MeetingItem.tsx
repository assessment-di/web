import { Text, Link as IslandLink } from '@island.is/island-ui/core'

interface MeetingItemProps {
  time: string
  title: string
  href: string
}

export const MeetingItem = ({ time, title, href }: MeetingItemProps) => (
  <Text marginBottom={0}>
    {time} <IslandLink href={href}>{title}</IslandLink>
  </Text>
) 