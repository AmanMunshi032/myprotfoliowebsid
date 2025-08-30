import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProjectCard from './ProjectCard';
 const project = [
  {
    id: 1,
    slug: "lost-and-found",
    name: "Lost & Found Platform",
    image:
      "https://i.ibb.co.com/dJ4FJZyj/Screenshot-94.png",
    live: "https://assingment-4494e.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Lost-and-Found-web-Application",
    repoServer:"https://github.com/AmanMunshi032/Lost-and-Found-Application-server",
    stack: ["React", "Tailwind", "Node js", "Express js", "MongoDB", "JWT","Firebase Auth","TanStack Query", "DaisyUI"],
    description:
      "Our Lost & Found Platform is a community-driven solution to help people reconnect with their lost pets and personal belongings. Whether it’s a missing dog, cat, or a misplaced item like phones, bags, or wallets, the platform makes reporting and searching simple and effective. Users can post detailed reports with photos, filter by category or location, and communicate securely with finders or owners. With real-time updates and an easy-to-use interface, the platform increases the chances of recovery. It builds trust, saves time, and ensures that both precious pets and valuable items are reunited with their rightful owners quickly.",
    challenges: [
      "Data Management -Handling CRUD operations for lost and found posts effectively.",
      "Authentication & Security  Implementing user login, JWT protection, and safe communication.",
      "Search & Filtering – Allowing users to quickly find pets/items by category, location, and date.",
      "Real-time Updates – Ensuring users get immediate updates when new posts or status changes occur.",
      "User Communication – Building a secure and seamless way for finders and owners to connect."

    ],
    improvements: [
      "AI-Powered Image Recognition – Match uploaded pet/item photos with existing posts to speed up recovery.",
      "Push Notifications & Alerts – Notify users instantly when a similar pet/item is reported nearby.",
      "Geo-Location Integration – Show nearby lost & found posts on an interactive map for easier tracking.",
      "Multi-Language Support – Make the platform accessible to a wider audience with language options.",
      "Reputation System – Introduce badges or ratings for trusted users who frequently help others."
    ],
  },
   {
    id: 2,
    slug: "medical-camps",
    name: "Medical Camp Management System",
    image:
      "https://i.ibb.co.com/vx80m6g1/Screenshot-93.png",
    live: "https://medical-camp-cb4e0.web.app/",
    repoClient: "https://github.com/AmanMunshi032/Freencermarketpalce",
    repoServer:"https://github.com/AmanMunshi032/Delmont-server",
    stack: [ "Stripe", "Recharts","Router","React", "Tailwind", "Node js", "Express js", "MongoDB", "JWT","Firebase Auth","TanStack Query", "DaisyUI" ],
    description:
     "The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation of healthcare camps. It allows organizers to create and manage camps by adding details such as date, time, location, healthcare professionals, fees, and participant capacity. Participants can browse available camps, register, make secure payments, and provide feedback after attending. The system includes authentication, JWT-protected routes, dynamic dashboards, and real-time participant tracking. With integrated Stripe payments, responsive design, and interactive charts, MCMS ensures smooth coordination between organizers and participants while promoting accessibility, efficiency, and improved healthcare outreach.",
    challenges: [
      "Authentication & Authorization – Implementing secure JWT-based login and role-based access for organizers and participants.",
      "Payment Integration – Ensuring smooth and secure Stripe payment handling for registrations.",
      "Data Management – Handling dynamic camp data, registrations, cancellations, and participant limits efficiently.",
      "UI/UX Consistency – Designing a responsive, user-friendly interface with smooth navigation and interactivity.",
      "Feedback & Rating System – Capturing participant feedback and integrating ratings into camp details for future users."
    ],
    improvements: [
      "AI-Powered Camp Suggestions – Recommend camps to participants based on health history and preferences.",
      "Multilingual Support – Add multiple language options to make the platform more inclusive.",
      "Advanced Analytics – Provide detailed reports for organizers on attendance, payments, and feedback trends.",
      "Mobile App Integration – Launch Android/iOS apps for easier accessibility and real-time notifications.",
      "Telemedicine Feature – Allow virtual consultations and follow-ups after camp participation."
      
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
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Firebase","DaisyUI"],
    description:
      "The Freelance Task Marketplace is a full-stack web platform designed to connect clients with skilled freelancers worldwide. Clients can easily post tasks or projects, set budgets, and receive bids from freelancers across various categories such as web development, design, writing, and marketing. Freelancers can showcase their skills, submit proposals, and manage ongoing projects through personalized dashboards. The system supports secure authentication, escrow-style payments via Stripe, and role-based access for clients and freelancers. With features like bidding, task tracking, and payment protection, the platform ensures transparency, trust, and efficiency for both parties, creating a seamless freelancing experience.",
    challenges: [
      "Designing a Secure Bidding & Proposal System – Ensuring that freelancers can place bids fairly without manipulation while protecting client project details was a big challenge.",
      "Implementing Escrow-Style Payment with Stripe – Handling payments securely was complex because funds needed to be held until the project was completed.",
      "Role-Based Dashboards for Clients & Freelancers – Creating two distinct dashboards with different features, permissions, and analytics was challenging.",
      "Real-Time Communication Between Users – Building a chat or messaging system that works instantly between clients and freelancers was difficult. ",
      "Advanced Search & Skill Matching – Making the platform user-friendly required implementing smart search and filtering across tasks, freelancers, and categories. "
    ],
    improvements: [
      "AI-Powered Skill Matching – Implement AI algorithms to suggest the best freelancers for a client’s task based on skills, ratings, and past performance.",
      "Mobile App Integration – Launch dedicated mobile apps for Android and iOS to allow freelancers and clients to manage tasks on the go.",
      "Review & Rating System – Add detailed reviews and ratings after project completion to build trust and credibility between users.",
      "Real-Time Notifications – Introduce instant alerts for bids, messages, payments, and project updates using WebSockets or Firebase.",
      "Dispute Resolution System – Provide an integrated dispute management feature to resolve conflicts fairly between clients and freelancers."
    ],
  },
   
];
const Projectditels = () => {
 const {id}=useParams()
  const[data,setdata]=useState()
  useEffect(()=>{
    const  newdata = project.find((singleditels)=>singleditels.id ==id)
    
     setdata(newdata)
  },[id, project])
//    console.log(data)
    return (
        <div>
         <ProjectCard data={data}></ProjectCard>
        </div>
    );
};

export default Projectditels;