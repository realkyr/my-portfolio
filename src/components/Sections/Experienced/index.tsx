'use client'
import React, {useEffect} from 'react';
import {theSecrets} from "@/app/fonts";
import {getExperienceService} from "@/components/Sections/Experienced/services";
import Timeline from "@/components/Sections/Experienced/components/Timeline";

const Experienced = () => {

  const [experiences, setExperiences] = React.useState<any>([]);

  useEffect(() => {
    getExperienceService().then(experiences => {
      setExperiences(experiences);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className={`text-[3rem] md:text-[5rem] mt-16 text-center font-medium ${theSecrets.className}`}>Working Experience</h1>


      <Timeline items={experiences} />
    </div>
  )
};

export default Experienced;