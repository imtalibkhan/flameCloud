import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Routs from './Components/Routs';
import Footer from './Components/Footer';

function App() {
  return (
    <Box>
      <Navbar />
      <Routs />
      <Footer />
    </Box>
  );
}

export default App;