// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/login';
import Home from './routes/Home';
import About from './routes/About';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
