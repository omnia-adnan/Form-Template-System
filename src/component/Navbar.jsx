import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Form">Adding Stuffs</Link>
                </li>
                <li>
                    <Link to="/Table">Table Stuffs</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;