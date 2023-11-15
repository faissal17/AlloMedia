import React, { useEffect, useState } from "react";
import { logout } from "../service/api/auth/auth";
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
        Home Page
      </div>
    </React.Fragment>
  );
};

export default Home;
