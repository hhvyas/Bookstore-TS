import React from "react";
import '../../App.css'
import { NavLink } from "react-router-dom";

function Navbar(): JSX.Element {
  return (
    <header>
      <nav>
        <NavLink className='nav-bookstore-logo' to="/">
          <div className="nav-logo">Bookstore</div>
        </NavLink>
        <NavLink to='/add-book' className='nav-bookstore-add-book'>
          <div className="nav-logo">Add book</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
