import {NavLink} from 'react-router-dom';
import logo from "../../assets/img/Logo 2.png"


const Navbar = () => {

const navLink = <>
    <li><NavLink  
    
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-semibold text-[#FF444A] border-b-2 border-[#FF444A]" : ""
  }
    
    to={"/"} >Home</NavLink></li>

      <li><NavLink   
      
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "font-semibold text-[#FF444A] border-b-2 border-[#FF444A]" : ""
    }

      to={"/donation"} >Donation</NavLink></li>
      
      <li><NavLink 

  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "font-semibold text-[#FF444A] border-b-2 border-[#FF444A]" : ""
}

    to={"/statistics"} >Statistics</NavLink></li>
</>

    return (
        <div className='container mx-auto mt-5 mb-2 '>
            <div className="flex bg-base-100 items-center mx-3 ">
  <div className="navbar-start mx-5">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
      {navLink}
      </ul>
    </div>
    
 <div className='flex items-center gap-2'>
 
    <img className='w-10 h-10 md:w-auto md:h-auto' src={logo} alt="" />
 
    <div>
 <h3 className=" normal-case text-2xl md:text-4xl font-bold text-[#FF444A]">Donation</h3>
    <p className=" normal-case text-base md:text-xl font-medium ">  C a m p a i g n</p>
    </div>
 </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex gap-5 ">
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