import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Activation = () => {
  const { activation_token } = useParams();
  console.log(activation_token);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        console.log("server: ", process.env.REACT_APP_SERVER);
        try {
          const res = await axios.post(
            process.env.REACT_APP_SERVER + "/users/activation",
            { activation_token: activation_token }
          );
          console.log(res);
        } catch (error) {
          //console.log(error);
          setError(error.response.data.message);
          console.log(error.response.data.message);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>{error}</p>
      ) : (
        <p>Your account has been created successfully! </p>
      )}
    </div>
  );
};

export default Activation;
