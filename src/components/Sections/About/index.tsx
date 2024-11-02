import React from 'react';
import {theSecrets} from "@/app/fonts";
import Image from "next/image";
import profile from "@/assets/images/profile.jpg";

const SubSectionCenter = ({children}: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center">
      {children}
    </div>
  )

const About = () => {
  const size = 200;

  return (
    <div className="h-screen bg-dark flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-4">
        <SubSectionCenter>
          <h1 className={`mb-[-50px] z-10 lg:mb-0 ml-0 lg:ml-8 text-[5rem] lg:text-[8rem] font-medium ${theSecrets.className}`}>Hello!</h1>
        </SubSectionCenter>


        <SubSectionCenter>
          <Image className="mx-0 md:mx-5 mb-0 md:mb-4 rounded-full" src={profile.src} width={size} height={size}
                 alt="Profile Picture"/>
        </SubSectionCenter>

        <div className="w-[300px] ml-10 md:ml-0">
          <h2 className="my-2 text-[1.5rem] md:text-[2rem] font-medium">I'm Phuree Kanusont</h2>

          <p>
            Skilled Full Stack Developer with expertise in cloud technologies and micro frontends. Quick to master new
            tools and deliver scalable solutions, I thrive in dynamic environments and am dedicated to continuous
            improvement as a developer.
          </p>

          <h2 className="my-2 text-[1.5rem] font-medium">Contact</h2>

          <p>
            +66945587588 phuree.kanusont@gmail.com
          </p>

        </div>
      </div>
    </div>
  )
};

export default About;