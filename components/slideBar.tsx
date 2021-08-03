import { Flex, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { data } from "./data";

function SlideBar(props: { paginate: (id: number) => void; slide: number }) {
  const [bar, setBar] = useState(0)
  const [val, seVal] =useState(0)
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
        {/* <Progress value={(props.slide+1)/15*100} top="-0.5" height="1px" width="100%" colorScheme="gray" position="absolute" bgColor="#E3e3e3"  /> */}

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
