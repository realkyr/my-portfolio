import React, {useEffect} from 'react';
import {theSecrets} from "@/app/fonts";
import Image from "next/image";
import profile from "@/assets/images/profile.jpg";
import {getProfileService} from "@/components/Sections/About/services";
import {Profile} from "./types";
import {Skeleton} from "@/components/ui/Skeleton";
import {Show} from "@/components/ui/Show";

const SubSectionCenter = ({children}: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center">
    {children}
  </div>
)


const About = () => {
  const size = 200;
  const [profileData, setProfileData] = React.useState<Partial<Profile> | null>(null);

  useEffect(() => {
    getProfileService().then(profile => {
      setProfileData(profile);
    });
  }, []);

  const loading = profileData === null;

  return (
    <div className="h-screen bg-dark flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-4">
        <SubSectionCenter>
          <h1
            className={`mb-[-50px] z-10 lg:mb-0 ml-0 lg:ml-8 text-[5rem] lg:text-[8rem] font-medium ${theSecrets.className}`}>Hello!</h1>
        </SubSectionCenter>


        <SubSectionCenter>
          <Image className="mx-0 md:mx-5 mb-0 md:mb-4 rounded-full" src={profile.src} width={size} height={size}
                 alt="Profile Picture"/>
        </SubSectionCenter>

        <div className="w-[300px] ml-10 md:ml-0">
          <h2 className="my-2 text-[1.5rem] md:text-[2rem] font-medium">I'm

            <Show when={loading}>
              <Show.Then>
                <Skeleton className="w-20 h-4 ml-2 inline-block"/>
              </Show.Then>

              <Show.Else>
                <span>&nbsp;{profileData?.name}</span>
              </Show.Else>
            </Show>
          </h2>

          <Show when={loading}>
            <Show.Then>
              <div className="h-52 flex flex-col justify-center">
                <Skeleton className="w-30 h-4"/>

                <div className="flex gap-2 mt-2">
                  <Skeleton className="w-28 h-4"/>
                  <Skeleton className="w-20 h-4"/>
                </div>
                <div className="flex gap-2 mt-2">
                  <Skeleton className="w-28 h-4"/>
                  <Skeleton className="w-20 h-4"/>
                </div>
              </div>
            </Show.Then>

            <Show.Else>
              <p>{profileData?.content}</p>
            </Show.Else>
          </Show>

          <h2 className="my-2 text-[1.5rem] font-medium">Contact</h2>

          <Show when={loading}>
            <Show.Then>
              <Skeleton className="w-20 h-4"/>
            </Show.Then>

            <Show.Else>
              {profileData?.contacts?.map((contact) => (
                <span key={contact}>{contact}<br/></span>
              ))}
            </Show.Else>
          </Show>

        </div>
      </div>
    </div>
  )
};

export default About;