import React from 'react'
import { Link, NavLink } from "react-router";
const Header = () => {
    return (
        <header >
            <nav>
                <div >

                    <div

                    >
                        <ul >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header
