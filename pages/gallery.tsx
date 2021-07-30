import { Flex, Container } from '@chakra-ui/react';
import Header from '../components/header';
import Slide from '../components/slide'
import SlideBar from '../components/slideBar';

export default function Gallery() {
  return (
    <>
      <Container bg="darkcyan" pos="absolute" left="0" right="0" minH="100%" h="100%" maxW="1440" p="20px 40px 0 40px" d="flex" flexDir="column" justifyContent="space-between">
        <Header></Header>
        <Slide></Slide>
        <SlideBar></SlideBar>
      </Container>
    </>
  )
}
