import React, { useState } from 'react';
import 'bootstrap';
import Home from '../routes/home'; 
import mainImage from '../images/background.jpg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Background image for main part of page.
const mainStyle = {
  backgroundImage: `url(${mainImage})`,
  height: 1500,
}

const Main = () => {
  return (
    <main style={mainStyle}>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/aboutMe" element={} />
            <Route path="/projects" element={} />
            <Route path="/contactInfo" element={} /> */}
          

        </Routes>
    </main>
  )
}

export default Main;