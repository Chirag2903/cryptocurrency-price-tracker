import React, { useEffect } from 'react'
import { Image, Box } from '@chakra-ui/react';
import img from '../assets/cyrpto.jpg';
import Typed from 'typed.js';
import "../css/Home.css"
import Bot from '../components/Bot';

const Home = () => {

  useEffect(() => {

    const options = {
      strings: ["CRYPTOCURRENCY", "COINPRICE INSIGHT", "PRICE TRACKER"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Box flexWrap={'wrap'} w={'full'} h={'100vh'} backgroundColor={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'} >

      <div className='home-left'>
        <h1><span className="typed-text"></span></h1>
        <p>Empower your crypto journey with, a robust price tracker offering updates on diverse cryptocurrencies. Explore market trends effortlessly, gaining valuable insights through interactive graphs for informed decision-making.</p>
      </div>
      <div className='home-right'>
        <Image src={img} w={'100%'} h={'100%'} objectFit={'cover'} />
      </div>
      <Bot />
    </Box >
  );
}

export default Home