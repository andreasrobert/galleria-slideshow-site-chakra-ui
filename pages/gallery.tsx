import { Flex, Container, Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header";
import Slide from "../components/slide";
import SlideBar from "../components/slideBar";
import { motion, AnimatePresence } from "framer-motion";


export default function Gallery() {
  const [[slide, direction], setSlide] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setSlide([slide + newDirection, newDirection]);
  };

  if (slide <= -1) {
    setSlide([14, direction]);
  }
  if (slide >= 15) {
    setSlide([0, direction]);
  }

  return (
    <>
      <Container
        overflow="hidden"
        bg="white"
        pos="absolute"
        left="0"
        right="0"
        minH="100%"
        h="100%"
        minW={["100%","100%","100%","100%","100%","1440"]}
        maxW="152vh"
        p="2.1vh 40px 0 40px"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Header></Header>
        <AnimatePresence initial={false} custom={direction}>
          <Box>
        <motion.div
        key={slide}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        >
            <Slide slide={slide}></Slide>
        </motion.div>
        
        </Box>
      </AnimatePresence>
        <SlideBar paginate={(id) => paginate(id)} slide={slide}></SlideBar>
      </Container>
    </>
  );
}


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const MotionBox = motion<BoxProps>(Box);
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
