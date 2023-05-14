import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import Login from './routes/login';
import Home from './routes/Home';
import About from './routes/About';
import IosAppInstruction from './routes/IosAppInstruction';
import AndroidAppInstruction from './routes/AndroidAppInstruction';


function App() {
  useEffect(() => {
    ReactGA4.initialize('G-12NRKRQWZ4');
    ReactGA4.send('pageview', window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/ios-app-instruction' element={<IosAppInstruction />} />
      <Route path='/android-app-instruction' element={<AndroidAppInstruction />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
