import { useEffect } from "react";
import AddAudioComp from "../../components/auth/AddAudioComp";
import AudioPreview from "../../components/auth/AudioPreview";
import Header from "../../components/auth/layout/Header";
import { listAudio } from "../../utils/handleAudio";
import { CheckSession } from "../../utils/sessions";
import { useState } from "react";
import Footer from "../../components/auth/layout/Footer";

function Dashboard() {
  const [audioList, setAudioList] = useState([]);
  useEffect(() => {
    listAudio()
      .then((response) => {
        setAudioList(response);
      });
    console.log(audioList)
  }
  , []);
  useEffect(() => {
    console.log(audioList)
  }
  , [audioList]);

  return (
    <div className="flex flex-col h-screen bg-darkShade overflow-y-auto">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 flex-grow bg-darkShade">
        <AddAudioComp setAudioList={setAudioList} audioList={audioList}/>
        <div className="w-full h-50 flex-col px-2">
          <h1 className="header2 w-full mb-2 text-center">Recently Added</h1>
          <div className="w-full h-full grid items-center grid-flow-col gap-4 overflow-x-auto border-y-4 border-solid border-main" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 150px))' }}>
            { audioList.length &&
              audioList.slice().reverse().map((audio) => {
                return <AudioPreview name={audio.name} image={audio.preview_image} audio={audio.audio} key={audio.id} id={audio.id}/>;
              })
            }
          </div>
        </div>
        <div className="w-full h-50 flex-col px-2 mt-35">
          <h1 className="header2 w-full mb-2 text-center">Favourites</h1>
          <div className="w-full h-full flex-row flex border-y-4 border-solid border-main"></div>
        </div>
        <div className="w-full h-50 flex-col px-2 mt-35 mb-50">
          <h1 className="header2 w-full mb-2 text-center">Popular Files</h1>
          <div className="w-full h-full flex-row flex border-y-4 border-solid border-main"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CheckSession(Dashboard);
