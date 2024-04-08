import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import style from "../styles/style";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";

import { toast } from "react-toastify";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("server: ", process.env.REACT_APP_SERVER);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(
        process.env.REACT_APP_SERVER + "/users/create-user",
        newForm,
        config
      )
      .then((res) => {
        console.log(res);
        setEmail("");
        setName("");
        setPassword("");
        setAvatar(null);
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        console.log(response.data.message);
        setEmail("");
        setName("");
        setPassword("");
        setAvatar(null);
      });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setAvatar(file);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold  max-sm:text-2xl text-gray-500 ">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Fullname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="fullname"
                  autoComplete="fullanme"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  "
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
              <div className="mt-1 relative ">
                <input
                  type={`${visible ? "text" : "password"}`}
                  name="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  "
                />
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setVisible((prev) => !prev)}
                >
                  {visible ? (
                    <IoEyeOutline size={25} />
                  ) : (
                    <IoEyeOffOutline size={25} />
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-full w-full object-cover rounded-full" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
                >
                  <span>Upload a image</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-white text-sm font-medium  rounded-md bg-blue-600 hover:bg-blue-500"
              >
                Submit
              </button>
            </div>
            <div className={`${style.noramlFlex} w-full `}>
              <h4>You'v already had an account?</h4>
              <Link
                to="/login"
                className="text-blue-600 pl-2 hover:text-blue-500 hover:underline "
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
