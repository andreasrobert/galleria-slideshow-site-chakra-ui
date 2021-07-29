import { Flex, Container } from '@chakra-ui/react';
import Header from '../components/header';
import Slide from '../components/slide'
export default function HomePage() {
  return (
    <>
      <Container bg="darkcyan" minH="100" maxW="1440" p="20px 40px 30px 40px">
        <Header></Header>
        <Slide></Slide>
      </Container>
    </>
  )
}
