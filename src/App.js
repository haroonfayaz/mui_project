import './App.css';
import RightBar from './Components/RightBar';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import { Box, Stack } from '@mui/material';


function App() {
  return (
      <Box>
       <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
      </Box>
  );
}

export default App;
