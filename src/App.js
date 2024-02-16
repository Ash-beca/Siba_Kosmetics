import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;