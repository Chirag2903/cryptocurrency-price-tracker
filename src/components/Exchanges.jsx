import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'


const Exchanges = () => {

  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);


  useEffect(() => {
    const fetchexchange = async () => {
     try{
      const { data } = await axios.get(`${server}/exchanges`);
      setexchanges(data);
      console.log(data);
      setloading(false);
     }
     catch(error){
      seterror(true);
      setloading(false);
     }
    }
    fetchexchange();
  }, []);

  if(error) return <ErrorComponent/>

  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loader /> : (<>

        <HStack wrap={'wrap'} justifyContent={'center'}>
          {
            exchanges.map((i) => (
              <ExchangeCards key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
            ))
          }
        </HStack>
      </>
      )}
    </Container>);
};
const ExchangeCards = ({ name, img, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack w={'52'} p={'8'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.5s'} m={'4'}
      css={{
        "&:hover": {
          transform: "scale(1.1)"
        }
      }}>
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt="Excahnges" />

      <Heading size={"md"} noOfLines={'1'}>
        {rank}
      </Heading>
      <Text noOfLines={'1'}>{name}</Text>
    </VStack>
  </a>
)



export default Exchanges;