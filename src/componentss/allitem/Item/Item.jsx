import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {
  const { img, category, title, button_bg, card_bg, button_text, title_text } = item || {};

  return (
    <NavLink to={`/deteils/${item.id}`}>  <div className='card card-compact shadow-xl' style={{ backgroundColor: card_bg }}>
    <figure className='h-52 w-full overflow-hidden'><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <div>
        <h3 className='btn-sm btn' style={{ backgroundColor: button_bg, color: button_text }}>{category}</h3>
      </div>
      <h2 className='card-title' style={{ color: title_text }}>{title}</h2>
    </div>
  </div>
  </NavLink>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;







// import PropTypes from 'prop-types'

// const Item = ({item}) => {

//     const {img,title,category,category_bg,card_bg ,text_button_bg}= item || [];

//     const categoryBg = `${category_bg}`;
//     const textColor = `${text_button_bg}`;
//     const cardBg = `${card_bg}`

//   return (
//     <div>
//         <div className={`card card-compact bg-${categoryBg} shadow-xl`}>
//   <figure className='h-52 w-full overflow-hidden'><img  src={img} alt="Shoes" /></figure>
//   <div className="card-body">
//    <div>
//    <h3 className={`btn-sm btn bg-${cardBg}`} >{category}</h3>
//    </div>
//     <h2 className={`card-title text-${textColor}`}>{title}</h2>
   
    
    
//   </div>
// </div>
//     </div>
//   )
// }

// Item.propTypes = {
//     item:PropTypes.object.isRequired
// }

// export default Item