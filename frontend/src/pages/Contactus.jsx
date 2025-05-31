import React from 'react';
import u from '../assets/u.png'
import a from '../assets/a.png'
import h from '../assets/h.png'

const Contactus = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Meet Our People</h1>
      <p className="w-3/5 mb-14 text-gray-500 text-sm">
       The team behind this project.
      </p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {/* Profile Card 1 */}
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            className="w-24 rounded-full"
            src={a}
            alt="Syed Abdullah"
          />
          <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">Syed Abdullah</h2>
          <p className="text-gray-500 group-hover:text-white/80">Full Stack Developer</p>
          <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Syed Abdullah is a dedicated full-stack developer and the team lead for the Online Rental Market App project. With a deep passion for web technologies and user-centric design.
          </p>
          <p className="text-gray-500 group-hover:text-white/50">Email: 02-235232-031@student.bahria.edu.pk</p>
          
        </div>

        {/* Profile Card 2 */}
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            className="w-24 rounded-full"
            src={u}
            alt="Syeda Ummelaila Raza"
          />
          <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">Syeda Ummelaila Raza</h2>
          <p className="text-gray-500 group-hover:text-white/80">Frontend Developer</p>
          <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Syeda Ummelaila Raza is a skilled frontend developer with a strong eye for design and user experience. She is responsible for crafting intuitive interfaces and responsive layouts using React.js.
          </p>
          <p className="text-gray-500 group-hover:text-white/50">Email: 02-235232-039@student.bahria.edu.pk</p>
        
        </div>

        {/* Profile Card 3 */}
        <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition">
          <img
            className="w-24 rounded-full"
            src={h}
            alt="Noor Ul Hassan"
          />
          <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">Noor Ul Hasan</h2>
          <p className="text-gray-500 group-hover:text-white/80">Backend Developer</p>
          <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
            Noor ul Hasan specializes in backend development and database management. His role involves building robust APIs, managing data flow with MongoDB.
          </p>
          <p className="text-gray-500 group-hover:text-white/50">Email: 02-235232-035@student.bahria.edu.pk</p>
          
        </div>
      </div>
    </div>
  );
};

export default Contactus;
