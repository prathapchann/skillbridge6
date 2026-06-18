import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

function Matches() {

  const [skill, setSkill] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {

    try {

      const res = await axios.get(
        `${API_BASE_URL}/matches/${skill}`
      );

      setUsers(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        Find Skill Partners
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px"
        }}
      >

        <input
          type="text"
          placeholder="Search Skill (React, MongoDB...)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <button
          onClick={searchUsers}
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Search
        </button>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px"
        }}
      >

        {users.map((user) => (

          <div
            key={user._id}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px"
            }}
          >

            <h2>{user.name}</h2>

            <p>
              <strong>Skill Offered:</strong>{" "}
              {user.skillOffered}
            </p>

            <p>
              <strong>Skill Wanted:</strong>{" "}
              {user.skillWanted}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {user.location}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

            <p>
              <strong>Contact:</strong>{" "}
              {user.contactNumber || "Not Available"}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Matches;
