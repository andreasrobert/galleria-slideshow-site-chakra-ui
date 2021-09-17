import {
  Heading,
  Container,
  Image,
  Box,
  Flex,
  BoxProps,
} from "@chakra-ui/react";
import Header from "../components/header";
import { data } from "../components/data";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function HomePage() {
  const MotionBox = motion<BoxProps>(Box);

  return (
    <>
      <Container bg="white" minH="100" maxW="1440" p="20px 40px 30px 40px">
        <Header show={false}></Header>

        <Box
          mt={{ sm: "-70px" }}
          py="20px"
          w="100%"
          maxW="100%"
          mx="auto"
          bg="white"
          sx={{
            columnCount: { base: "1", ts: "2", sm: "4" },
            columnGap: { base: "15vw", ts: "4.5vw", sm: "2vw" },
          }}
        >
          {data.map((id: any) => (
            <MotionBox
              key={id.id}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Link href={`/gallery?foo=${id.id}`} passHref>
                <Box pos="relative" cursor="pointer">
                  <Image
                    pb={{ base: "5.5vw", ts: "4.5vw", sm: "2vw" }}
                    w="100%"
                    src={id.images.thumbnail}
                    alt=""
                  />
                  <Flex
                    flexDirection="column"
                    bottom="0px"
                    pos="absolute"
                    p="25px"
                    pb={{
                      base: "calc(5.5vw + 25px)",
                      ts: "calc(4.5vw + 25px)",
                      sm: "calc(2vw + 25px)",
                    }}
                  >
                    <Heading zIndex="3" size="H2" color="white">
                      {id.name}
                    </Heading>
                    <Heading zIndex="2" size="SubH1" color="white">
                      {id.artist.name}
                    </Heading>
                  </Flex>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </Box>

      </Container>
    </>
  );
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: Math.random() * (1 - 0.5 + 1) + 0.1, duration: 2 },
  }),
};
