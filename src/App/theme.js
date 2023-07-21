import { createTheme, colors } from "@mui/material";

const { common } = colors;

const designToken = {
  skyBlue: "#3778B3",
  greyBlue: "#8BABC4",
  skyBlueDark: "#0D293f",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: designToken.skyBlue,
    },
    secondary: {
      main: designToken.greyBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "navigation" },
          style: {
            color: common.white,
          },
        },
        {
          props: { variant: "navigation", color: "active" },
          style: {
            backgroundColor: designToken.skyBlueDark,
          },
        },
      ],
    },
  },
});
