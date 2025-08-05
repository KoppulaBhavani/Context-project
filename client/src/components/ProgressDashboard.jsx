import React, { useEffect, useState } from "react";
import axios from "axios";

const ProgressDashboard = () => {
  const [data, setData] = useState({
    entries: 0,
    taskPoints: 0,
    revenue: 0,
    allowedBudget: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const revenue = 30000;
      const res = await axios.get(`http://localhost:5000/api/budget/check?revenue=${revenue}`);
      setData({
        entries: 7,
        taskPoints: 54,
        revenue,
        allowedBudget: res.data.allowedBudget
      });
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Progress Dashboard</h2>

      {/* Progress Bars */}
      <div className="space-y-4 mb-6">
        <div>
          <p>330% Goal</p>
          <div className="w-full h-4 bg-gray-200 rounded-md">
            <div className="h-4 bg-blue-500 rounded-md" style={{ width: "70%" }} />
          </div>
        </div>
        <div>
          <p>590% Goal</p>
          <div className="w-full h-4 bg-gray-200 rounded-md">
            <div className="h-4 bg-green-500 rounded-md" style={{ width: "35%" }} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-2 mb-6">
        <p>🎯 Task Points: <strong>{data.taskPoints}</strong></p>
        <p>🎟️ Entries: <strong>{data.entries}</strong></p>
      </div>

      {/* Budget vs Revenue */}
      <div className="border-t pt-4">
        <p>💰 Revenue: ${data.revenue.toLocaleString()}</p>
        <p>🏆 Allowed Budget: <strong>${data.allowedBudget.toLocaleString()}</strong></p>
      </div>
    </div>
  );
};

export default ProgressDashboard;
