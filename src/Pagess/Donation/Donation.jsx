import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonationDetelis } from "../../utiliti/localstroge";
import DonationDetelis from "../../componentss/donationDeteild/DonationDetelis";

const Donation = () => {
  const donation = useLoaderData();
  const [donationDetels, setdonationDetels] = useState([]);
  const [isShow, setIsShow]= useState(false);

  useEffect(() => {
    const storedonationId = getStoreDonationDetelis();
    if ((donation)) {
      const donate = donation.filter((donation) =>
        storedonationId.includes(donation.id)
      );
      console.log(donate);
      setdonationDetels(donate);
    }
  }, [donation]); 

  return (
    <div className="container mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-3 gap-4 mt-10">
     { 
     isShow ? donationDetels?.map((donation) => (
        <DonationDetelis 
        key={donation.id} 
        donation={donation}></DonationDetelis>
      ))
      :
      donationDetels?.slice(0,4).map((donation) => (
        <DonationDetelis 
        key={donation.id} 
        
        donation={donation}></DonationDetelis>
      ))
    }
     </div>
    <div className="flex justify-end my-7">
    <button className="btn btn-outline  bg-[#FF444A] text-white " onClick={()=>setIsShow(!isShow)}>show all</button>
    </div>
    </div>
  );
};

export default Donation;
