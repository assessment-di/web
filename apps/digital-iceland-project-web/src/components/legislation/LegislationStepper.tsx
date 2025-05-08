import { FormStepper, Text } from '@island.is/island-ui/core'

const stepperSections = [
  { name: 'Stjórn­ar­frum­varp', date: '01.01.2025' },
  { name: '1. umræða', date: '01.01.2025' },
  { name: 'Nefndarálit' },
  { name: 'Breytingartillögur' },
  { name: '2. umræða' },
  { name: 'Frumvarp eftir 2. umræðu' },
  { name: '3. umræða' },
  { name: 'Lög' },
]

interface LegislationStepperProps {
  status: string
}

export const LegislationStepper = ({ status }: LegislationStepperProps) => {
  const activeSection = stepperSections.findIndex((s) => s.name === status) || 0
  return (
    <FormStepper
      formName="Staða málsins"
      activeSection={activeSection}
      sections={stepperSections.map((s) => ({
        name: s.name,
        tag: s.date ? (
          <Text variant="small" color="dark400">{s.date}</Text>
        ) : undefined,
      }))}
    />
  )
}

export default LegislationStepper 