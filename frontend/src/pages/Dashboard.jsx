// import React from 'react'
import React, { useState } from "react";
import "../../public/css/Dashboard.css";
import Restaurant from "./Restaurant";

function Dashboard() {
  const [query, setQuery] = useState("");
  const links = [
    "Brand Name",
    "Dashboard",
    "Customers",
    "Messages",
    "Help",
    "Settings",
    "Password",
    "Sign Out",
  ];
  const [activeLink, setActiveLink] = useState(links.indexOf("Dashboard"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const icons = {
    "Brand Name": "home-outline",
    Dashboard: "grid-outline",
    Customers: "people-outline",
    Messages: "chatbubble-ellipses-outline",
    Help: "help-circle-outline",
    Settings: "settings-outline",
    Password: "key-outline",
    "Sign Out": "log-out-outline",
  };

  const handleClick = (index) => {
    setActiveLink(index);
    console.log(`Link ${index} clicked`);
    // Add your click handling logic here
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !dropdownOpen);
  };

  return (
    <div>
      <div className={`navigation ${menuActive ? "active" : ""}`}>
        <ul>
          {links.map((link, index) => (
            <li
              key={link}
              className={index === activeLink ? "hovered" : ""}
              onClick={() => handleClick(index)}
              onKeyDown={() => handleClick(index)}
              tabIndex="0"
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name={icons[link]}></ion-icon>
                </span>
                <span className="title">{link}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`main ${menuActive ? "active" : ""}`}>
        {/* Main content here */}
        <div className="topbar">
          <div
            className="toggle"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            tabIndex="0"
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div className="search">
            <label>
              <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setQuery(e.target.value)}
              />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className="grid grid-cols-2">
            <div
              className="relative inline-block text-left"
              onClick={toggleDropdown}
              onKeyDown={toggleDropdown}
              tabIndex="0"
            >
              <div className="flex items-center cursor-pointer">
                <img
                  className="rounded-full h-10 w-10"
                  src="../../public/imgs/customer01.jpg"
                  alt=""
                />

                <span className="username ml-2">Username</span>
              </div>
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <ion-icon name="person-outline" class="mr-2"></ion-icon>
                      Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <ion-icon name="settings-outline" class="mr-2"></ion-icon>
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      <ion-icon name="log-out-outline" class="mr-2"></ion-icon>
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Restaurant />
      </div>
    </div>
  );
}

export default Dashboard;
