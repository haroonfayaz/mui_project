import './App.css';
import RightBar from './Components/RightBar';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {
  const [mode,setMode]=useState("light")
  const darkTheme =createTheme({
    palette:{
      mode:mode
    }
  })

  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
       <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
