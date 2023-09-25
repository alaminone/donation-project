
import PropTypes from 'prop-types'

const DonationDetelis = ({donation}) => {



    const {img,title,category,title_text,card_bg,button_bg,button_text,price} = donation;

  return (
    <div>
        <div style={{ backgroundColor: card_bg }} className="relative flex w-full flex-col-row rounded-xl bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
<div className='pl-5  py-4'>
    <div>
        <h3 className='btn-sm btn' style={{ backgroundColor: button_bg, color: button_text }}>{category}</h3>
      </div>
      <h3 style={{title_text}} className='text-2xl font-semibold mt-2'>
        {title}
      </h3>
      <h2 style={{color:title_text}} className='mt-3'>{price}</h2>
      <button
         
          style={{ backgroundColor: title_text }} 
          className="btn btn-outline py-4 px-7 text-white mt-4">View Details</button>
</div>
   
  </div>
</div>
    
  )
}

DonationDetelis.propTypes = {
    donation:PropTypes.object.isRequired,
   
}

export default DonationDetelis