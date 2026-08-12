import React, { useId, useRef } from "react";

function Example2() {
  const myAudio = useRef(null);
  function handlePlay() {
    myAudio.current.play();
  }
  function handlePause() {
    myAudio.current.pause();
  }

  function handleRestart() {
    myAudio.current.currentTime = 0;
    myAudio.current.play();
  }
  return (
    <div className="w-full max-w-6xl mx-auto my-4">
      <div className="w-full flex justify-center items-center">
        <audio
          className="w-1/2"
          ref={myAudio}
          src="./songs/aron.mp3"
          controls
        />
      </div>

      <div className="w-full my-4 flex justify-between gap-2">
        <button
          onClick={handlePlay}
          className="bg-blue-500 text-white rounded-md py-2 px-8"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className="bg-red-500 text-white rounded-md py-2 px-8"
        >
          Pause
        </button>
        <button
          onClick={handleRestart}
          className="border  rounded-md py-2 px-8"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Example2;
