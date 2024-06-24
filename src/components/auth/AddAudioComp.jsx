import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAudio } from "../../utils/handleAudio";

function AddAudioComp(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const urlRef = useRef();
  const youtubeVideoUrlRegex = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)$/;
  function handleSubmit(e) {
    e.preventDefault();
    const url = urlRef.current.value;
    if (!youtubeVideoUrlRegex.test(url)) {
      setError("Invalid Youtube URL");
      return;
    } else {
      setError("");
    }
    setLoading(true);
    addAudio(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setLoading(false);
          if (
            response.error ===
            "UNIQUE constraint failed: api_audio.user_id, api_audio.name"
          ) {
            setError("Audio already exists");
            throw new Error("Add audio failed");
          }
          setError("Invalid Youtube URL");
          throw new Error("Add audio failed");
        }
        setLoading(false);
        props.setAudioList(
          props.audioList.length
            ? [
                ...props.audioList,
                {
                  id: response.id,
                  name: response.name,
                  preview_image: response.preview_image,
                  audio: response.audio,
                }
              ]
            : [
                {
                  id: response.id,
                  name: response.mp3_title,
                },
              ]
        );
        setError(`"${response.name}" added successfully`);
        return response;
      });
  }
  return (
    <div className="w-full h-1/4 flex-col px-2">
      <h1 className="header2 w-full mb-2 text-center">Add Audio</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col mt-2"
      >
        <input
          ref={urlRef}
          className="shadow appearance-none border border-main bg-darkShade rounded w-3/4 mx-auto py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="url"
          type="text"
          placeholder="Youtube URL"
        />
        <p
          onClick={() => navigate("/auth/addAudio")}
          className="text-lightAccent underline cursor-pointer mx-auto mt-1"
        >
          Need Help?
        </p>
        <p className=" text-main w-3/4 text-center mx-auto mt-1">{error}</p>
        {loading && (
          <div className="flex justify-center mt-3">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
        <button className="bg-main text-white mx-auto mt-3 font-bold body py-2 w-1/4 rounded focus:outline-none focus:shadow-outline">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAudioComp;
