import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Libre Baskerville",
        fontWeight: "700",
      },
      sizes: {
        Display: {
          fontSize: "200px",
          lineHeight: "150px",
          opacity: "0.3",
        },
        H1: {
          fontSize: "56px",
          lineHeight: "64px",
        },
        H2: {
          fontSize: "24px",
          lineHeight: "29px",
        },
        H3: {
          fontSize: "18px",
          lineHeight: "22px",
        },
        SubH1: {
          fontSize: "15px",
          lineHeight: "19px",
          fontWeight: "400",
        },
        SubH2: {
          fontSize: "13px",
          lineHeight: "17px",
        },
        Link1: {
          fontSize: "12px",
          lineHeight: "15px",
          letterSpacing: "2.5px",
        },
        Link2: {
          fontSize: "9px",
          lineHeight: "11px",
          letterSpacing: "2px",
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
            fontSize: "14px",
            lineHeight: "28px",
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
});
