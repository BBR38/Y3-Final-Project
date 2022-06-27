import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Landing_page from './Components/Landing_page.jsx';
import About from './Components/About.jsx';
import ContactUs from "./Components/contactus.jsx"
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Landing_page></Landing_page>
      <About></About>
      <ContactUs></ContactUs>
    </main>
  );
}

export default App;