import { useState } from "react";
import axios from "axios";

function Dashboard() {
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://skillbridge6.onrender.com/api/users";

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [contactNumber, setContactNumber] = useState("");
const [skillOffered, setSkillOffered] = useState("");
const [skillWanted, setSkillWanted] = useState("");
const [location, setLocation] = useState("");
const [bio, setBio] = useState("");

const handleSubmit = async (e) => {


e.preventDefault();

if (
  !name ||
  !email ||
  !password ||
  !contactNumber ||
  !skillOffered ||
  !skillWanted ||
  !location ||
  !bio
) {
  alert("Please fill all fields");
  return;
}

try {

  await axios.post(
    `${API_BASE_URL}/register`,
    {
      name,
      email,
      password,
      contactNumber,
      skillOffered,
      skillWanted,
      location,
      bio
    }
  );

  alert("Profile Saved Successfully");

  setName("");
  setEmail("");
  setPassword("");
  setContactNumber("");
  setSkillOffered("");
  setSkillWanted("");
  setLocation("");
  setBio("");

} catch (error) {

  console.log(error);

  alert("Error Saving Profile");
}


};

return (
<div
style={{
minHeight: "100vh",
background: "linear-gradient(to right, #0f172a, #1e293b)",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "30px",
fontFamily: "Arial"
}}
>


  <form
    onSubmit={handleSubmit}
    style={{
      width: "550px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(10px)",
      padding: "40px",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
    }}
  >

    <h2
      style={{
        color: "white",
        textAlign: "center"
      }}
    >
      SkillBridge Dashboard
    </h2>

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={inputStyle}
    />

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={inputStyle}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Contact Number"
      value={contactNumber}
      onChange={(e) => setContactNumber(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Skill Offered"
      value={skillOffered}
      onChange={(e) => setSkillOffered(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Skill Wanted"
      value={skillWanted}
      onChange={(e) => setSkillWanted(e.target.value)}
      style={inputStyle}
    />

    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      style={inputStyle}
    />

    <textarea
      placeholder="Tell something about yourself..."
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      style={{
        ...inputStyle,
        minHeight: "100px",
        resize: "none"
      }}
    />

    <button
      type="submit"
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "14px",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Save Profile
    </button>

  </form>

</div>


);
}

const inputStyle = {
padding: "14px",
borderRadius: "10px",
border: "none",
outline: "none",
fontSize: "15px"
};

export default Dashboard;
