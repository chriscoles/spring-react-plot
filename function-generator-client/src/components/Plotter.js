import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const plotData = [{ x: 1654288947458, sin: 0.0 }];

function editData(results, data) {
  const newResults = [...results, data];
  if (newResults.length > 100) {
    newResults.shift();
  }
  return newResults;
}

function Plotter() {
  const [results, setResults] = useState([]);
  const url = "http://localhost:8080/sin";
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setResults((results) => editData(results, data)));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart
      width={400}
      height={200}
      data={results}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sin" stroke="#8884d8" />
      <Line type="monotone" dataKey="cos" stroke="#6684d8" />
    </LineChart>
  );
}

export default Plotter;
