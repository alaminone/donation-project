import { useEffect, useState, useRef } from "react";
import { getStoreDonationDetelis } from "../../utiliti/localstroge";
import { useLoaderData } from "react-router-dom";
import Chart from "chart.js"; // Import the Chart object

const Statistics = () => {
  const storedDonationIds = getStoreDonationDetelis();
  const totalDonations = storedDonationIds.length;

  const StatisticsData = useLoaderData();
  const [yourDonations, setYourDonations] = useState(0);
  const [chart, setChart] = useState(null); // Keep track of the chart instance.
  const chartRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // Update yourDonations based on StatisticsData.
    const newYourDonations = StatisticsData.filter((data) => data.isYours).length;
    setYourDonations(newYourDonations);

    // Destroy the existing chart if it exists.
    if (chart) {
      chart.destroy();
    }

    // Create a new chart.
    const data = {
      labels: ["Your Donations", "Other Donations"],
      datasets: [
        {
          data: [newYourDonations, totalDonations - newYourDonations],
          backgroundColor: ["#FF444A", "#E5E7EB"],
        },
      ],
    };

    const ctx = chartRef.current.getContext("2d"); // Use chartRef to get the canvas
    const newChart = new Chart(ctx, {
      type: "pie",
      data: data,
    });

    setChart(newChart);
  }, [StatisticsData, totalDonations, chart]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Donation Statistics</h1>
      <div className="flex justify-center">
        <div style={{ width: "300px" }}>
          <canvas ref={chartRef}></canvas> {/* Use ref to reference the canvas */}
          <p className="text-center mt-2">
            Your donations account for {((yourDonations / totalDonations) * 100).toFixed(2)}% of total donations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
