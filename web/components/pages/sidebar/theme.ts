import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
      turquoise: {
        50: "#d8ffff",
        100: "#acffff",
        200: "#7dffff",
        300: "#4dffff",
        400: "#28ffff",
        500: "#18e5e6",
        600: "#00bebe",
        700: "#007f80",
        800: "#004d4e",
        900: "#001b1d",
      },
    },
    styles: {
      global: {
        html: {
          maxWidth: "350px",
          overflow: "hidden",
        },
        body: {
          background: "none",
        },
        "html,body,#root": {
          width: "100%",
          height: "100%",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.2)`,
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "turquoise",
  })
);

export default theme;
