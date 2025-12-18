// import React from 'react'
// import Home from './pages/Home'

// export default function App(){
//   return <Home />
// }


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Destination from './pages/Destination';
import DestinationMobile from './pages/DestinationMobile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/destination" element={<Destination />} />
      <Route path="/destination-mobile" element={<DestinationMobile />} />
      </Routes>
    </BrowserRouter>

  );
}
