import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import { data } from "./data";

function Focus(props: {
  slide: number;
  handlePopUp: () => void;
  popUp: boolean;
}) {
  return (
    <>
      <Flex
        pos="fixed"
        w="100%"
        h="100%"
        zIndex="4"
        bg="blackAlpha.800"
        top="0"
        right="0"
        justifyContent="center"
        alignItems="center"
        onClick={props.handlePopUp}
        d={props.popUp ? "flex" : "none"}
      >
        <Box
          maxW={{ base: "80vw", sm: "45vw" }}
          pos="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <Heading
            size="Body"
            pos="absolute"
            top="-45px"
            right="0"
            color="white"
            cursor="pointer"
            onClick={props.handlePopUp}
          >
            CLOSE
          </Heading>
          <Image src={data[props.slide].images.gallery} alt="" />
        </Box>
      </Flex>
    </>
  );
}

export default Focus;
