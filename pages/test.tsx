import { Flex, Container, SlideFade,Box } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header";
import Slide from "../components/slide";
import SlideBar from "../components/slideBar";
import { useDisclosure } from "@chakra-ui/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../components/data";

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const { isOpen, onToggle } = useDisclosure();
//   const [slide, setSlide] = useState(7);

  if (page <= -1) {
    setPage([14, direction]);
  }
  if (page >= 15) {
    setPage([0, direction]);
  }

  let imageIndex= page

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
          <Box>
        <motion.img
          key={page}
          src={`${data[imageIndex].images.hero.large}`}
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
        />
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
