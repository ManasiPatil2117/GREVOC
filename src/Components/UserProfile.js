import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../motionVarients/motionvarient';
import { itemVariants } from '../motionVarients/motionvarient';
import Chart from 'chart.js/auto';
import Cookies from 'js-cookie';
import { BASE_URL } from '../services/helper';

export default function UserProfile({ currentUserName }) {
  const [currentUser, setCurrentUser] = useState("");
  const [userName, setUserName] = useState("");
  const [chartData, setChartData] = useState([]);
  const [scoreInfo, setScoreInfo] = useState("Your Scoreboard");

  useEffect(() => {
    const cookieValue = Cookies.get('currentUser');
    if (cookieValue) {
      setCurrentUser(cookieValue);
    }

    const fetchData = async () => {

      const response = await fetch(`${BASE_URL}/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUser,
        }),
      });

      const data = await response.json();
      setScoreInfo(data.msg)
      setUserName(data.username);
      if (Object.keys(data).length === 3) {
        var correctAns = data.chartData.reduce(function (tot, arr) {
          return tot + arr.correctAnswers;
        }, 0);

        var wrongAns = data.chartData.reduce(function (tot, arr) {
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
  }, [currentUser]);

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
            <motion.h3 className="font-bold text-xl mb-2 text-center">Hello  {userName}</motion.h3>
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
