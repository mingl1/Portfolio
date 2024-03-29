import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Age from '../components/age'
//import { LinkItem } from '../components/navbar'
// import { LazyPanda } from '../components/layouts/main'

const Page = () => {
  return (
    <Container>
      {/* <LazyPanda /> */}
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m an <Age /> Years Old Undergraduate in New York!
      </Box>
      {/* translate ming lin into different languages every 1.5 seconds */}
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ming Lin
          </Heading>
          <Section delay={0.1}>
            <Paragraph>
              Currently a <b>Computer Science</b> Major at{' '}
              <b>Stony Brook University</b>{' '}
            </Paragraph>
          </Section>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          allign="center"
        >
          <Center>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ML_logo1.png"
              alt="Profile Image"
            />
          </Center>
        </Box>
      </Box>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear> Born in FuZhou, China.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear> Immigrated to NYC, USA.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear> The Bronx High School of Science.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Stony Brook University.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
