import { PieChart, Pie, Legend } from 'recharts';
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
    { name: 'Donation', value: totalValue, fill: '#0052FF' },
    { name: 'Your Donation', value: average, fill: '#FF444A' }, 
  ];

  return (
    <div className='mb-10'>
      <PieChart width={400} height={500}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          label
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieCharts;
