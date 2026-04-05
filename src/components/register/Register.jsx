  import { useState } from "react";
  import axios from "axios";
  
 
  function Register({ isOpen, onClose, switchToLogin }) {
 
    const [data, setData] = useState({ username: "", email: "", password: "" });

    if (!isOpen) return null;

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("clicked register");
      try {
        await axios.post(" https://mern-client-1-47da.onrender.com/api/register", data);
        console.log(data);
        alert("Registered successfully!");
        switchToLogin(); 
      } 
      
      catch (err) {
  console.log("ERROR:", err.response || err);
  alert("Registration failed");
}
    };

    return (
      <div style={modalOverlay}>
        <div style={modalCard}>
          <button onClick={onClose} style={closeBtn}>&times;</button>
          <h2>Register</h2>
<form
  onSubmit={handleSubmit}
  className="w-full mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8"
>
  <h2 className="text-2xl font-bold text-center text-gray-700">Create Account</h2>

  <input
    name="username"
    placeholder="Username"
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
  />

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
    Register
  </button>
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
