import React from 'react'
import { Image, Text, Box } from '@chakra-ui/react';
import img from '../assets/cyrpto.jpg';

const Home = () => {
  return (
    <Box  flexWrap={'wrap'} w={'full'} h={'100vh'} bgColor={'black'} justifyContent={'center'} >
      <Image src={img} w={'full'} h={'full'} objectFit={'contain'} />
    <Text  fontSize={"6xl"} textAlign={'center'} bgColor={'black'} color={'white'} fontWeight={"semibold"} >
      cS Crypto 
    </Text>
    </Box>
  );
}

export default Home