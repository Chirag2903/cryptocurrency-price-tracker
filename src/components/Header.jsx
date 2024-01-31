import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <HStack p={'7'} spacing={'10'} shadow={'base'} bg={'linear-gradient(to left, #800080, #4B0082)'}>
        <Button variant={'unstyled'} color={'white'} fontSize={'1.2rem'}>
          <Link to={'/'}>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} fontSize={'1.2rem'}>
          <Link to={'/exchanges'}>Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} fontSize={'1.2rem'}>
          <Link to={'/coins'}>Coins</Link>
        </Button>
      </HStack>
    </>
  )
}

export default Header