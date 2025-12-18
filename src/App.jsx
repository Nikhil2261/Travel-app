// import React from 'react'
// import Home from './pages/Home'

// export default function App(){
//   return <Home />
// }


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Destination from './pages/Destination';
import DestinationMobile from './pages/DestinationMobile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destination" element={<Destination />} />
      <Route path="/destination-mobile" element={<DestinationMobile />} />
      </Routes>
    </BrowserRouter>
  );
}
