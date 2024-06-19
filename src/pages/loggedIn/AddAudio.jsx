import React from "react";
import AddAudioComp from "../../components/auth/AddAudioComp";
import Header from "../../components/auth/layout/Header";
import { CheckSession } from "../../utils/sessions";
import Footer from "../../components/auth/layout/Footer";

function AddAudio() {
  return (
    <div className="flex flex-col h-screen bg-darkShade overflow-y-auto">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 flex-grow bg-darkShade">
        <AddAudioComp />
        <div className="w-full h-1/4 flex-col px-2">
            <h1 className="header2 w-full mb-2 text-center">How To Do It</h1>
            <img src="../../../img/helpAdd1.png"></img>
            <ol className="header2 ml-7">
                <li className="mb-3 mt-5">1. Copy the URL from the Youtube video</li>
                <li className="mb-3">2. Paste the URL into the "Youtube URL" box</li>
                <li className="mb-3">3. Click on the "Add" button</li>
                <li className="mb-3">4. Enjoy your music!</li>
            </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CheckSession(AddAudio);