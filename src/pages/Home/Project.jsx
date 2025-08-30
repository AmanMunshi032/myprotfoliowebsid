import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { Element } from "react-scroll";
  import { motion } from "motion/react"
const project = [
  {
    id: 1,
    slug: "lost-and-found",
    name: "Lost & Found Platform",
    image:
      "https://i.ibb.co.com/dJ4FJZyj/Screenshot-94.png",
    live: "https://assingment-4494e.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Lost-and-Found-web-Application",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A full-stack platform where users can post lost or found items with images, location, and contact details.",
    challenges: [
      "Designing a scalable data model for items and users",
      "Implementing secure auth and protected routes",
      "Handling image uploads and responsive UI",
    ],
    improvements: [
      "Add real-time notifications",
      "Integrate image moderation",
      "Implement advanced search and filters",
    ],
  },
  {
    id: 2,
    slug: "medical-camps",
    name: "Medical Camp Management System",
    image:
      "https://i.ibb.co.com/vx80m6g1/Screenshot-93.png",
    live: "https://medical-camp-cb4e0.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Delmont",
    stack: ["MERN", "Stripe", "Recharts", "JWT"],
    description:
      "Manage camps, registrations, payments, feedback, and dashboards for organizers and participants.",
    challenges: [
      "Complex role-based dashboards",
      "Seamless Stripe integration and webhooks",
      "Pagination, search, and performance tuning",
    ],
    improvements: [
      "PWA offline mode",
      "Exportable reports",
      "Audit logs and admin insights",
    ],
  },
   {
    id: 3,
    slug: "freelance-marketplace",
    name: "Freelance Task Marketplace",
    image:
      "https://i.ibb.co.com/c546D76/Screenshot-102.png",
    live: "https://freelancer-marketplase.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Freencermarketpalce",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    description:
      "A full-featured marketplace where clients can post tasks, freelancers can bid, and payments are handled securely.",
    challenges: [
      "Building a secure bidding and proposal system",
      "Role-based dashboards for clients and freelancers",
      "Integrating escrow-style payment with Stripe",
    ],
    improvements: [
      "Real-time chat between clients and freelancers",
      "AI-based skill matching",
      "Mobile app version for freelancers on the go",
    ],
  },
   
];
const Project = () => {
  return (
    <Element name="Project">
      <div className="bg-gray-800">
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-5xl font-bold text-center "> MY Projects</h2>
          < div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 " 
            
          >
            {project.map((item) => (
              <motion.div className="bg-white  rounded-xl shadow overflow-hidden flex flex-col " >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-46 w-full object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-black">{item.name}</h3>
                  <p className="mt-2 mb-2 text-sm text-gray-600 flex-1">
                    {item.description}
                  </p>

                  <div className="space-x-2">
                    <button className=" px-2 rounded-md py-1 bg-gradient-to-r from-emerald-500 to-indigo-500 ">
                      {item.stack[0]}
                    </button>
                    <button className=" px-2 rounded-md py-1 bg-gradient-to-r from-emerald-500 to-indigo-500 ">
                      {item.stack[1]}
                    </button>
                    <button className=" px-2 rounded-md py-1 bg-gradient-to-r from-emerald-500 to-indigo-500 ">
                      {item.stack[2]}
                    </button>
                    <button className=" px-2 rounded-md py-1 bg-gradient-to-r from-emerald-500 to-indigo-500 ">
                      {item.stack[3]}
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={`/Projectditels/${item.id}`}> <button
                      className="btn border-0 bg-linear-to-r from-emerald-500 to-indigo-500" >
                      view ditels
                    </button> </Link>
                    <a href={item.live}>   <button className="text-black px-3 py-2 border-2 rounded-lg font-bold">Live links</button></a>
                      
                        <div className="text-xs px-5 py-2 gap-2 rounded-lg bg-black items-center flex">
                      <FaGithub size={24} />
                    <a href={item. repoClient}> 
                      <button className=" text-amber-50 text-lg ">
                      code
                      </button>
                      </a> 
                    </div>
                      
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Project;
