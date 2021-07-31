import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "370px",
  md: "780px",
  lg: "960px",
  xl: "1440px",
})


export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Libre Baskerville",
        fontWeight: "700",
      },
      sizes: {
        Display: {
          fontSize: "max(19.5vh, 200px)",
          lineHeight: "15vh",
          opacity: "0.3",
        },
        H1: {
          fontSize: "max(6vh,6vh)",
          lineHeight: "max(6.25vh,6.25vh)",
        },
        H2: {
          fontSize: "24px",
          lineHeight: "29px",
        },
        H3: {
          fontSize: "1.77vh",
          lineHeight: "2.2vh",
        },
        SubH1: {
          fontSize: "max(1.5vh,1.5vh)",
          lineHeight: "2vh",
          fontWeight: "400",
        },
        SubH2: {
          fontSize: "1.28vh",
          lineHeight: "1.7vh",
        },
        Link1: {
          fontSize: "1.5vh",
          lineHeight: "2vh",
          letterSpacing: "0.3vh",
        },
        Link2: {
          fontSize: "max(0.9vh, 9px)",
          lineHeight: "11px",
          letterSpacing: "0.18vh",
        },
        Body: {
          fontSize: "14px",
          lineHeight: "28px",
        },

        // };
        // defaultProps: {
        //     size: string;
        // };
      },
    },

    Text: {
      baseStyle: {
        fontFamily: "Libre Baskerville",
        fontWeight: "700",
      },
      sizes: {
        Body: {
            fontSize: "max(1.37vh, 14px)",
            lineHeight: "max(2.8vh, 28px)",
          },
      },
    },
  },

  fonts: {
    heading: "Libre Baskerville",
    body: "Libre Baskerville",
  },
  colors: {
    red: "green",
  },
   
  breakpoints
});
