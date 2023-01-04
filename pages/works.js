import {
  Container,
  Heading,
  // SimpleGrid,
  Divider,
  // Box,
  OrderedList,
  ListItem,
  Link
} from '@chakra-ui/react'
// import { LazyPanda } from '../components/layouts/main'
import { ExternalLinkIcon } from '@chakra-ui/icons'
// import { LinkItem } from '../components/navbar'
// import Section from "../components/section"

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Latest:
      </Heading>
      {/* <SimpleGrid columns={1} spacing={10}>
        <Box bg="tomato" height="350px"></Box>

        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid> */}
      <Heading as="h4" fontSize={15} mb={4}>
        5 Week Web-Dev BootCamp | Dec 2022
      </Heading>
      <Divider />
      <OrderedList>
        <ListItem>
          <Link href="https://mingl1.github.io/project1" isExternal>
            Japan Travel Blog <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://mingl1.github.io/project2" isExternal>
            E-Commerce Clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://mingl1.github.io/project3" isExternal>
            Basic JavaScript Game <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>Learned SQL and PostgreSQL</ListItem>
        <ListItem>
          Reaction Speed Tester with PostgreSQL to track lowest reaction times
        </ListItem>
      </OrderedList>
    </Container>
  )
}

export default Works
