import { Flex, Container, SlideFade,Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header";
import Slide from "../components/slide";
import SlideBar from "../components/slideBar";
import { useDisclosure } from "@chakra-ui/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../components/data";

const MotionBox = motion<BoxProps>(Box);


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
      <AnimatePresence initial={false} custom={direction}>
          <Box mt="400px">
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
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
