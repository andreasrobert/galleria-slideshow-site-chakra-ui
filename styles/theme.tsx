import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({ 
  ms: "44vh",
  mm: "50vh",
  mb: "60vh",
  ts: "70vh",
  tm: "80vh",
  tb: "100vh",
  sm: "125vh",   //third
  md: "142vh",   //forth after 200 -> active <- before 1000
  lg: "168vh",  // after 1000px or x use->[fifth] before 1440px
  xl: "1440px",  // after 1440px or x use->[sixth]
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
          // fontSize: ["13vw","13vw","13vw","13vw","13vw","max(19.5vh, 200px)"],
          fontSize: {base:"100px", ms:"120px",ts:"max(20vw, 200px)",sm:"14vw", lg:"max(19.5vh, 200px)"},
          lineHeight: "15vh",
          opacity: "0.3",
        },
        H1: {
          fontSize: {base:"24px",ms:"7.5vw",sm:"max(6vh,6vh)"},
          lineHeight: {base:"29px",ms:"8.7vw" ,sm:"max(6.25vh,6.25vh)"},
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
            // fontSize: ["9px","max(1.37vh, 1vw)","max(1.37vh, 1vw)","max(1.37vh, 1vw)","max(1.37vh, 1vw)","max(1.37vh, 14px)"],
            // lineHeight: ["9px","max(1.9vw, 1.9vw)","max(1.9vw, 1.9vw)","max(1.9vw, 1.9vw)","max(1.7vh, 24px)","max(2.8vh, 28px)"] ,
            fontSize: {base:"14px",ts:"min(18px, 1.5vw)",sm:"max(1.37vh, 0.9vw)", xl:"max(1.37vh, 14px)"},
            lineHeight: {base:"28px",ts:"3.5vw",sm:"max(1.9vw, 1.9vw)", xl:"max(2.8vh, 28px)"} ,
          },
      },
    },
  },

  fonts: {
    heading: "Libre Baskerville",
    body: "Libre Baskerville",
  },
   
  breakpoints
});
