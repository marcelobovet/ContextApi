import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPexelPhotos } from "./components/MyApi";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Navbar from "./components/Navbar";
import MyContext from "./components/MyContext"


function App() {

   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);
   const sharedStates = { photos, setPhotos, loading }

   const callApi = async () => {
      setLoading(true);
      setTimeout(async () => {
         const data = await getPexelPhotos();
         setPhotos(data.photos);
         setLoading(false);
      }, 1000);
   }

   useEffect(() => {
      callApi();
   }, []);

   return (
      
      <div className="App">
         <MyContext.Provider value={sharedStates}>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favoritos" element={<Favoritos />} />
               </Routes>
            </BrowserRouter>
         </MyContext.Provider>
      </div>
   );
}

export default App;