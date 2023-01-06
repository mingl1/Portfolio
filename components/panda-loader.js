import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PandaSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

// eslint-disable-next-line react/display-name
export const PandaContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-Panda"
    m="auto"
    at={['-20px', '-60px', '-100px']}
    mb={['-40px', '-140px', '-170px']}
    w={[280, 480, 540]}
    h={[280, 480, 540]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <PandaContainer>
      <PandaSpinner />
    </PandaContainer>
  )
}

export default Loader
