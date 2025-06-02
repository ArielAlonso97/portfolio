import React from "react";

const ExperienceModule = ({ job }: { job: IJob }) => {
  return (
    <div className="bg-white/5 border my-3 border-white/10 rounded-xl p-6  shadow-white/10 shadow-md transition hover:shadow-white/30 w-[90%] max-w-[700px] m-auto">
      <h1 className="text-white text-2xl font-bold drop-shadow-md mb-2">
        {job.company}
      </h1>
      <h2 className="text-gray-300 text-sm italic mb-1">{job.date}</h2>
      <h3 className="text-white text-lg font-semibold mb-3">{job.position}</h3>
      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
        {Array.isArray(job.tasks) ? (
          job.tasks.map((task, index) => <li key={index}>{task}</li>)
        ) : (
          <li>{job.tasks}</li>
        )}
      </ul>
    </div>
  );
};

export default ExperienceModule;
