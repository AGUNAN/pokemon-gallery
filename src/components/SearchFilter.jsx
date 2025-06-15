import React, { useState } from "react";
import images from "../asserts/data.json"

const ImageGallery = () => {
  const [search, setSearch] = useState("");

  const filtered = images.filter((img) =>
    img.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 py-2 mt-7 border rounded w-64 shadow"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((img,Index) => (
           <div key={Index}className="relative w-full h-96 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden backface-hidden">
                <h1 className="font-bold text-2xl bg-cyan-400 text-center p-5">{img.Index}:{img.Name}</h1>
                <div className="flex flex-1/2 items-center justify-evenly">
               
               
                
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">Attack:{img.Attack}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Defence:{img.Defense}</h2>
                  <h2 className="text-lg font-bold text-gray-800">HP:{img.HP}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Speed:{img["Speed\r"]}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Total:{img.Total}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Catagory:{img["Type 1"]}</h2>
              
                  
                </div>
                 <div>
                   <img
                  src={`/images/${img.Image}`}
                  alt={img.Name}
                  className=" w-50 h-50  object-cover"
                />
                </div>
                </div>
              </div>
            </div>
          
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No images found.</p>
      )}
    </div>
  );
};

export default ImageGallery;
