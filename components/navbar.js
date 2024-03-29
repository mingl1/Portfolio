import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
export const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const activeColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _target={_target}
        bg={active ? activeColor : undefined}
        color={active ? '@202023' : inactiveColor}
        borderRadius={'10px'}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
  //  else
  //   return (
  //     <NextLink href={href} passHref>
  //       <Link
  //         p={2}
  //         bg={active ? 'glassTeal' : undefined}
  //         color={active ? '@202023' : inactiveColor}
  //       >
  //         {children}
  //       </Link>
  //     </NextLink>
  //   )
}

const NavBar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      // h="6%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="top-center"
        justify="space-between"
      >
        <Flex align="top-center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path} newTab={true}>
            My Projects
          </LinkItem>
          <LinkItem href="https://github.com/mingl1/portfolio" as={Link}>
            Source Code
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar_menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                {/* <NextLink href="/school" passHref> */}
                {/* <MenuItem as={Link}>School Work</MenuItem> */}
                {/* </NextLink> */}
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/mingl1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Source Code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
