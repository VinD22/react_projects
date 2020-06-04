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
      <h1>Hello!</h1>
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
