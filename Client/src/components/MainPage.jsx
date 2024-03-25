import bird from "../assets/bird-doodle.jpg";
import cat from "../assets/cat-doodle.jpg";
import dummy from "./dummy.json";
import all from "../assets/all-animals.png";
import Footer from "./landingpage/Footer";
import { Button } from "@/components/ui/button";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useRef ,useEffect} from "react";



const Main = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSetting, setSetting] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSetting = () => {
    setSetting(!showSetting);
  };

  const handleScrollToPets = () => {
    const petListSection = document.getElementById("petList");
    petListSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideMenu);
    return () => {
      window.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="logo text-3xl font-bold md:text-4xl">
                <span className="text-pink-600 ">P</span>ETOPIA
              </h1>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-10">
              <button className="lg:hidden" onClick={toggleMenu}>
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="hidden lg:flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
              >
                Adopt
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
              >
                Contact
              </a>
              <div className="relative">
                <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={toggleSetting}  aria-label="Settings">
                  <FontAwesomeIcon icon={faCog} />
                </button>
                {showSetting && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-48">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/04/43/94/64/1000_F_443946404_7GUoIGZeyx7R7ymCicI3k0xPnrMoKDek.jpg"
                  alt="Profile Picture"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="lg:hidden bg-white fixed inset-y-0 left-0 w-64 z-50 shadow-md">
          <div className="p-4">
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Adopt
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <section className="mainpage-bg bg-gray-800 text-white py-20 px-4 h-max  sm:px-10">
        <div className="container mx-auto p-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left">
            Find Your Perfect Companion at PetoPia
          </h1>
          <p className="text-base md:text-lg mb-8 text-center md:text-left">
            Discover a new friend who will bring joy and happiness to your life.
          </p>
          <Button
            variant="ghost"
            className="bg-blue-500"
            onClick={handleScrollToPets}
          >
            Browse Pets
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4" id="petList">
          <h2 className="text-3xl font-semibold mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-start md:justify-center gap-4 md:gap-20">
            <div className="relative">
              <img
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter brightness-50 hover:brightness-100 transition duration-300"
                src="https://media.istockphoto.com/id/1186734274/vector/vector-image-of-dog-and-cat-logo-on-white.jpg?s=612x612&w=0&k=20&c=p_wU6nJyvY_31FlX4MSo8MMH1hBHcFo5HxutZccwL4c="
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">All</span>
              </div>
            </div>
         
            <div className="relative">
              <img
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter brightness-50 hover:brightness-100 transition duration-300"
                src={cat}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Cat</span>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter brightness-50 hover:brightness-100 transition duration-300"
                src="https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg="
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Dog</span>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter brightness-50 hover:brightness-100 transition duration-300"
                src="https://img.freepik.com/free-vector/hand-drawn-bunny-outline-illustration_23-2149279919.jpg?t=st=1711003971~exp=1711007571~hmac=4e4817fc90491ac840f8e2dc1eb9cb7c24b8eb57fa9703f5b45e74d0a91fdfad&w=740"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Rabbit</span>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 filter brightness-50 hover:brightness-100 transition duration-300"
                src={bird}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Birds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Pets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dummy.map((pet) => (
              <div
                key={pet.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                  <p className="text-gray-700 mb-2">{pet.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${pet.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                      Adopt Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Main;
