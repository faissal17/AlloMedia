// import React from 'react'
import React, { useEffect, useState } from 'react';
import '../../public/css/Dashboard.css'
import { IoIosNotifications } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import io from 'socket.io-client'
const socket=io.connect("http://localhost:5000")

function Dashboard() {
    const links = ["Brand Name", "Dashboard", "Customers", "Messages", "Help", "Settings", "Password", "Sign Out"];
    const [activeLink, setActiveLink] = useState(links.indexOf("Dashboard"));
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [notification,setNotification]=useState(0)



    const icons = {
        "Brand Name": "home-outline",
        "Dashboard": "grid-outline",
        "Customers": "people-outline",
        "Messages": "chatbubble-ellipses-outline",
        "Help": "help-circle-outline",
        "Settings": "settings-outline",
        "Password": "key-outline",
        "Sign Out": "log-out-outline"
    };


    const handleClick = (index) => {
        setActiveLink(index);
        console.log(`Link ${index} clicked`);
        // Add your click handling logic here
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !dropdownOpen);
    }

    useEffect(()=>{
        socket.on("getNotification", (data) => {
            console.log('fuck notif')
            console.log(data)
          });
    },[socket])


    return (
        <div>
            <div className={`navigation ${menuActive ? 'active' : ''}`}>
                <ul>
                    {links.map((link, index) => (
                        <li key={link} className={index === activeLink ? 'hovered' : ''} onClick={() => handleClick(index)} onKeyDown={() => handleClick(index)} tabIndex="0">
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
            <div className={`main ${menuActive ? 'active' : ''}`}>
                {/* Main content here */}
                <div className='topbar shadow-sm'>
                    <div className="toggle" onClick={toggleMenu} onKeyDown={toggleMenu} tabIndex="0">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    <div className=" flex  gap-3 items-center pr-4">
                        <div className=' relative w-9 h-9'>
                            <span 
                                className='
                                    absolute right-1 z-20 top-0 w-[16px] h-[16px] bg-red-500 rounded-full text-[10px] 
                                    font-semibold text-white flex justify-center items-center'>
                                        {notification}
                            </span>
                            <span>
                                <IoIosNotifications 
                                    className=' w-9 h-9 text-gray-300' 
                                />
                            </span>
                        </div>
                        <span className='w-8 h-8'>
                            <FaSun
                                className='  w-7 h-7 text-gray-300' 
                            />
                        </span>
                        <div className="relative inline-block text-left" onClick={toggleDropdown} onKeyDown={toggleDropdown} tabIndex="0">
                            <div className='flex items-center cursor-pointer'>
                                <img className="rounded-full h-10 w-10" src="../../public/imgs/customer01.jpg" alt="" />
                            </div>
                            {dropdownOpen && (
                                <div className="origin-top-right absolute  right-[16px]  mt-2 w-[100px] rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                            <ion-icon name="person-outline" class="mr-2"></ion-icon>Profile
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                            <ion-icon name="settings-outline" class="mr-2"></ion-icon>Settings
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                            <ion-icon name="log-out-outline" class="mr-2"></ion-icon>Logout
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard