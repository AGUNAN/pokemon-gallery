import React from 'react'
import ImageGallery from './SearchFilter';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white font-bold text-center">
  <div class=" flex  justify-around">
    
    <div class="text-white text-center text-xl font-bold">
      POKEMON GALLERY
    </div>

    <div>
    <Link to="/" className=" text-white text-center text-xl font-bold hover:underline">HOME</Link>
    <Link to="/search" className="text-white text-center text-xl font-bold m-7 hover:underline">SEARCH</Link>
    </div>
    

   
  </div>
</nav>

)};

export default Nav