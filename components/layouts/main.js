import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import dynamic from 'next/dynamic'
import Loader from '../panda-loader'

const LazyPanda = dynamic(() => import('../voxel-panda'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ming Chilling" />
        <meta name="author" content="Ming Lin" />
        <meta property="og:site_name" content="Homepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:image" content="/ML_logo1.png" />

        <title>WIP: Just Ming</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyPanda />
        {children}
      </Container>
    </Box>
  )
}

export default Main
