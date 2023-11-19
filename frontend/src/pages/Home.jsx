import  { useEffect, useState } from "react";
import { logout } from "../service/api/auth/auth";
import "../../public/css/Home.css";
import Overview from "../components/Home/Overview";
import Navbar from "../components/common/Navbar";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      logout();
    }
  }, [active]);
  return (
      <div className=" min-h-[200vh]">
        <Navbar/>
        <Overview/>
      </div>
  );
};

export default Home;
