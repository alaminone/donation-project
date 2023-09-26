import { PieChart, Pie } from 'recharts';
import { useEffect, useState } from 'react';
import { getStoreDonationDetelis } from '../../utiliti/localstroge';

const PieCharts = () => {
  const [average, setAverage] = useState([]);
  const [totalValue, setTotalValue] = useState([]);
  const [total, setTotal] = useState(12); 

  useEffect(() => {
    const localData = getStoreDonationDetelis();
    const totalDonations = localData.length;

    

    setTotal(totalDonations);

    const averageDonation = (totalDonations / total) * 100;
    const remainingAverage = 100 - averageDonation;

    setTotalValue(remainingAverage);
    setAverage(averageDonation);
  }, []);

  const pieChartData = [
    { name: 'Total Donation', value: totalValue, fill: '#0088FE' },
    { name: 'My Donation', value: average, fill: '#00C49F' }, 
  ];

  return (
    <div className='p-20'>
      <PieChart width={400} height={500}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          
          
          label
        />
      </PieChart>
    </div>
  );
};

export default PieCharts;
