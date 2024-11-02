'use client';
import React, {useRef} from 'react';
import YouTube from "react-youtube";
import Scroll from "@/components/Sections/Landing/Scroll";

const Landing = () => {
  const player = useRef<any>()

  // Options for the YouTube player
  const videoOptions = {
    width: '100%',
    height: '124%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      cc_load_policy: 0
    }
  };

  // Handle mute/unmute toggle
  const handleReady = (event: { target: any; }) => {
    const _player = event.target;

    player.current = _player
    _player.unloadModule("captions");
    _player.unloadModule("cc");

    // play video at 0:30
    _player.seekTo(20);

    _player.mute();
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* YouTube player */}
        <YouTube
          videoId="ZGsaRl51m6U"
          opts={videoOptions}
          onEnd={() => {
            // play video at 0:30
            player.current.seekTo(20);
          }}
          className="vids-bg opacity-50 pointer-events-none w-screen h-screen overflow-hidden"
          iframeClassName="absolute top-1/2 left-1/2 w-screen h-screen translate-x-[-50%] translate-y-[-50%]"
          onReady={handleReady}
        />

        {/* Overlay content */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30 flex items-start md:items-center justify-center flex-col text-white text-3xl z-10">
          <h1 className="font-extrabold text-[4rem] md:text-[5rem] leading-10 text-snow">Phuree Kanusont</h1>
          <h3 className="font-bold text-sm md:text-2xl mt-5 text-snow">Software Engineer • Web Developer • Artists</h3>
        </div>

        <Scroll/>
      </div>
    </>
  );
};

export default Landing;