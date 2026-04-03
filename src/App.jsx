import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/register/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/register/Dashboard";
import Hero from "./components/section/Hero";
import Product from "./components/section/Product";
import Cloths from "./components/section/Cloths";
import Featured from "./components/section/Featured";
import Footer from "./components/layout/Footer";
import NewArrivals from "./components/section/NewArrivals";
import TopGadgets from "./components/section/TopGadgets";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/> 
      <Product/>
     <Cloths/>
     <Featured/>
    <NewArrivals/>
    <TopGadgets/>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;