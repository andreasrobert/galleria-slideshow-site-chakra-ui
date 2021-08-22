import { Flex, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";
import { data } from "./data";

function SlideBar(props: { paginate: (id: number) => void; slide: number }) {
 
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        borderTop="1px solid #dadada"
        flexShrink={0}
        h="9.1vh"
        mt="70px"
        pos="relative"
        _before={{
          top:"-1px",
          content: `""`,
          position: "absolute",
          width: `${(props.slide+1)/15*100}%`,
          height: "1px",
          bg: "black",
        }}
      >
        <Box>
          <Heading size="H3">{data[props.slide].name}</Heading>
          <Heading size="SubH2">{data[props.slide].artist.name}</Heading>
        </Box>

        <Flex>
          <Box
            mr="37px"
            cursor="pointer"
            onClick={() => {
              props.paginate(-1);
            }}
          >
            <Image
              src="/assets/shared/icon-back-button.svg"
              alt=""
              width="26"
              height="24"
            />
          </Box>
          <Box
            cursor="pointer"
            onClick={() => {
              props.paginate(1);
            }}
          >
            <Image
              src="/assets/shared/icon-next-button.svg"
              alt=""
              width="26"
              height="24"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default SlideBar;
