import React, { useState, useEffect } from 'react';

import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent'

function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data)
  }, [])

  const filterFunction = ({ role, level, tools, languages }) => {

    if (filters.length === 0) return true;

    const tags = [role, level, ...tools, ...languages];

    return tags.some(tag => filters.includes(tag))
  }

  let filteredJobs = jobs.filter(filterFunction);

  const handleFilterClick = (tag) => {
    if (filters.includes(tag)) {
    } else {
      setFilters([...filters, tag]);
    }

  }

  const removeFilter = (f) => {
    setFilters(filters.filter((filter) => filter != f));
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="App">
      <header className="bg-teal-500 mb-10 p-1">
        <img src={`/images/bg-header-desktop.svg`} alt="background image" />
      </header>

      {filters.length > 0 && (

        <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
          {
            filters.map((filter) =>
              <span className="m-2 bg-teal-500 p-2 text-teal-100 rounded text-sm cursor-pointer" onClick={() => removeFilter(filter)}> {filter} </span>
            )
          }
          <button className="font-bold text-gray-600 ml-auto" onClick={clearFilters} >Clear Filters</button>
        </div>
      )}

      {jobs.length === 0 ? (
        <p>Fetchings jobs...</p>
      ) : (
          filteredJobs.map(job => (
            <JobBoardComponent job={job} key={job.id} handleFilterClick={handleFilterClick} />
          ))
        )}
    </div>
  );
}

export default App;
