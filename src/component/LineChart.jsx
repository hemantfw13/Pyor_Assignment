import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import './Line.css';

const LineChart = ({ selectedCoin }) => {
  const [chartData, setChartData] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=365&interval=daily`
        );
        setChartData(response.data.prices);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCoin]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`;
  };

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(zoomLevel + 0.2);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.2) {
      setZoomLevel(zoomLevel - 0.2);
    }
  };

  const option = {
    xAxis: {
      type: 'category',
      data: chartData.map((data) => formatTimestamp(data[0])),
      axisLabel: {
        interval: Math.floor(30 / zoomLevel), 
        rotate: 45,
      },
    },
    yAxis: {
      type: 'value',
     
    },
    series: [
      {
        data: chartData.map((data) => data[1]),
        type: 'line',
        
      },
    ],
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          title: 'Save Chart',
          pixelRatio: 2, 
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <div className="chart-title">Price Chart for {selectedCoin}</div>
      <div className="chart-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <ReactECharts className="echarts-for-react" option={option} />
    </div>
  );
};

export default LineChart;
