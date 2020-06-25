import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/grip1.png';
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FaRoute } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";

import './sidebar.scss';


function Sidebar() {
  return (
    <div className='sidebar'>
          <img src={logo}/>
          <hr/>
          <Nav className="flex-column">
            <Link to='/'><span><RiDashboardLine/></span>Dashboard</Link>
            <Link to='/users'><span><AiOutlineUser/></span>Climbers</Link>
            <Link to='/routes'><span><FaRoute/></span>Routes</Link>
            <Link to='/competitions'><span><GiPodiumWinner/></span>Competitions</Link>
            <Link to='/staff'><span><BsPeople/></span>Staff Management</Link>
          </Nav>
    </div>
  );
}

export default Sidebar;
