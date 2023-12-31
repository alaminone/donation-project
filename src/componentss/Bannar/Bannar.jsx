import { useState } from "react";
import PropTypes from 'prop-types'



const Bannar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
    
  };
    return (
        <div>
           
            <div className="hero min-h-[35vh] md:min-h-[60vh] lg:min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/982Jprg/katt-yukawa-K0-E6-E0a0-R3-A-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-90 bg-white"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" justify-center items-center">
      <h1 className="mb-5 text-4xl md:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
      {/*  */}
      <div className="flex justify-center text-black">
      <div className="flex w-72 flex-col items-end gap-6">
  <div className="relative h-10 w-full min-w-[200px] flex">
    <input
     type="text"
     value={searchQuery}
     onChange={(e) => setSearchQuery(e.target.value)}
      
      className=" !bg-gray-50 peer h-full w-full rounded-lg rounded-r-none border-solid-black border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A]peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#FF444A] peer-focus:after:border-t-2  peer-focus:after:border-[#FF444A] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Search here..
    </label>
  
   <button onClick={handleSearch}  className="bg-[#FF444A] text-white rounded-lg px-4 rounded-l-none btn-secondary">Search</button>
   
  
    
  </div>
  
</div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};
Bannar.propTypes = {
  onSearch: PropTypes.func.isRequired,

};

export default Bannar;