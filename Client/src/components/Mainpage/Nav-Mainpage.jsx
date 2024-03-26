import { useState } from "react";
import React from 'react'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Frame_1__4_-removebg-preview.png"


function NavMainpage() {
    const [showSetting, setSetting] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate()

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

    const toggleSetting = () => {
        setSetting(!showSetting);
      };

    const rehome = () => {
    navigate("/Rehome");
    };

    const profile=()=>{
        navigate("/Profile")
    }
    const home=()=>{
        navigate("/MainPage")
    }
  return (
    <>
    <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
            <img src={logo} alt="" className="h-16 " />
              {/* <h1 className="logo text-3xl font-bold md:text-4xl">
                <span className="text-pink-600 ">P</span>ETOPIA
              </h1> */}
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
              <a onClick={home}
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 hidden lg:inline-block"
                onClick={rehome}
              >
                Rehome a Pet
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
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={toggleSetting}
                  aria-label="Settings"
                >
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
              <div className="relative" onClick={profile}>
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
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
                  onClick={rehome}
                >
                  Rehome a Pet
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
          </>
  )
}

export default NavMainpage