import React, { useEffect, useState } from "react";
import { logout } from "../service/api/auth/auth";
<<<<<<< HEAD
import Navbar from "../layout/Navbar";
import Section from "../layout/Section";
=======
>>>>>>> 72618598a48f01f6e6b83e4f6d6e55726bda6c9a
import "../../public/css/Home.css";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      logout();
    }
  }, [active]);
  return (
    <React.Fragment>
      <div className="home-container">
<<<<<<< HEAD
        <Navbar />
        <Section />
=======
        Home Page
>>>>>>> 72618598a48f01f6e6b83e4f6d6e55726bda6c9a
      </div>
    </React.Fragment>
  );
};

export default Home;
