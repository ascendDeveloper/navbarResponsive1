import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
