


import PropTypes from 'prop-types'

const Item = ({item}) => {

    const {img,title,category,category_bg,card_bg ,text_button_bg}= item || [];

    const categoryBg = `bg-${category_bg}`;

  return (
    <div>
        <div className={`card card-compact bg-${categoryBg} shadow-xl`}>
  <figure className='h-52 w-full overflow-hidden'><img  src={img} alt="Shoes" /></figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">{title}</h2>
    
    
  </div>
</div>
    </div>
  )
}

Item.propTypes = {
    item:PropTypes.object.isRequired
}

export default Item