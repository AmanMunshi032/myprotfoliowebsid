import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ useNavigate added
import ProjectCard from "./ProjectCard";

const project = [
  {
    id: 1,
    slug: "ez-rent",
    name: "Ez-Rent Full-Featured rental Platform",
    image: "https://i.ibb.co.com/ksCxyyZg/Screenshot-175.png",
    live: "https://rzrent.web.app/",
    repoClient: "https://github.com/shafee-ullah/EzRent-Client-Side?tab=readme-ov-file",
    repoServer: "https://github.com/shafee-ullah/EzRent-Server-Side",
    stack: [
      "React",
      "Tailwind",
      "Node js",
      "Express js",
      "MongoDB",
      "JWT",
      "Firebase Auth",
      "Stripe",
      "React Router",
      "Framer Motion",
    ],
    description:
      "Ez-Rent is a comprehensive rental management platform that connects property hosts and guests in a seamless ecosystem. Hosts can list, manage, and track properties with real-time analytics, while guests can explore, book, and review rentals with secure payments. Featuring robust dashboards, role-based access, and Stripe integration, Ez-Rent provides a modern and efficient rental experience for both sides.",
    challenges: [
      "Role-Based Access – Designing separate dashboards and permissions for Admin, Host, and Guest users.",
      "Stripe Integration – Handling real-time payments, refunds, and transaction histories securely.",
      "Data Optimization – Managing thousands of listings efficiently using pagination and indexing.",
      "Authentication & Authorization – Implementing Firebase Auth with JWT for enhanced security.",
      "Performance & UX – Maintaining fast loading times while delivering a rich, interactive UI.",
    ],
    improvements: [
      "AI-Powered Recommendations – Suggest rentals based on user history and preferences.",
      "Offline Mode (PWA) – Allow users to view saved data even without internet access.",
      "Advanced Analytics – Provide hosts with booking trends, earnings, and occupancy rates.",
      "Multi-Currency & Localization – Expand usability across regions and support multiple languages.",
      "Chat Integration – Enable real-time communication between hosts and guests.",
    ],
  },
  {
    id: 2,
    slug: "medical-camps",
    name: "Medical Camp Management System",
    image: "https://i.ibb.co.com/vx80m6g1/Screenshot-93.png",
    live: "https://medical-camp-cb4e0.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Freencermarketpalce",
    repoServer: "https://github.com/AmanMunshi032/Delmont-server",
    stack: [
      "Stripe",
      "Recharts",
      "Router",
      "React",
      "Tailwind",
      "Node js",
      "Express js",
      "MongoDB",
      "JWT",
      "Firebase Auth",
      "TanStack Query",
      "DaisyUI",
    ],
    description:
      "The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation of healthcare camps...",
    challenges: [
      "Authentication & Authorization – Implementing secure JWT-based login and role-based access for organizers and participants.",
      "Payment Integration – Ensuring smooth and secure Stripe payment handling for registrations.",
      "Data Management – Handling dynamic camp data, registrations, cancellations, and participant limits efficiently.",
      "UI/UX Consistency – Designing a responsive, user-friendly interface with smooth navigation and interactivity.",
      "Feedback & Rating System – Capturing participant feedback and integrating ratings into camp details for future users.",
    ],
    improvements: [
      "AI-Powered Camp Suggestions – Recommend camps to participants based on health history and preferences.",
      "Multilingual Support – Add multiple language options to make the platform more inclusive.",
      "Advanced Analytics – Provide detailed reports for organizers on attendance, payments, and feedback trends.",
      "Mobile App Integration – Launch Android/iOS apps for easier accessibility and real-time notifications.",
      "Telemedicine Feature – Allow virtual consultations and follow-ups after camp participation.",
    ],
  },
  {
    id: 3,
    slug: "lost-and-found",
    name: "Lost & Found Platform",
    image: "https://i.ibb.co.com/dJ4FJZyj/Screenshot-94.png",
    live: "https://assingment-4494e.web.app/",
    repoClient:
      "https://github.com/AmanMunshi032/Lost-and-Found-web-Application",
    repoServer:
      "https://github.com/AmanMunshi032/Lost-and-Found-Application-server",
    stack: [
      "React",
      "Tailwind",
      "Node js",
      "Express js",
      "MongoDB",
      "JWT",
      "Firebase Auth",
      "TanStack Query",
      "DaisyUI",
    ],
    description:
      "Our Lost & Found Platform is a community-driven solution to help people reconnect with their lost pets and personal belongings...",
    challenges: [
      "Data Management -Handling CRUD operations for lost and found posts effectively.",
      "Authentication & Security  Implementing user login, JWT protection, and safe communication.",
      "Search & Filtering – Allowing users to quickly find pets/items by category, location, and date.",
      "Real-time Updates – Ensuring users get immediate updates when new posts or status changes occur.",
      "User Communication – Building a secure and seamless way for finders and owners to connect.",
    ],
    improvements: [
      "AI-Powered Image Recognition – Match uploaded pet/item photos with existing posts to speed up recovery.",
      "Push Notifications & Alerts – Notify users instantly when a similar pet/item is reported nearby.",
      "Geo-Location Integration – Show nearby lost & found posts on an interactive map for easier tracking.",
      "Multi-Language Support – Make the platform accessible to a wider audience with language options.",
      "Reputation System – Introduce badges or ratings for trusted users who frequently help others.",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate(); // ✅ navigate hook

  useEffect(() => {
    const newData = project.find((single) => single.id == id);
    setData(newData);
  }, [id]);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 md:p-8">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      {/* Project Details Card */}
      <ProjectCard data={data} />
    </div>
  );
};

export default ProjectDetails;
