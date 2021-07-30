import { Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

function Focus() {
  return (
    <>
      <Container pos="fixed" w="100vw" h="100vw"zIndex="2" bg="blackAlpha.700" top="0" right="0" left="0">
        <Heading>CLOSE</Heading>
        <Image src="/assets/the-night-cafe/gallery.jpg" alt="" width="670" height="562"/>
      </Container>
    </>
  );
}

export default Focus;
