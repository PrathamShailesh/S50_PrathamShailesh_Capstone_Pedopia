import React from "react";
import birdImg from "../assets/bird.png";
import wave from "../assets/wave.png";
import lovebirds from "../assets/lovebirds.png"
import cat from "../assets/cat.png"
import dog from "../assets/dog.png"
import fish from "../assets/fish.png"


function LandingPage() {
  return (
    <div className="bg-pink-200">
      <div className="p-5 px-20">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="logo text-4xl font-bold">
              <span className="text-pink-600">P</span>ETOPIA
            </h1>
          </div>
          <div className="space-x-10 text-2xl">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              HOME
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              ABOUT
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              CONTACT US
            </a>
          </div>
          <div className="space-x-10 text-xl">
            <a
              href="#"
              className="signup text-gray-800 hover:text-gray-600 border-2 border-gray-800 px-4 py-2 px-5 rounded-full"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-7 py-2 rounded"
            >
              Login
            </a>
          </div>
        </nav>
        <div className="flex flex-row h-500 items-center py-10 leading-10 justify-between">
          <div>
            <h1 className="text-5xl font-semibold mb-4 py-6">
              <span className="text-pink-600">Discover</span> Petopia: <br />
              Where Every Pet Has a Home{" "}
            </h1>
            <p className="text-2xl text-gray-800 mb-4 leading-8">
              Embark on a Journey of Compassion and Companionship: <br />{" "}
              Welcome to Petopia, Your Haven for Finding Loving Homes for <br />{" "}
              Every Pet!
            </p>
            <button className="bg-pink-600 text-white px-6 py-1 rounded-lg font-semibold hover:bg-pink-700 transition duration-300">
              Discover More
            </button>
          </div>
          <div>
            <img src={birdImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="wave text-center">
        <div className="p-10 flex flex-col items-center text-white justify-center h-screen">
          <h1 className="text-5xl font-bold text-center p-10">
            Explore Our Website
          </h1>
          <p className="text-2xl">
            "Discover companionship at its finest. Explore our site and find the{" "}
            <br /> perfect pet to bring love and joy into your life."
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-48">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-pink-400 rounded-full flex justify-center items-center mr-5"></div>
          <div className="text-2xl text-pink-400 h-1 w-64 bg-pink-400"></div>
          <div className="w-10 h-10 bg-pink-400 rounded-full flex justify-center items-center mx-5"></div>
          <div className="text-2xl text-pink-400 h-1 w-64 bg-pink-400"></div>
          <div className="w-10 h-10 bg-pink-400 rounded-full flex justify-center items-center ml-5"></div>
        </div>
      </div>
      <div className="flex justify-center mt-15 p-10 ">
        <div className="new">
          <div className="mr-10">
            <h2 className="text-2xl text-pink-600 font-semibold">
              Find your Pet
            </h2>
            <p className="text-lg text-pink-500 p-5">
              Select a Pet from our <br /> sellers
            </p>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl text-pink-600 font-semibold">
              Know your pet
            </h2>
            <p className="text-lg text-pink-500 p-5">
              Text the current owner <br /> and know about your Pet
            </p>
          </div>
          <div className="ml-10">
            <h2 className="text-2xl text-pink-600 font-semibold">
              Take your Pet home
            </h2>
            <p className="text-lg text-pink-500 p-5">
              Meet the owner and take <br /> your Pet home
            </p>
          </div>
        </div>
      </div>
      <div className="mt-48 text-center pb-32">
        <h1 className="text-3xl font-bold pb-10 ">Pet Categories</h1>{" "}
        <div className="grid grid-cols-4 gap-4 mt-4 ">
          <div className="flex flex-col items-center">
            <img src={lovebirds} alt="" />
            <p className="text-2xl font-semibold">Birds</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={cat} alt="" />
            <p className="text-2xl font-semibold">Cats</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={dog} alt="" />
            <p className="text-2xl font-semibold">Dogs</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={fish} alt="" />
            <p className="text-2xl font-semibold">Fishes</p>
          </div>
        </div>
      </div>
<footer className="bg-gray-800 py-16">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center">

      <h1 className="logo text-4xl font-bold">
              <span className="text-pink-600">P</span>ETOPIA
            </h1>
    </div>
    <p className="text-gray-400 text-center mt-4">Your go-to destination for all things pet-related</p>
    <div className="mt-8 text-center">
      <p className="text-gray-400">Contact Us:</p>
      <p className="text-gray-400">Email: info@petopia.com</p>
      <p className="text-gray-400">Phone: 123-456-7890</p>
    </div>
    <div className="mt-8 text-center">
      <p className="text-gray-400">"The love of a pet makes a house feel like home."</p>
    </div>
    <div className="mt-8 flex justify-center items-center">
      <p className="text-gray-400 mr-4">Follow us on social media:</p>
      <a href="#" className="text-gray-400 hover:text-gray-300 mr-4"></a>
      <a href="#" className="text-gray-400 hover:text-gray-300 mr-4"></a>
      <a href="#" className="text-gray-400 hover:text-gray-300"></a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default LandingPage;
