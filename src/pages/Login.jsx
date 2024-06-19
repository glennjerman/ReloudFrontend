import Header from "../components/layout/Header";
import GoogleButton from "react-google-button";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckSession, login } from "../utils/sessions";
import Cookie from 'js-cookie';

function Login() {
    const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email");
      console.error("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      console.error("Password must be at least 6 characters long");
      return;
    }
    login(email, password)
        .then((response) => {
            if (response === false) {
                setError("Incorrect email or password");
                return;
            }
            Cookie.set('token', response.token);
            console.log(Cookie.get('token'))
            navigate("/auth/dashboard");
        })
  }
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 flex-grow bg-lightShade">
        <div className="flex flex-col items-center justify-center h-4/5 w-full mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-3/4 h-5/6 bg-lightShade p-5 rounded-lg shadow-lg"
          >
            <h2 className="header w-full text-center text-darkShade mb-5">
              Login
            </h2>
            <GoogleButton
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
            <h2 className="font-raleway text-xl font-bold w-full text-center text-darkShade mb-5 mt-10">
              Login with email
            </h2>
            <input
              type="text"
              className="mb-5 p-2 w-3/4 bg-lightShade border-2 border-darkShade"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="text"
              className="mb-5 p-2 w-3/4 bg-lightShade border-2 border-darkShade"
              placeholder="Password"
              ref={passwordRef}
            />
            <p className="text-red-500 text-sm text-center pb-2">{error}</p>
            <p onClick={() => navigate('/signup')} className="text-center text-blue-500 font-bold text-sm pb-2 underline cursor-pointer font-sans">Sign up</p>
            <button className="p-2 w-1/2  bg-main text-lightShade font-bold rounded-lg shadow-lg">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CheckSession(Login);
