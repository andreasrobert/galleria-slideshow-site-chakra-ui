import { Flex, Heading, Text, Box, FlexProps } from "@chakra-ui/react";
import Image from "next/image";
import Focus from "./focus";

function Slide() {
  return (
    <Flex justify="space-between" align="center" pb="30px" flexShrink={1} h="0" >
      <Flex>
        <Box>
          <Image
            src="/assets/the-night-cafe/hero-large.jpg"
            alt=""
            width="475"
            height="560"
          />
        </Box>
        <Box>
          <Flex
            justify="space-between"
            direction="column"
            h="500"
            pos="relative"
          >
            <ImageTitleCard>
              <Heading zIndex="2" size="H1">
                The Night Cafe
              </Heading>
              <Heading zIndex="2" size="SubH1">
                Vincent van Gogh
              </Heading>
            </ImageTitleCard>
            <Box ml="30px">
              <Image
                src="/assets/the-night-cafe/artist.jpg"
                alt=""
                width="128"
                height="128"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex maxW="30vw" direction="column">
        <Heading size="Display" pos="absolute" mt="-117px" ml="8px">
          1888
        </Heading>
        <Text size="Body">
          The Night Café (French: Le Café de nuit) is an oil painting created by
          Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is
          inscribed lower right beneath the signature. The painting is owned by
          Yale University and is currently held at the Yale University Art
          Gallery in New Haven, Connecticut. The interior depicted is the Café
          de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his
          wife Marie, who in November 1888 posed
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux
          evidently posed for both artists, too.
        </Text>

        <Text as="u" size="Link2">
          GO TO SOURCE
        </Text>
      </Flex>
    </Flex>
  );
}

export default Slide;

const ImageTitleCard = (props: FlexProps) => (
  <Flex
    direction="column"
    // _after={{
    //     content: `""`,
    //     position: "absolute",
    //     width: "65px",
    //     height: "302px",
    //     bg: "white",
    //     ml: "-65px",
    //     // opacity: "0.6",
    // }}
    _before={{
      content: `""`,
      position: "absolute",
      width: "100%",
      height: "302px",
      bg: "white",
      ml: "-65px",
    }}
    {...props}
  />
);
