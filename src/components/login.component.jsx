import axios from "axios";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../styles/style";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    await axios
      .post(
        process.env.REACT_APP_SERVER + "/users/login-user",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("success");
        toast.success("Login success!");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        // toast.error(response.data.message);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold  max-sm:text-2xl text-gray-500 ">
          Login to your account{" "}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
            <div className={`${style.noramlFlex} justify-between`}>
              <div className={`${style.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600  focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900  "
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="https://www.youtube.com/watch?v=XxnUSZOgMLY&list=PLyah27R0n8V4Kcao94Qlt-xJ0bHxZfBjk"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-white text-sm font-medium  rounded-md bg-blue-600 hover:bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className={`${style.noramlFlex} w-full `}>
              <h4>Not have any account?</h4>
              <Link
                to="/sign-up"
                className="text-blue-600 pl-2 hover:text-blue-500 hover:underline "
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
