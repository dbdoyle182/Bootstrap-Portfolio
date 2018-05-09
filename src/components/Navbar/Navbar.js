import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/skills'>Skills</Link>
    </div>
)

export default Navbar;