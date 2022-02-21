// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';
import IntrestsPage from './components/IntrestsPage/IntrestsPage';
import Home from './components/LoginPage/Home';
import Navbar from './components/LoginPage/Navbar';
// import Login from './components/LoginPage/'
import FlashCard from './components/Cards/FlashCard';
import './App.css'
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <Navbar/>
     {/* <Home/> */}
     <FlashCard/>
    </>
  );
}

export default App;
