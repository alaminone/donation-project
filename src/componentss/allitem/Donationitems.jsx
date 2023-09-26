import PropTypes from 'prop-types'
import  { useEffect, useState } from 'react';
import Item from './Item/Item';

const Donationitems = ({ searchQuery }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  
  const filteredItems = items.filter((item) =>
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 mb-10">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};
Donationitems.propTypes = {
    searchQuery: PropTypes.func.isRequired,
  
  };
export default Donationitems;



