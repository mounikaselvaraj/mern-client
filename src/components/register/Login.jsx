import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ isOpen, onClose, switchToRegister }) {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", data);
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
        <form onSubmit={handleSubmit} style={formStyle}>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
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
