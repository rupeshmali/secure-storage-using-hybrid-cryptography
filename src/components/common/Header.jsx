import React from 'react'
import { Button, Flex, Header as MantineHeader } from '@mantine/core'
import {BiSolidBoltCircle} from 'react-icons/bi'

const Header = () => {
  return (
    <MantineHeader height={60} p="xs">
        <Flex h= "100%" align="center" justify="space-between">
            <BiSolidBoltCircle size={24} color='dodgerblue'/>
            <Button>Sign In</Button>
        </Flex>
    </MantineHeader>
  )
}

export default Header