import { Flex, Heading, Text, Box, FlexProps } from "@chakra-ui/react";
import Image from "next/image";
import Focus from "./focus";
import { data } from "./data";

function Slide(props: { slide: number }) {
  
  let before = props.slide - 1
  let after = props.slide + 1
  if (before <= -1) {
    before = 14
  }
  if (after >= 15) {
    after = 0
  }

  return (
    <Flex justify="space-between" align="center" py="20vh" h="0">
      <Flex mr="15vh">
        <Box w={["30vh","30vh","30vh","30vh", '45vh', '50vh']}>
          <Image
            src={`${data[props.slide].images.hero.large}`}
            alt="hero"
            width="475"
            height="560"
            layout="responsive"
          />
        </Box>
        <Box>
          <Flex
            justify="space-between"
            direction="column"
            h="65vh"
            pos="relative"
          >
            <Box maxH="fit-content" pos="relative">
              <ImageTitleCard>
                <Heading zIndex="2" size="H1" w="35vh">
                  {data[props.slide].name}
                </Heading>
                <Heading zIndex="2" size="SubH1" mt="4vh">
                  {data[props.slide].artist.name}
                </Heading>
              </ImageTitleCard>
            </Box>
            <Box ml="4.8vh" w="13vh">
              
              <Image
                src={`${data[props.slide].artist.image}`}
                alt=""
                width="128"
                height="128"
                layout="responsive"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex direction="column" pos="relative" maxW="37vw">
        <Heading size="Display" pos="absolute" mt="-11.7vh" right="0">
          {data[props.slide].year}
        </Heading>
        <Text size="Body" pr="12vh">
          {data[props.slide].description}
        </Text>
        <a href={data[props.slide].source}>
          <Heading as="u" size="Link2" mt="7vh">
            GO TO SOURCE
          </Heading>
        </a>
      </Flex>

      <Box opacity="0" pos="absolute" pointerEvents="none">
                <Image
                  width="475"
                  height="560"
                  layout="responsive"
                  src={`${data[after].images.hero.large}`}
                  alt="dummy"
                />
                <Image
                  src={`${data[after].artist.image}`}
                  alt=""
                  width="128"
                  height="128"
                  layout="responsive"
                />
                <Image
                  width="475"
                  height="560"
                  layout="responsive"
                  src={`${data[before].images.hero.large}`}
                  alt="dummy"
                />
                <Image
                  src={`${data[before].artist.image}`}
                  alt=""
                  width="128"
                  height="128"
                  layout="responsive"
                />
              </Box>
    </Flex>
  );
}

export default Slide;

const ImageTitleCard = (props: FlexProps) => (
  <Flex
    direction="column"
    _after={{
      content: `""`,
      position: "absolute",
      width: "100%",
      height: "calc(100% + 7vh)",
      bg: "white",
      ml: "-8vh",
      // opacity: "0.6",
    }}
    // _before={{
    //   content: `""`,
    //   position: "absolute",
    //   width: "100%",
    //   height: "27vh",
    //   bg: "white",
    //   ml: "-9vh",
    // }}
    {...props}
  />
);
