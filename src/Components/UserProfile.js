import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../motionVarients/motionvarient';
import { itemVariants } from '../motionVarients/motionvarient';
import Chart from 'chart.js/auto';


export default function UserProfile({ currentUser }) {
  const [chartData, setChartData] = useState([]);
  const [scoreInfo, setScoreInfo] = useState("Your Scoreboard");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUser,
        }),
      });


      const data = await response.json();
      if (data == -1) {
        setScoreInfo("We're sorry, but we were unable to locate any score data for your account. Please take a test to view your score")
      } else {

        var correctAns = data.reduce(function (tot, arr) {
          return tot + arr.correctAnswers;

        }, 0);

        var wrongAns = data.reduce(function (tot, arr) {
          return tot + arr.wrongAnswers;
        }, 0);

        setChartData([
          {
            label: 'Correct Answers',
            value: correctAns,
            color: 'green'
          },
          {
            label: 'Wrong Answers',
            value: wrongAns,
            color: 'red'
          }
        ]);
      };
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {

      const ctx = document.getElementById('myChart').getContext('2d');
      const chartInstance = Chart.getChart(ctx);
      if (chartInstance && chartInstance.destroy) {
        chartInstance.destroy();
      }

      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: chartData.map(item => item.label),
          datasets: [{
            data: chartData.map(item => item.value),
            backgroundColor: chartData.map(item => item.color)
          }]
        }
      });
    }
  }, [chartData]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="bg-gray-100 py-10 px-1 sm:px-6 lg:px-8 h-screen">
        <motion.div className="bg-white shadow-md rounded-lg overflow-hidden lg:mr-20 lg:ml-20 lg:mt-20 m-4 " variants={itemVariants}>
          <div className="p-4 m-8">
            <motion.h3 className="font-bold text-xl mba-2 text-center">Hello {currentUser}</motion.h3>
            <motion.p className="text-gray-700 text-base text-center mt-5" id="info">
              {scoreInfo} 
            </motion.p>
            <div className='w-96 m-auto'>
              <canvas id="myChart" ></canvas>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
