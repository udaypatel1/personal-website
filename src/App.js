import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Routes>
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
