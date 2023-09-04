
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avis from './Pages/Avis';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Header from './Components/Header'
import NotFound from './Pages/NotFound';



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/avis' element={<Avis/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
