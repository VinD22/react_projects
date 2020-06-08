import React from 'react'

const JobBoardComponent = ({ job }) => {

    //const languagesAndTools = [...job.languages, ...job.tools];

    const languagesAndTools = [job.role, job.level, ...job.languages, ...job.tools];

    console.log(languagesAndTools);

    return (
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'} sm:flex-row`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:my-0" src={job.logo} alt={job.company} />
            </div>
            <div className="ml-4  flex flex-col justify-between">
                <h3 className="font-bold  text-teal-500">
                    {job.company}
                    {job.new && (<span className="ml-2 bg-gray-800 text-white p-2 rounded-full uppercase text-sm">New</span>)}
                    {job.featured && (<span className="ml-2 text-gray-800 bg-gray-200 p-2 rounded-full uppercase text-sm">Featured</span>)}
                </h3>
                <h2 className="font-bold text-lg my-2">{job.position}</h2>
                <p className="text-gray-700">{job.postedAt} · {job.contract} · {job.location}</p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 ">
                {languagesAndTools.map((lnt, index) => <span key={index} className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded leading-3 sm:mb-0"> {lnt} </span>)}
            </div>
        </div>
    )
}

export default JobBoardComponent; 