import React from 'react'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import{Link} from 'react-router-dom';

const Coincards = ({ id,name, img, symbol, price,currencysymbol="₹" }) => (
    <Link to={`/coins/${id}`} >
      <VStack w={'52'} p={'8'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.5s'} m={'4'}
        css={{
          "&:hover": {
            transform: "scale(1.1)"
          }
        }}>
        <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt="Exchanges" />
  
        <Heading size={"md"} noOfLines={'1'}>
          {symbol}
        </Heading>
        <Text noOfLines={'1'}>{name}</Text>
        <Text noOfLines={'1'}>{price?`${currencysymbol}${price}`:"NA"}</Text>

      </VStack>
    </Link>
  )  

export default Coincards