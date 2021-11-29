import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import NavBar from '../navbar'
import dynamic from 'next/dynamic'
import Loader from '../panda-loader'

const LazyPanda = dynamic(() => import('../voxel-panda'), {
    ssr: false,
    loading: () => <Loader />
  })

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>WIP: Just Ming</title>
            </Head>

            <NavBar path={router.asPath}/>
            
            <Container maxW="container.md" pt={14}>
                <LazyPanda />
                {children}
            </Container>
        </Box>
    )
}

export default Main