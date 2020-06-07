import React from 'react'

const JobBoardComponent = ({ job }) => {

    //const languagesAndTools = [...job.languages, ...job.tools];

    const languagesAndTools = [job.role, job.level, ...job.languages, ...job.tools];

    console.log(languagesAndTools);

    return (
        <div className={`flex bg-white shadow-md m-4 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'}`}>
            <div>
                <img src={job.logo} alt={job.company} />
            </div>
            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-bold  text-teal-500">
                    {job.company}
                    {job.new && (<span className="ml-2 bg-gray-800 text-white p-2 rounded-full">New</span>)}
                    {job.featured && (<span className="ml-2 text-gray-800 bg-gray-200 p-2 rounded-full">Featured</span>)}
                </h3>
                <h2 className="font-bold text-lg">{job.position}</h2>
                <p className="text-gray-700">{job.postedAt} · {job.contract} · {job.location}</p>
            </div>
            <div className="flex items-center ml-auto">
                {languagesAndTools.map((lnt, index) => <span key={index} className="text-teal-500 bg-teal-100 font-bold m-1 p-2 rounded leading-3"> {lnt} </span>)}
            </div>
        </div>
    )
}

export default JobBoardComponent; 