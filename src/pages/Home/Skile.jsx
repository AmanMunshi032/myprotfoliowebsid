import React from 'react';
import Marquee from 'react-fast-marquee';
import {  Element } from 'react-scroll';
import { motion } from "motion/react"
const Skile = () => {
    return (
     <Element name="skil">
    
        <section id="skills" className="bg-gray-800  py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center "> MY Skills</h2>
        
           <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* img-1 */}
           
          < motion.div className="p-4  lg:h-48 lg:w-48 space-y-2 rounded-2xl shadow bg-gray-700"
          whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center'  
>
                 <img  src="https://i.ibb.co.com/QFjjW2pZ/atom-2.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold' >React js</h1>
            
          </motion.div>
        
            {/* img-2 */}
            
        <motion.div className="p-4  lg:h-48 lg:w-48 space-y-2 rounded-xl bg-gray-700 shadow"
          whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center'>
                 <img  src="https://i.ibb.co.com/jvyrbbdk/java.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold' >JavaScript</h1>
            
          </motion.div>
          
         
          
 < motion.div className="p-4 lg:h-48 lg:w-48  space-y-2 rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center'>
                 <img  src="https://i.ibb.co.com/HLnDjNc5/programing.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold' >Node js</h1>
            
          </motion.div>
          
            {/* img-3 */}
         
            {/* img-4 */}
          <motion.div className="p-4 lg:h-48 lg:w-48  space-y-2 rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center'>
                 <img  src="https://i.ibb.co.com/rKF4Zw82/figma.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold' >Figma</h1>
            
          </motion.div>
            {/* img-5 */}
          <motion.div className="p-4 lg:h-48 lg:w-48   rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/PZbpKH5M/icons8-mongodb-128.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-14' >MongoDB</h1>
            
          </motion.div>
            {/* img-6 */}
          <motion.div className="p-4 lg:h-48 lg:w-48  rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/GQZv3TWF/html-5.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-14' >HTML</h1>
            
          </motion.div>
            {/* img-7 */}
          <motion.div className="p-4 lg:h-48 lg:w-48   rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/YF3cpMRF/css-3.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-14' >CSS</h1>
            
          </motion.div>
            {/* img-8 */}
          < motion.div className="p-4 lg:h-48 lg:w-48  rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/fY7DP8bv/github.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-14'>Github</h1>
            
          </motion.div>
            {/* img-9 */}
          <motion.div className="p-4 lg:h-48 lg:w-48  rounded-xl bg-gray-700 shadow"
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/WpkSZR2s/icons8-tailwind-css-144.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-4'>Tailwind css</h1>
            
          </motion.div>
          
            {/* img-10 */}

          <motion.div className="p-4 lg:h-48 lg:w-48  rounded-xl bg-gray-700 shadow"
          
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
             <div className='flex justify-center items-center '>
                 <img  src="https://i.ibb.co.com/RkMBYkzb/icons8-next-js-128.png" alt="" />
             </div>
             <h1 className='text-center text-2xl font-bold mb-4'>Next js</h1>
            
          </motion.div>
          
          
    
        </div>
        
       
      </div>
    </section>
    </Element>
    );
};

export default Skile;