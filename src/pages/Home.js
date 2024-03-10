import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
// import Footer from "../components/Footer";
import { BottomNavigation } from '@mui/material';
import SimpleBottomNavigation from "../components/SimpleBottomNavigation"

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // Orange color
    },
    background: {
      default: '#ffe0b2', // Light orange background
    },
  },
});

function Home() {
    return (
        <div>
         <ThemeProvider theme={theme}>
            <Header/><br/>
            </ThemeProvider>

            <Main/>



<SimpleBottomNavigation/>


        </div>
    )
}

export default Home;