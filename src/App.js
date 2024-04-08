import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activation, Login, SignUp } from "./pages";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";

import Store from "./redux/store";
import { ToastContainer } from "react-toastify";

import { loadUser } from "./redux/actions/user";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <h1>Hello</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/activation/:activation_token" element={<Activation />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
