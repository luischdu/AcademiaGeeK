import { extendTheme } from "@chakra-ui/react"
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/400.css";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#FEC7D7",
        },
      },
    },
    fonts: {
      heading: "Nunito",
      body: "Nunito",
    },
    colors: {
      brand: {
        primary: "#FEC7D7",
        secondary: "#A786DF",
        tertiary: "#D9D4E7",
        green: "#85D1CE",
        blue: "#91C1D7",
        white: "#FFFFFE",
        black: "#0E172C",
      },
      background: "#FEC7D7",
    },
    textStyles: {
      h3: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "24.55px",
        letterSpacing: "0.15%",
      },
      h4: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing: "0.5%",
      },
      h5: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "19.1px",
        letterSpacing: "0.5%",
      },
      h6: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.5%",
      },
    },
  });

export default theme