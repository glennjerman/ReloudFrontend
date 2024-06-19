import Header from "../components/layout/Header";

function About() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 px-5 flex-grow bg-lightShade">
        <h1 className="text-3xl header font-bold mb-4">About Us</h1>
        <p className="text-lg mb-5 body bg-main p-3 rounded-md">
          We are a team of passionate developers dedicated to creating the best
          user experiences.
        </p>
        <p className="text-lg mb-5 body bg-main p-3 rounded-md">
          Our mission is to make software that makes a difference in people's
          lives.
        </p>
        <p className="text-lg body bg-main p-3 rounded-md">
          We believe in the power of technology to create change and are
          committed to making that change a reality.
        </p>
      </main>
    </div>
  );
}

export default About;
