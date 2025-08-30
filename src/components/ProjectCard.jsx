

import React from 'react';
import { Link } from 'react-router';

const ProjectCard = ({data}) => {
    console.log(data)
     const {repoClient,repoServer,live, improvements,challenges, stack,description, name,image}= data||{}
    return (
        <div className=' max-w-7xl mx-auto mt-22'>
             <div className=' '>
             <img  className="w-full h-90 object-cover "src={ image} alt="" /> 
          </div> 
          <div className=' space-y-2'>
             <p className='text-3xl font-semibold'>{name}</p>
              <p>{description}</p>
               <h1 className='text-2xl font-semibold'>Technologies Used</h1>
               <div className='flex gap-4'>
                {stack?.map((p)=><p className='border-2 px-3 py-1 rounded-md'>{p}</p>)}
               </div>
               {/* challenges */}            
              <div className='parent'>
                 <h1 className='text-2xl font-semibold'>Challenges Faced</h1>
               <div>{challenges?.map((C)=><li>{C}</li> )}
                </div> 
              </div>
              {/* improvements */}
              <div>
                <h1 className='text-2xl font-semibold'>Future Improvements</h1>
                {improvements?.map((M)=><li>{M}</li>)}
              </div>
           
              
             <div className='space-x-2 space-y-4 my-6'>
                <a href={live}>
                 <button className='px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500'>Live-project</button> 
                 </a>
                <a href={repoClient}> <button className='px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500'> client code</button></a> 
            <a href={repoServer}>
              <button className='px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-500'>Server code</button></a>
              <Link to='/'>
              <button className='px-6 py-2 rounded-lg border-2'>Back</button>
              </Link>
             </div>
          </div>
           
        </div>
    );
};

export default ProjectCard;