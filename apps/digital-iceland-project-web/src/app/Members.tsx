import { Box, GridContainer, Text } from '@island.is/island-ui/core'
import {
  Table,
  Row,
  Head,
  HeadData,
  Body,
  Data,
} from '@island.is/air-discount-scheme-web/components/Table'

const members = [
  {
    name: 'Alma D. Möller',
    party: 'The Social Democratic Alliance',
    image: 'https://www.althingi.is/media/althingismenn/Alma-D-Moller-2021.jpg',
  },
  {
    name: 'Jon Jonsson',
    party: 'Independence Party',
    image: '',
  },
  {
    name: 'Maria Sigurdardottir',
    party: 'Left-Green Movement',
    image: '',
  },
]

const Members = () => {
  return (
    <Box background="blue100" paddingY={6}>
      <GridContainer>
        <Text variant="h1" as="h1" color="blue400" marginBottom={4}>
          Members of Parliament
        </Text>
        <Table>
          <Head>
            <Row>
              <HeadData>Photo</HeadData>
              <HeadData>Name</HeadData>
              <HeadData>Party</HeadData>
            </Row>
          </Head>
          <Body>
            {members.map((member, idx) => (
              <Row key={idx}>
                <Data>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: 40, height: 40, borderRadius: '50%' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: '#eee',
                      }}
                    />
                  )}
                </Data>
                <Data>{member.name}</Data>
                <Data>{member.party}</Data>
              </Row>
            ))}
          </Body>
        </Table>
      </GridContainer>
    </Box>
  )
}

export default Members
