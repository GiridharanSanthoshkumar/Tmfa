import React, { useEffect } from "react";
import "./styles.css"
/*react route dom has to be used here
*/

import { BrowserRouter as Router, Routes, Route, useFetcher } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import ImageGallery from './pages/ImageGallery';

import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Books from "./pages/Books";
import Loading from "./Loading";



function App()
{
 
 const [Loaded,setLoaded]=React.useState(false);
 console.log(Loaded);
 useEffect(()=>{
  setTimeout(() => {
    setLoaded(true)
    
  }, 8000);
 },[]);
 

const imagess = require.context('./assets/Books/Images', true);
const imageList = imagess.keys().map(image => imagess(image));




   
    return  Loaded?(<Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      <Route path="/events" element={<Events></Events>} />
      <Route path="/imagegallery" element={<ImageGallery images={imageList}></ImageGallery>} />
       <Route path="/achievements" element={<Achievements></Achievements>} />
       <Route path="/books" element={<Books></Books>} />
      <Route path="/contact" element={<Contact></Contact>} />
    </Routes>
    <Footer />
  </Router>)
  :(<Loading></Loading>);

  }

export default App;