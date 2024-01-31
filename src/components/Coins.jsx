import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Button, Container, HStack, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import Coincards from './Coincards';
import Bot from '../components/Bot';


const Coins = () => {

  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState('inr');

  const currencysymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changepage = (page) => {
    setpage(page);
    setloading(true);
  }
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setcoins(data);
        console.log(data);
        setloading(false);
      }
      catch (error) {
        seterror(true);
        setloading(false);
      }
    }
    fetchcoin();
  }, [currency, page]);

  if (error) return <ErrorComponent />

  return (
    <Container maxW={'container.xl'}  >
      {loading ? <Loader /> : (<>


        <RadioGroup value={currency} onChange={setcurrency} p={'8'}>
          <HStack spacing={'4'}>
            <Radio value={"inr"}>₹</Radio>
            <Radio value={"eur"}>€</Radio>
            <Radio value={"usd"}>$</Radio>
            ''
          </HStack>
        </RadioGroup>
        <Bot position={'coins'} />
        <HStack wrap={'wrap'} justifyContent={'center'}>
          {
            coins.map((i) => (
              <Coincards id={i.id} key={i.id} name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencysymbol={currencysymbol} />
            ))
          }
        </HStack>
        <HStack w={'full'} overflowX="auto" p={'8'}>
          {
            btns.map((items, index) => (
              <Button bgColor={"blackAlpha.900"} color={'white'} onClick={() => changepage(index + 1)}>{index + 1}</Button>
            )
            )
          }
        </HStack>


      </>
      )}
    </Container>);
};

export default Coins