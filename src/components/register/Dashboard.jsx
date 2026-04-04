import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("token");

    
    if (!token) {
      navigate("/");
      return;
    }

    axios
      .get("/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMsg(res.data.message);
      })
      .catch(() => {
        
        localStorage.clear();
        navigate("/");
      });
  }, []);

  return (
    <>
      <h1></h1>
    </>
  );
}

export default Dashboard;