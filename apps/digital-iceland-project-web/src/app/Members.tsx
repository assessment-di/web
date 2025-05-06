import { Box, GridContainer, Text, Button } from '@island.is/island-ui/core'
import {
  Table,
  Row,
  Head,
  HeadData,
  Body,
  Data,
} from '@island.is/air-discount-scheme-web/components/Table'
import { parliamentMembers } from './mockData/members'
import { useNavigate } from 'react-router-dom'

const Members = () => {
  const navigate = useNavigate()

  const handleViewDetails = (id: string) => {
    navigate(`/members/${id}`)
  }

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
              <HeadData>Constituency</HeadData>
              <HeadData>Details</HeadData>
            </Row>
          </Head>
          <Body>
            {parliamentMembers.map((member) => (
              <Row key={member.id}>
                <Data>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
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
                <Data>{member.constituency}</Data>
                <Data>
                  <Button
                    size="small"
                    variant="ghost"
                    onClick={() => handleViewDetails(member.id)}
                  >
                    View Details
                  </Button>
                </Data>
              </Row>
            ))}
          </Body>
        </Table>
      </GridContainer>
    </Box>
  )
}

export default Members
