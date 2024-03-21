import React from 'react';
import dummy from "./dummy.json"
const Main = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="logo text-4xl font-bold">
                <span className="text-pink-600">P</span>ETOPIA
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-0 top-0 bottom-0 px-3 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 17l-2.5-2.5"
                    />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Adopt</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gray-800 text-white py-20 px-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Companion at PetoPia</h1>
          <p className="text-lg mb-8">Discover a new friend who will bring joy and happiness to your life.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Browse Pets</button>
        </div>
      </section>


      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Pets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dummy.map((pet) => (
              <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                  <p className="text-gray-700 mb-2">{pet.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${pet.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Adopt Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 PetoPia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
