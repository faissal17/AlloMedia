import { useEffect, useState } from "react";
import { logout } from "../service/api/auth/auth";
import "../../public/css/Home.css";
import Overview from "../components/Home/Overview";
import Navbar from "../components/common/Navbar";
import Items from "../components/Home/Items"
import Offres from "../components/Home/Offres";
import offre1 from '../assets/adds1.jpg'
import offre2 from '../assets/adds3.jpg'
import kfc1 from '../assets/kfc2.jpg'
import kfc2 from '../assets/kfc3.png'


const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      logout();
    }
  }, [active]);


  return (
    <div className=" min-h-[200vh]">
      <Navbar />
      <Overview />
      <Offres className=' mt-44' offre1={offre1} offre2={offre2} />
      <Items />
      <Offres offre1={kfc1} offre2={kfc2} />
      <Items />
      <p>kjsdjsjkd</p>
    </div>
  );
};

export default Home;
