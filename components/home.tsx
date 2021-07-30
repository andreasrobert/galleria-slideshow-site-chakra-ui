import { Grid, Box } from "@chakra-ui/react";

function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
    </Grid>
  );
}

export default Home;
