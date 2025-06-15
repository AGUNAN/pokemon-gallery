
import Gallery from "./components/Gallery";
import ImageGallery from "./components/SearchFilter";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./components/Nav";


const App = ()=>{

  return (
    <BrowserRouter>
     <Nav/>
    <Routes>
 
      <Route path="/" element={<Gallery/>}/>
      <Route path="/search" element={<ImageGallery/>}/>
      
    
    </Routes>
    </BrowserRouter>
  );
};

export default App;