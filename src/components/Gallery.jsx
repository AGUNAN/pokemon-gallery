
import data from "../asserts/data.json"

const Gallery = () => {
    
  return (
      <div className="p-4">   
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {data.map((card, index) => (
          <div key={index} className="relative group perspective">
            <div className="relative w-full h-96 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden backface-hidden">
                <h1 className="font-bold text-2xl bg-cyan-400 text-center p-5">{card.Index}:{card.Name}</h1>
                <div className="flex flex-1/2 items-center justify-evenly">
               
               
                
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">Attack:{card.Attack}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Defence:{card.Defense}</h2>
                  <h2 className="text-lg font-bold text-gray-800">HP:{card.HP}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Speed:{card["Speed\r"]}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Total:{card.Total}</h2>
                  <h2 className="text-lg font-bold text-gray-800">Catagory:{card["Type 1"]}</h2>
              
                  
                </div>
                 <div>
                   <img
                  src={`/images/${card.Image}`}
                  alt={card.Name}
                  className=" w-50 h-50  object-cover"
                />
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default Gallery;