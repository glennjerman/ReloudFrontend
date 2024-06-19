import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 flex-grow bg-lightShade">
        <h1 className=" w-full text-center text-3xl font-bold header">Stream audio from any Youtube video!</h1>
        <p className="body w-4/5 text-center text-xl mt-5">Our application allows you to stream audio from any Youtube video. Simply paste the URL of the video and start listening!</p>
        <button className="mx-auto body mt-10 px-4 py-2 text-2xl font-bold text-darkShade bg-main rounded" onClick={() => {navigate('/login')}}>Start Streaming</button>
      </main>
    </div>
  );
}

export default Index;