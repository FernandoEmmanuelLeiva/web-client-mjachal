import { createTheme } from '@mui/material/styles';

// Replace these hex color codes with the colors you've extracted from the image
const primaryColor = '#268bd0'; // Example primary color
const secondaryColor = '#268bd0'; // Example secondary color
const errorColor = '#FF0000'; // Example error color
const warningColor = '#FFA500'; // Example warning color
const infoColor = '#268bd0'; // Example info color
const successColor = '#268bd0'; // Example success color

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    warning: {
      main: warningColor,
    },
    info: {
      main: infoColor,
    },
    success: {
      main: successColor,
    },
  },
  // You can also customize other theme aspects here
});

export default theme;
