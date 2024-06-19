import { useEffect, useState } from "react";
import { useAudio } from "../../../utils/AudioProvider";
import { getAudioByName } from "../../../utils/handleAudio";

function Footer() {
    const { isPlaying, startPlaying, stopPlaying, src, duration, currentTime } = useAudio();
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false);
    const [savedsrc , setSavedSrc] = useState('');

    useEffect(() => {
        console.log(decodeURIComponent(src ? new URL(src).pathname.split('/').pop() : savedsrc ? new URL(savedsrc).pathname.split('/').pop() : '').replace('.mp3', ''))
        getAudioByName(decodeURIComponent(src ? new URL(src).pathname.split('/').pop() : savedsrc ? new URL(savedsrc).pathname.split('/').pop() : '').replace('.mp3', ''))
            .then((response) => {
                setImage(response.preview_image);
            });
    }, [src]);

    useEffect(() => {
        if (isPlaying) {
            setOpen(true)
        }
    } , [isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            setSavedSrc(src);
            stopPlaying();
        } else {
            startPlaying();
        }
    };

    return (
        open && 
            <div className="w-full h-30 absolute bottom-0 left-0 bg-lightShade flex flex-row">
                <img src={image} className="w-1/3 p-2 h-30 rounded-2xl" alt="preview" />
                <div className="flex flex-col w-2/3 justify-evenly">
                <h1 className="w-full p-2 ">{decodeURIComponent(src ? new URL(src).pathname.split('/').pop() : '').replace('.mp3', '')}</h1>
                <div className="flex p-2 flex-row justify-between">
                    <progress value={currentTime} max={duration}></progress>
                    <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                </div>
                </div>
            </div>
    )
}

export default Footer;