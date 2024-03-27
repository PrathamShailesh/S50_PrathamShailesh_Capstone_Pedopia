import NavMainpage from "../Mainpage/Nav-Mainpage";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User not authenticated");
        }
        const response = await axios.get("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setUsername(response.data.User_Name);
        setEmail(response.data.Email);
        setAddress(response.data.Address || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }

      const updatedUserData = {
        User_Name: username,
        Email: email,
        Address: address,
      };

      if (address !== userData.Address) {
        updatedUserData.Address = address;
      }

      const response = await axios.put(
        "http://localhost:3000/users",
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(response.data);
      setEditMode(false);
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const dummyPosts = [
    { id: 1, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    { id: 3, title: "Post 3", content: "Content of Post 3" },
  ];

  return (
    <>
      <NavMainpage />
      <div className="container mx-auto px-4 py-8 ">
        <div className="bg-blue-200 shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold">User Profile</h2>
              <p className="text-gray-500">Welcome to your profile</p>
            </div>
            <div className="flex items-center">
              {editMode && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
                  onClick={handleSaveProfile}
                >
                  Save
                </button>
              )}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
                onClick={toggleEditMode}
              >
                {editMode ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </div>

          {userData && (
            <>
              <div className="flex items-center mb-4">
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {editMode ? (
                      <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    ) : (
                      userData.User_Name
                    )}
                  </h3>
                  <p>
                    {editMode ? (
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    ) : (
                      userData.Email
                    )}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Address</h3>
                {editMode ? (
                  <textarea
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Add your address"
                    className="border border-gray-300 rounded-md px-2 py-1 w-full"
                    rows="3"
                  ></textarea>
                ) : (
                  <p>{address || "Add your address"}</p>
                )}
              </div>
            </>
          )}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {dummyPosts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 bg-blue-100 rounded-md p-4"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
