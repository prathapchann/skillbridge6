import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email,
          password
        }
      );

      localStorage.setItem(
  "token",
  res.data.token
);

localStorage.setItem(
  "skillbridgeUser",
  JSON.stringify({
    email,
    password
  })
);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Email or Password");

      console.log(error);
    }
  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(to right, #111827, #1e293b)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"Arial"
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          width:"380px",
          background:"rgba(255,255,255,0.08)",
          backdropFilter:"blur(10px)",
          padding:"40px",
          borderRadius:"20px",
          display:"flex",
          flexDirection:"column",
          gap:"20px",
          boxShadow:"0 8px 30px rgba(0,0,0,0.3)"
        }}
      >

        <h2
          style={{
            color:"white",
            textAlign:"center"
          }}
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            padding:"14px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
            fontSize:"15px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            padding:"14px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
            fontSize:"15px"
          }}
        />

        <button
          type="submit"
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            padding:"14px",
            borderRadius:"10px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
