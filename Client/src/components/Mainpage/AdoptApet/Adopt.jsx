import React from "react";

const PetDetailsPopup = ({ pet, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-[800px] flex ">
        <button className="absolute top-4 right-4" onClick={onClose}>Close</button>
        <div className="w-1/2 pr-4 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4">{pet.name}</h2>
          <p className="text-gray-700 mb-4">{pet.description}</p>
          <div className="flex justify-between flex-col">
            <span className="text-lg font-bold">${pet.price}</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Message Owner
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={pet.image} alt={pet.name} className="max-w-full h-auto mb-4" />
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPopup;
