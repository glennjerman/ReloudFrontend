import React from 'react';
import Header from '../components/layout/Header';

function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-start pt-10 px-5 flex-grow bg-lightShade">
        <h1 className="text-3xl font-bold mb-4 header">Contact Us</h1>
        <form className="w-full max-w-xl">
          <div className="mb-4">
            <label className="block ml-2 text-gray-700 body text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
          </div>
          <div className="mb-4">
            <label className="block ml-2 text-gray-700 body text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
          </div>
          <div className="mb-4">
            <label className="block ml-2 text-gray-700 body text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-main text-white font-bold body py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;