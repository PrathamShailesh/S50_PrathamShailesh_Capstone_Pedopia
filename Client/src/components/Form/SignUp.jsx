import React, { useEffect, useState } from "react";
import signupimg from "../../assets/signUp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

function SignUp() {
  const [formData, setFormData] = useState({
    User_Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
      console.error("Password and Confirm Password do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleGoogleSignUpSuccess = async (response) => {
    console.log("Google Sign Up Success:", response);
  };

  const handleGoogleSignUpFailure = (error) => {
    console.error("Google Sign Up Error:", error);
  };
  

  return (
    <div className="max-h-screen flex bg-blue-100">
    <div className="w-1/2 bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-blue-700">
          Create an Account
        </h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="User_Name"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="User_Name"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.User_Name}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.Email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="Password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.Password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.ConfirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
  
            <div className="flex items-center justify-center">
              <div className="text-sm text-gray-600">Or</div>
            </div>
  
            <div className="mt-4">
              <GoogleLogin
                clientId="36387387896-db17jo85e8a0619r5cr4ecgkv2tnp3m3.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={handleGoogleSignUpSuccess}
                onFailure={handleGoogleSignUpFailure}
                cookiePolicy={'single_host_origin'}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <FontAwesomeIcon icon={faGoogle} className="h-6 w-6 mr-2" />
                    Sign up with Google
                  </button>
                )}
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
              </span>
              <Link
                to="/Login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
    <div className="w-1/2 bg-blue-300 flex justify-center items-center">
      {/* You can replace the content below with your logo */}
      <img src={signupimg} alt="Logo" className="mx-auto h-screen" />
    </div>
  </div>
  
  );
}

export default SignUp;
