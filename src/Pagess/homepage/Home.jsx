
import { useState } from 'react';
import Bannar from '../../componentss/Bannar/Bannar';
import Donationitems from '../../componentss/allitem/Donationitems';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div >
      <Bannar onSearch={setSearchQuery}></Bannar>
      <Donationitems searchQuery={searchQuery}></Donationitems>
    </div>
  );
};

export default Home;


