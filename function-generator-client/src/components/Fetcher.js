import React, { useState, useEffect  } from 'react';

function Fetcher(){

    const [results, setResults] = useState('67');
    const url = 'http://localhost:8080/sin';
    useEffect(() => {
        const interval = setInterval(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => setResults(data));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return <div>
        <h1>{results.sin}</h1>
        <h1>{results.cos}</h1>
        <h1>{results.tan}</h1>
        </div>;
}

export default Fetcher;