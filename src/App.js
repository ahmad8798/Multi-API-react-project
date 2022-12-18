// import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Crypto from './Cryptocurrency/Crypto';
import Login from './Login/Login';
import Nav from './Main/Nav';
import Home from './Main/Home';
import Covid from './Covid-data/Covid';
import Quote from './Quote/Quote';

function App() {
  return (
    <div className="w-100">
      <BrowserRouter >
      <Nav/>
      <Routes>
        <Route index to="/" element={<Home/>} />
        <Route path="/crypto" element={<Crypto/>} />
        <Route path="/covid" element={<Covid/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/quote" element={<Quote/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
