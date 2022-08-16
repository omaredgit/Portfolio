import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link, Stack, heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, propNames} from '@chakra-ui/react'
    import {HumburgerIcon} from '@chakra-ui/icons'
import { Children } from 'react'

    const LinkItem = ({href, path, children}) =>{
        const active = path ===hrefcoinst
        const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
        
        return(
            <NexLink href={href}>
                <Link
                p={2}
                bg= {active? 'glassTeal': undefined}
                color ={active ? '#202023' : inactiveColor}
                >
                    {Children}
                </Link>

            </NexLink>
        )
    }

const Navbar = props =>  {
    const {path} = props

    return(
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg = {useColorModeValue('#fff')}></Box>
    )
}