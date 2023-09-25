import { useLoaderData, useParams } from 'react-router-dom';

const ShowDeteils = () => {
  const alldeteils = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const showDonationDeteils = alldeteils.find(donationdetails => donationdetails.id === intId);
  const { title, img, description, price } = showDonationDeteils;

  const imageWrapperStyle = {
    opacity: 0.7, // Adjust the opacity value as needed
  };

  return (
    <div className='container mx-auto '>
      <div className="card card-compact  bg-base-100 mx-10 my-10">
        <div className="hero-overlay bg-opacity-90"></div>
        <figure>
          <div style={imageWrapperStyle}>
            <img className='h-min w-full rounded-lg' src={img} alt="Shoes" />
          </div>
        </figure>
        <div className="">
          <button className="btn btn-primary h-10 w-full">{price}</button>
        </div>
        <div className="card-body">
          <h2 className="card-title text-5xl font-bold mt-5">{title}</h2>
          <p className="text-sm text-gray-500 mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDeteils;
