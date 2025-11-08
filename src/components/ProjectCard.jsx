import React from "react";
import { Link } from "react-router-dom"; // ✅ Correct import

const ProjectCard = ({ data }) => {
  if (!data) return null;
  const {
    repoClient,
    repoServer,
    live,
    improvements,
    challenges,
    stack,
    description,
    name,
    image,
  } = data;

  return (
    <div className="max-w-7xl mx-auto mt-10 border border-gray-200 p-6 md:p-10 rounded-2xl shadow-xl  bg-gray-800 space-y-6">
      {/* ✅ Image Section */}
      <div className="w-full overflow-hidden rounded-xl">
        <img
          className="w-full h-64 md:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
      </div>

      {/* ✅ Project Info */}
      <div className="space-y-5">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{name}</h1>
        <p className="text-white leading-relaxed">{description}</p>

        {/* ✅ Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {stack?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm md:text-base border border-gray-300 rounded-full bg-gradient-to-r from-emerald-100 to-indigo-100 text-gray-800 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ✅ Challenges */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside text-white space-y-1 ml-2">
            {challenges?.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </div>

        {/* ✅ Future Improvements */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Future Improvements
          </h2>
          <ul className="list-disc list-inside text-white space-y-1 ml-2">
            {improvements?.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        </div>

        {/* ✅ Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button className="px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-emerald-500 to-indigo-500 hover:opacity-90 transition">
              Live Project
            </button>
          </a>

          <a href={repoClient} target="_blank" rel="noopener noreferrer">
            <button className="px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition">
              Client Code
            </button>
          </a>

          <a href={repoServer} target="_blank" rel="noopener noreferrer">
            <button className="px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
              Server Code
            </button>
          </a>

          <Link to="/">
            <button className="px-5 py-2.5 rounded-lg border-2 border-gray-400 text-white hover:bg-blue-300 transition">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
