import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Routes>
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
