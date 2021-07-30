import { Flex, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image'



function SlideBar() {    
  return (
    <>
    <Flex justify="space-between" align="center" borderTop="1px solid black" flexShrink={0} h="86px" mt="70px">
        <Box>
            <Heading size="H3">The Night Cafe</Heading>
            <Heading size="SubH2">Vincent van Gogh</Heading>
        </Box>
        
        <Flex >
            <Box mr="37px" cursor="pointer">
            <Image src="/assets/shared/icon-back-button.svg" alt="" width="26" height="24"/>
            </Box>
            <Box cursor="pointer">
            <Image src="/assets/shared/icon-next-button.svg" alt="" width="26" height="24"/>
            </Box>
        </Flex>

    </Flex> 
    </>
  );
}

export default SlideBar;