'use client';
import { specializations } from "@/lib/constant";
import Image from "next/image";
import { useState } from "react";

const SpecializationSection = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number>(0); // State to track the hovered item's ID

  return (
   
      <main className="w-full mx-auto flex items-center justify-center flex-col">
       
       
        <ul className="grid grid-cols-3 gap-10 lg:gap-3 justify-items-center md:grid-cols-2 smx:grid-cols-1 w-full smx:mx-auto ">
          {specializations.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setHoveredItemId(item.id)} // Set the hovered item's ID
              onMouseLeave={() => setHoveredItemId(0)} // Reset the hovered item's ID
              className={`  ${hoveredItemId===item.id?'special-card':''}  h-[23rem] xlgm:h-[20rem] xlgm:w-[20rem] lg:h-[17rem] lg:w-[17rem]  w-[23rem]   flex justify-center gap-4 items-center flex-col  `}
            >
              <aside className="bg-[var(--primary-white-hex)]  w-[4rem] h-[4rem] shadow-md rounded-full flex justify-center items-center">
              <Image
                src={
            
                 item.defaultIcon // Otherwise, show defaultIcon
                }
                alt={item.title}
                className="w-[1.5rem]"
                width={200}
                height={200}
                priority
              />
              </aside>
              <h1 className={` font-bold text-lg text-[var(--darker-green-hex)]`}>
                {item.title}
              </h1>
              <h6 className="w-11/12 text-[var(--darker-grey-hex)] lg:w-[80%] xlg:text-xs mx-auto text-center">
                {item.description}
              </h6>
            </li>
          ))}
        </ul>
      </main>
  
  );
};

export default SpecializationSection;
