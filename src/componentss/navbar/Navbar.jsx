import {NavLink} from 'react-router-dom';
import logo from "../../assets/img/Logo 2.png"

const Navbar = () => {

  const activeLinkColor = {
    // backgroundColor: "#FF444A",
    textDecoration: "underline",
    textDecorationColor: "#FF444A",
    color: "#FF444A",
  };

const navLink = <>
    <li><NavLink activeStyle={activeLinkColor} to={"/"} >Home</NavLink></li>
      <li><NavLink activeStyle={activeLinkColor} to={"/donation"} activeClassName="active-link-bg">Donation</NavLink></li>
      <li><NavLink activeStyle={activeLinkColor} to={"/statistics"} activeClassName="active-link-bg">Statistics</NavLink></li>
</>

    return (
        <div>
            <div className="flex bg-base-100 container mx-auto mt-5 mb-2 items-center">
  <div className="navbar-start mx-5">
    <div className="dropdown ">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
       {/*  */}
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
    <ul className="menu menu-horizontal px-1">
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