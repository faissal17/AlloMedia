import "../../public/css/Home.css";
// import StylesHome from "../../public/css/Home.css";
import Overview from "../components/Home/Overview";
import Navbar from "../components/common/Navbar";
import Items from "../components/Home/Items"
import Offres from "../components/Home/Offres";
import offre1 from '../assets/adds1.jpg'
import offre2 from '../assets/adds3.jpg'
import kfc1 from '../assets/kfc2.jpg'
import kfc2 from '../assets/kfc3.png'
import Footer from "./Footer";
import CorporateContainer from "./CorporateContainer";


const Home = () => {

  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Overview />
        <Offres className=' mt-44' offre1={offre1} offre2={offre2} />
        <Items />
        <Offres offre1={kfc1} offre2={kfc2} />
        <Items />
        <CorporateContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
