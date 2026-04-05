import { useState } from "react";
import axios from "axios";

function Register({ isOpen, onClose, switchToLogin }) {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", data);
      alert("Registered successfully!");
      switchToLogin(); 
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={modalOverlay}>
      <div style={modalCard}>
        <button onClick={onClose} style={closeBtn}>&times;</button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <span onClick={switchToLogin} style={linkStyle}>Login</span></p>
      </div>
    </div>
  );
}


const modalOverlay = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modalCard = { background: 'white', padding: '2rem', borderRadius: '8px', position: 'relative', width: '300px', textAlign: 'center' };
const closeBtn = { position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const linkStyle = { color: 'blue', cursor: 'pointer', textDecoration: 'underline' };

export default Register;
