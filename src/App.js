
// import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Link to='/'>Back To Top</Link>
  </BrowserRouter>
  );
}

export default App;
