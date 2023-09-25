import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowDeteils = () => {
  const alldeteils = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const showDonationDeteils = alldeteils.find(donationdetails => donationdetails.id === intId);
  const { title, img, description, price,button_bg,title_text } = showDonationDeteils;

 const handelDonationBtn = () =>{
    toast.error("Thanks for your Donation", {
        position: "top-center",
        autoClose: 2000,
      });
 }

  return (
    <div className='container mx-auto '>
      <div className="card card-compact  bg-base-100 mx-2 my-10">
        
       
        <div className='relative'>
        <div>
            <img className='h-min w-full rounded-lg' src={img} alt="Shoes" />
          </div>
       
        <div style={{ backgroundColor: button_bg }} className="absolute bottom-0 py-7 w-full bg-opacity-10 bg-black  ">
         
         <button
         onClick={handelDonationBtn}
          style={{ backgroundColor: title_text }} 
          className="btn btn-outline ml-7 py-4 px-7 text-white">Donate ${price}</button>
        
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-5xl font-bold mt-5">{title}</h2>
          <p className="text-sm text-gray-500 mt-5">{description}</p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ShowDeteils;
