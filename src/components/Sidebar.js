import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/grip1.png';
import { RiDashboardLine } from "react-icons/ri";
import './sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
          <img src={logo}/>
          <hr/>
          <Nav className="flex-column">
            <Link to='/'><span><RiDashboardLine/></span>Dashboard</Link>
            <Link to='/users'>Climbers</Link>
            <Link to='/routes'>Routes</Link>
            <Link to='/competitions'>Competitions</Link>
            <Link to='/staff'>Staff Management</Link>
          </Nav>
    </div>
  );
}

export default Sidebar;
