import React, { useEffect, useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Bots from "../components/BotsTable";
import axios from "axios";

const Dashboard = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  const getDashboard = async (id: String) => {
    try {
      const res = await axios.post(
        "http://wired66.pythonanywhere.com/dashboard/info/",
        {
          user_id: id,
        }
      );
      console.log(res);
      setUser(res.data.userData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
      getDashboard(storedUserId); // Move the call inside useEffect
    }
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <Sidebar>
      <div className="  grid grid-cols-2 lg:grid-cols-3 gap-4 w-full  mb-12">
        <div className="px-6 shadow-sm flex bg-gray-100  flex-col py-4 rounded-lg text-gray-800">
          <div className="text-2xl font-semibold text-gray-900">
            Muhammad Kashif
          </div>
          <div className="text-sm">kashif@mail.com</div>
          <div className="text-sm">+92 3095203945</div>
          <div className="text-sm">Alia Town Baghbanpura Lahore Pakistan</div>
        </div>
      </div>
      <Bots bots={user?.bot || []} />
    </Sidebar>
  );
};

export default Dashboard;
