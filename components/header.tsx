import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Header(props: { show: boolean }) {
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        borderBottom="1px solid black"
        pb="2.5vh"
        zIndex="3"
        mb={{ sm: "100px" }}
      >
        <Image src="/assets/shared/logo.svg" alt="" width="170" height="48" />
        {props.show ? (
          <Link href="/" passHref>
            <Heading cursor="pointer" size="Link1" textAlign="end">
              stop slideshow
            </Heading>
          </Link>
        ) : (
          <Link href="/gallery" passHref>
            <Heading cursor="pointer" size="Link1" textAlign="end">
              start slideshow
            </Heading>
          </Link>
        )}
      </Flex>
    </>
  );
}

export default Header;
