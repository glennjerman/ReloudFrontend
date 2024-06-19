import { useEffect, useRef, useState } from "react";
import Header from "../../components/auth/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAudio, editAudio, getAudio } from "../../utils/handleAudio";
import { CheckSession } from "../../utils/sessions";
import Footer from "../../components/auth/layout/Footer";

function InspectAudio() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editState, setEditState] = useState(false);
  const [audio, setAudio] = useState({});
  const [lineclamp, setLineclamp] = useState(true);
  const newNameRef = useRef();
  const [newImage, setNewImage] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    getAudio(id).then((response) => {
      setAudio(response);
    });
  }, []);

  function handleEdit() {
    const newName = newNameRef.current.value;
    editAudio(id, newName, newImage);
    setAudio({
      ...audio,
      name: newName,
      preview_image: newImage ? newImage : audio.preview_image,
    });
    setEditState(false);
    setNewImage(null);
  }

  function handleDelete() {
    if (confirmDelete) {
      deleteAudio(id);
      navigate("/auth/dashboard");
    } else {
      setConfirmDelete(true);
    }
  }

  function cancelEdit() {
    setEditState(false);
    setNewImage(null);
  }

  function uploadImage() {
    // Create a new 'input' element
    const input = document.createElement("input");

    // Set the type of the 'input' element to 'file'
    input.type = "file";

    // Set the accept attribute to 'image/*' to only accept image files
    input.accept = "image/*";

    // Add an 'onChange' event listener to the 'input' element
    input.onchange = (event) => {
      // Get the selected file
      const file = event.target.files[0];

      // Create a new FileReader object
      const reader = new FileReader();

      // Set the onload function of the FileReader object
      reader.onload = (event) => {
        // The result contains the data URL of the image
        const imageUrl = event.target.result;

        // Do something with the image URL...
        setNewImage(imageUrl);
        console.log(imageUrl);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    };

    // Programmatically click the 'input' element to open the file dialog
    input.click();
  }

  return (
    <div className="flex flex-col h-screen bg-darkShade overflow-y-auto">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 flex-grow bg-transMain mt-4">
        <div className="w-3/4 h-3/4 mx-auto flex flex-col justify-center items-center">
          {!editState ? (
            <h2
              onClick={() => setLineclamp(!lineclamp)}
              className={`font-roboto text-4xl font-extrabold mb-4 text-balance text-center ${
                lineclamp ? "line-clamp-2" : "line-clamp-none"
              }`}
            >
              {audio.name}
            </h2>
          ) : (
            <input
              type="text"
              className="font-roboto text-4xl  bg-inherit font-extrabold mb-4 text-balance text-center"
              defaultValue={audio.name}
              ref={newNameRef}
            ></input>
          )}

          <div className="w-full h-1/2 relative">
            <img
              src={
                audio.preview_image !== null
                  ? editState && newImage
                    ? newImage
                    : audio.preview_image
                  : "data:image/png;base64,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"
              }
              className="w-full h-full rounded-lg shadow-lg absolute"
            ></img>
            {editState && (
              <img
                src="/img/UploadIcon.png"
                className="absolute opacity-75 h-full w-full z-20"
                onClick={() => uploadImage()}
              ></img>
            )}
          </div>
          {audio.audio !== undefined && (
            <audio controls className="mt-8 mx-auto text-main">
              <source src={audio.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          {!editState && (
            <div className="flex flex-row justify-between w-1/2">
              <button
                className="bg-main text-lightShade font-roboto font-bold text-xl mt-4 p-2 rounded-lg"
                onClick={() => setEditState(true)}
              >
                Edit
              </button>
              <button
                className="bg-main text-lightShade font-roboto font-bold text-xl mt-4 p-2 rounded-lg"
                onClick={handleDelete}
              >
                {confirmDelete ? "Confirm" : "Delete"}
              </button>
            </div>
          )}
        </div>
        {editState && (
          <div className="contents">
            <button
              className="bg-main text-lightShade font-roboto font-bold text-xl mt-4 p-2 rounded-lg"
              onClick={() => cancelEdit()}
            >
              Cancel
            </button>

            <button
              className="bg-main text-lightShade font-roboto font-bold text-xl mt-4 p-2 rounded-lg"
              onClick={() => handleEdit()}
            >
              Confirm Changes
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default CheckSession(InspectAudio);
