import React from 'react';
import birdImg from '../../assets/bird.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center py-10 leading-10 justify-between">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 py-6">
          <span className="text-pink-600">Discover</span> Petopia: <br />
          Where Every Pet Has a Home{' '}
        </h1>
        <p className="text-lg md:text-2xl text-gray-800 mb-4 leading-8">
          Embark on a Journey of Compassion and Companionship: <br /> Welcome
          to Petopia, Your Haven for Finding Loving Homes for <br /> Every Pet!
        </p>
        <button className="bg-pink-600 text-white px-4 md:px-6 py-2 md:py-1 rounded-lg font-semibold hover:bg-pink-700 transition duration-300">
          Discover More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={birdImg} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
