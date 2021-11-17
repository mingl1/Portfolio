import { Container,Box, Heading } from "@chakra-ui/layout"


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="green" p={3} mb={6} align="center">
                Hello, I&apos;m a high school student in NYC.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ming Lin
                    </Heading>
                    <p> Senior student, attending <b>The Bronx High School of Science</b></p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page