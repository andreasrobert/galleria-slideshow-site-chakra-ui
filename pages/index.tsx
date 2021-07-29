import { Flex, Container } from '@chakra-ui/react';
import Header from '../components/header';
import Home from '../components/home';

export default function HomePage() {
  return (
    <>
      <Container bg="darkcyan" minH="100" maxW="1440" p="20px 40px 30px 40px">
        <Header></Header>
        <Home></Home>
      </Container>
    </>
  )
}
