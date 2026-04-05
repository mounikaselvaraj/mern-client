import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

function Login({ isOpen, onClose, switchToRegister }) {
   const API = "https://mounikaselvaraj-mern-client.vercel.app";
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`${API}/api/login`, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      window.dispatchEvent(new Event("userChanged")); 
      onClose();
      navigate("/dashboard");
    } catch (err) {
  console.error(err.response?.data || err.message);
  alert(err.response?.data?.message || "Login Failed");
}
  };

  return (
    <div style={modalOverlay}>
      <div style={modalCard}>
        <button onClick={onClose} style={closeBtn}>&times;</button>
        <h2>Login</h2>
<form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-5 mt-6"
>
  <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

  <input
    name="email"
    type="email"
    placeholder="Email"
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
  />

  <input
    name="password"
    type="password"
    placeholder="Password"
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
  />

  <button
    type="submit"
    className="w-full bg-amber-400 text-white py-2 rounded-lg hover:bg-amber-500 transition duration-300"
  >
    Login
  </button>
</form>
        <p>New here? <span onClick={switchToRegister} style={linkStyle}>Register</span></p>
      </div>
    </div>
  );
}


const modalOverlay = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modalCard = { background: 'white', padding: '2rem', borderRadius: '8px', position: 'relative', width: '300px', textAlign: 'center' };
const closeBtn = { position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const linkStyle = { color: 'blue', cursor: 'pointer', textDecoration: 'underline' };

export default Login;
