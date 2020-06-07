import React, { useState, useEffect } from 'react';

import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent'

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data)
  }, [])

  console.log(jobs)

  return (
    <div className="App">
      <header className="bg-teal-500 mb-10 p-1">
        <img src={`/images/bg-header-desktop.svg`} alt="background image" />
      </header>
      {jobs.length === 0 ? (
        <p>Fetchings jobs...</p>
      ) : (
          jobs.map(job => (
            <JobBoardComponent job={job} key={job.id} />
          ))
        )}
    </div>
  );
}

export default App;
