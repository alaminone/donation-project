import {NavLink} from 'react-router-dom';
import logo from "../../assets/img/Logo 2.png"
import { useState } from 'react';

const Navbar = () => {

  const [active , setActive]= useState("home")

  // const activeLinkColor = {
  //   // backgroundColor: "#FF444A",
  //   textDecoration: "underline",
  //   textDecorationColor: "#FF444A",
  //   color: "#FF444A",
  // };

const navLink = <>
    <li><NavLink onClick={()=>setActive("home")} className={`${active=="home" ? "text-red-500  border-b-2 border-red-500":" "}`}  to={"/"} >Home</NavLink></li>

      <li><NavLink onClick={()=>setActive("donation")} className={`${active=="donation" ? "text-red-500  border-b-2 border-red-500":" "}`}  to={"/donation"} >Donation</NavLink></li>
      
      <li><NavLink onClick={()=>setActive("statistics")} className={`${active=="statistics" ? "text-red-500 border-b-2 border-red-500":" "}`}  to={"/statistics"} >Statistics</NavLink></li>
</>

    return (
        <div>
            <div className="flex bg-base-100 container mx-auto mt-5 mb-2 items-center">
  <div className="navbar-start mx-5">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
      {navLink}
      </ul>
    </div>
    
 <div className='flex gap-2'>
 
    <img src={logo} alt="" />
 
    <div>
 <h3 className=" normal-case text-4xl font-bold text-[#FF444A]">Donation</h3>
    <p className=" normal-case text-xl font-medium ">  C a m p a i g n</p>
    </div>
 </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex gap-5">
     {/*  */}
     {navLink}
    </ul>
  </div>
  <div className="">
    
  </div>
</div>
        </div>
    );
};

export default Navbar;