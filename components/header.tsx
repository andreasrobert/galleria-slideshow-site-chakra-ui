import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image'



function Header() {    
  return (
    <>
    <Flex justify="space-between" align="center" borderBottom="1px solid black" pb="30px">
        <Image src="/assets/shared/logo.svg" alt="" width="170" height="48"/>
        <Heading size="Link1">start slideshow</Heading>

    </Flex> 
    </>
  );
}

export default Header;