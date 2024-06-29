import { useEffect, useState } from "react";
import { useAudio } from "../../../utils/AudioProvider";
import { getAudioByName } from "../../../utils/handleAudio";

function Footer() {
  const {
    isPlaying,
    startPlaying,
    stopPlaying,
    src,
    duration,
    currentTime,
    setTime,
  } = useAudio();
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [savedsrc, setSavedSrc] = useState("");

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    console.log(
      decodeURIComponent(
        src
          ? new URL(src).pathname.split("/").pop()
          : savedsrc
          ? new URL(savedsrc).pathname.split("/").pop()
          : ""
      ).replace(".mp3", "")
    );
    getAudioByName(
      decodeURIComponent(
        src
          ? new URL(src).pathname.split("/").pop()
          : savedsrc
          ? new URL(savedsrc).pathname.split("/").pop()
          : ""
      ).replace(".mp3", "")
    ).then((response) => {
      setImage(response.preview_image);
    });
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      setOpen(true);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setSavedSrc(src);
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  return (
    open && (
      <div className="w-full h-30 fixed bottom-0 left-0 bg-lightShade flex flex-row">
        <img src={image} className="w-1/3 p-2 h-30 rounded-2xl" alt="preview" />
        <div className="flex p-1 flex-col w-2/3 justify-evenly font-roboto">
          <h1 className="w-full p-2 text-center">
            {decodeURIComponent(
              src ? new URL(src).pathname.split("/").pop() : ""
            ).replace(".mp3", "")}
          </h1>
          <div className="w-full flex-row flex justify-center">
            <p className="text-sm mr-1 my-auto font-light">
              {formatTime(currentTime)}
            </p>
            <progress
              value={currentTime}
              max={duration}
              className="audio-progress"
              onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const percentage = x / rect.width;
                setTime(percentage * duration);
              }}
            ></progress>{" "}
            <p className="text-sm ml-1 my-auto font-light">
              {formatTime(duration)}
            </p>
          </div>
          <button onClick={togglePlay}>
            <img
              className="w-7 h-7 mx-auto"
              src={isPlaying ? "/img/pause.png" : "/img/play.png"}
            ></img>
          </button>
        </div>
      </div>
    )
  );
}

export default Footer;
