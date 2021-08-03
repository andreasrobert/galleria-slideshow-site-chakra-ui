import { Heading, Container, Image, Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import { data } from "../components/data";
import Link from "next/link";

export default function HomePage() {
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
            <Link key={id} href={`/gallery?foo=${id.id}`} passHref>
              <Box key={id} pos="relative" cursor="pointer">
                <Image
                  key={id}
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
          ))}
        </Box>

        {/* console.log(id.images.thumbnail) */}
      </Container>
    </>
  );
}
