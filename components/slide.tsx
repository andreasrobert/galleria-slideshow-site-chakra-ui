import {
  Flex,
  Heading,
  Text,
  Box,
  FlexProps,
  BoxProps,
} from "@chakra-ui/react";
import Image from "next/image";
import { data } from "./data";
import { motion } from "framer-motion";

function Slide(props: { slide: number; handlePopUp: () => void }) {
  let before = props.slide - 1;
  let after = props.slide + 1;
  if (before <= -1) {
    before = 14;
  }
  if (after >= 15) {
    after = 0;
  }

  return (
    <>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        py={{ base: "40px", sm: "20vh" }}
        h={{ base: "100%", sm: "0" }}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Flex w="100%" mr="1vh" flexDirection={{ base: "column", ts: "row" }}>
          <Box
            w={{ base: "60vw", sm: "31vw", xl: "50vh" }}
            d={{ base: "none", ts: "block" }}
            onClick={props.handlePopUp}
            pos="relative"
          >
            <Box
            pos="relative"
             _after={{
              cursor:"pointer",
              color:"white",
              top:{base:"0", sm:"initial"},
              bottom:"0",
              textAlign:"center",
              lineHeight:"41.5px",
              fontSize:"10px",
              letterSpacing:"2.3px",
              content: `"VIEW IMAGE"`,
              backgroundImage:"url('/assets/shared/icon-view-image.svg')",
              backgroundRepeat:"no-repeat",
              backgroundPositionY:"center",
              position: "absolute",
              width: "152px",
              height: "40px",
              ml:{base:"1.3vh", sm:"3vh"},
              my:{base:"-0.5vh", sm:"1vh"},
            }}
            >
            <Image
              src={`${data[props.slide].images.hero.large}`}
              alt="hero"
              width="475"
              height="560"
              layout="responsive"
            />
            </Box>
          </Box>
          <Box
            w="100%"
            d={{ base: "block", ts: "none" }}
            pos="relative"
            pointerEvents="none"
          >
            <Heading
              pos="absolute"
              bottom="0px"
              p={{ base: "1vh 1vh 0 1vh", mm: "3vh 3vh 0 3vh" }}
              w="80%"
              zIndex="3"
              bg="white"
              size="H1"
            >
              {data[props.slide].name}
            </Heading>
            <Box
            pos="relative"
             _after={{
              cursor:"pointer",
              color:"white",
              top:{base:"0", sm:"initial"},
              bottom:"0",
              textAlign:"center",
              lineHeight:"41.5px",
              fontSize:"10px",
              letterSpacing:"2.3px",
              content: `"VIEW IMAGE"`,
              backgroundImage:"url('/assets/shared/icon-view-image.svg')",
              backgroundRepeat:"no-repeat",
              backgroundPositionY:"center",
              position: "absolute",
              width: "152px",
              height: "40px",
              ml:"1.3vh",
              my:"-0.5vh",
            }}
            >
            <Image
              src={`${data[props.slide].images.hero.small}`}
              alt="hero"
              width="327"
              height="280"
              layout="responsive"
            />
            </Box>
          </Box>
          <Box>
            <Flex
              justify="space-between"
              direction="column"
              h={{ sm: "calc(100% + 7vh)", lg: "65vh" }}
              pos="relative"
            >
              <Box maxH="fit-content" pos="relative">
                <ImageTitleCard ml={{ ts: "-22vw", sm: "0px" }}>
                  <Heading
                    as="span"
                    zIndex="2"
                    size="H1"
                    w={{ base: "50vw", sm: "35.1vh" }}
                    d={{ base: "none", ts: "inline" }}
                  >
                    {data[props.slide].name}
                  </Heading>
                  <Heading
                    zIndex="2"
                    size="SubH1"
                    mt={{ base: "1vh", ts: "4vh" }}
                    pl={{ base: "1vh", mm: "3vh", ts: "0px" }}
                  >
                    {data[props.slide].artist.name}
                  </Heading>
                </ImageTitleCard>
              </Box>
              <MotionBox
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                ml={{ base: "1vh", mm: "3vh", ts: "4.8vh" }}
                w={{ base: "15vw", sm: "10vw", xl: "13vh" }}
                mt={{ base: "3.2vh", ts: "6vh", sm: "0px" }}
                mb={{ base: "7vh", ts: "0px" }}
              >
                <Image
                  src={`${data[props.slide].artist.image}`}
                  alt=""
                  width="128"
                  height="128"
                  layout="responsive"
                />
              </MotionBox>
            </Flex>
          </Box>
        </Flex>
        <MotionBox variants={textVariants} initial="hidden" animate="visible">
          <Flex
            direction="column"
            pos="relative"
            maxW={{ base: "100%", sm: "max(37vw,37vw)" }}
            mt={{ ts: "12.8vh", sm: "7vh" }}
          >
            <Heading
              size="Display"
              pos="absolute"
              mt={{ base: "-10vh", mm: "-6.5vh", sm: "-11.7vh" }}
              right="0"
              d={{ base: "inline", ts: "none", sm: "inline" }}
            >
              {data[props.slide].year}
            </Heading>
            <Heading
              size="Display"
              pos="absolute"
              mt={{ base: "-6.5vh", sm: "-11.7vh" }}
              left="0"
              d={{ base: "none", ts: "inline", sm: "none" }}
            >
              {data[props.slide].year}
            </Heading>
            <Text
              size="Body"
              pr={{ ts: "11vh" }}
              pl={{ ts: "11vh", sm: "0px" }}
              ml={{ sm: "-10vh" }}
            >
              {data[props.slide].description}
            </Text>
            <Box mt={{ ts: "5vh" }}>
              <a href={data[props.slide].source}>
                <Heading
                  pl={{ ts: "12vh", sm: "0px" }}
                  as="u"
                  ml={{ sm: "-10vh" }}
                  size="Link2"
                >
                  GO TO SOURCE
                </Heading>
              </a>
            </Box>
          </Flex>
        </MotionBox>

        <Box opacity="0" pos="absolute" pointerEvents="none">
          <Box d={{ base: "none", ts: "block" }}>
            <Image
              width="475"
              height="560"
              layout="responsive"
              src={`${data[after].images.hero.large}`}
              alt="dummy"
            />
            <Image
              width="475"
              height="560"
              layout="responsive"
              src={`${data[before].images.hero.large}`}
              alt="dummy"
            />
          </Box>

          <Box d={{ base: "block", ts: "none" }}>
            <Image
              width="327"
              height="280"
              layout="responsive"
              src={`${data[after].images.hero.small}`}
              alt="dummy"
            />
            <Image
              width="327"
              height="280"
              layout="responsive"
              src={`${data[before].images.hero.small}`}
              alt="dummy"
            />
          </Box>

          {/* <Image
          src={`${data[after].artist.image}`}
          alt=""
          width="128"
          height="128"
          layout="responsive"
        />

        <Image
          src={`${data[before].artist.image}`}
          alt=""
          width="128"
          height="128"
          layout="responsive"
        /> */}
        </Box>
      </Flex>
    </>
  );
}

export default Slide;

const ImageTitleCard = (props: FlexProps) => (
  <Flex
    direction="column"
    bg="white"
    _after={{
      top: "-1px",
      content: `""`,
      position: "absolute",
      width: "calc(100% + 22vw)",
      height: { base: "calc(100% + 6vh)", sm: "calc(100% + 7vh)" },
      bg: "white",
      ml: { base: "-6vh", sm: "-8vh" },
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

export const MotionBox = motion<BoxProps>(Box);

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, duration: 1.5 },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 1.5 },
  },
};
