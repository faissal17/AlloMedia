import React, { useEffect, useState } from "react";
import { logout } from "../service/api/auth/auth";
import "../../public/css/Home.css";
import Overview from "../components/Home/Overview";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      logout();
    }
  }, [active]);
  return (
    <React.Fragment>
      <div className="">
        <Overview/>
      </div>
    </React.Fragment>
  );
};

export default Home;
