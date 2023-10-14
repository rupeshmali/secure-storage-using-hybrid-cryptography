import React from 'react'
import {Navbar as MantineNavbar, NavLink} from '@mantine/core'
import { Link } from 'react-router-dom'
import { PATHS } from '../../utils/constants'

const Navbar = () => {
  return (
    <MantineNavbar width={{ base: 300 }} height="100vh" p="xs">
        
        <NavLink component={Link} to={PATHS.HOME} label="Home"/>
        <NavLink component={Link} to={PATHS.ABOUT} label="About"/>

    </MantineNavbar>
  )
}

export default Navbar