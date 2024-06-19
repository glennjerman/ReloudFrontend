import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../utils/sessions'


function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        .then(response => {
            if (response) {
                navigate('/')
            }
        })
    }

    return (
    <nav>
        <button className="flex flex-col w-11 h-12 justify-around items-center p-1" onClick={() => setIsOpen(!isOpen)}>
                <span className="w-full h-1 bg-main"></span>
                <span className="w-full h-1 bg-main"></span>
                <span className="w-full h-1 bg-main"></span>
            </button>
            <div className={`fixed z-10 flex flex-col top-0 h-screen w-3/5 bg-main transition-all duration-500 ${isOpen ? 'right-0' : '-right-3/4'}`}>
                <div className="flex flex-row justify-between h-20 px-5 items-center w-full bg-main">
                    <button className="w-5 font-bold text-3xl" onClick={() => {setIsOpen(false)}}>&#62;</button>
                    <h2 className="link leading-none" onClick={() => handleLogout()}>
                        Logout
                    </h2>
                </div>
                
                <ul className="flex flex-col align-middle justify-start flex-grow px-5 w-full pt-8">
                <li><h2 className="link leading-none mb-8" onClick={() => navigate('/auth/dashboard')}>Dashboard</h2></li>
                    <li><h2 className="link leading-none mb-8" onClick={() => navigate('/auth/addAudio')}>Add Audio</h2></li>
                    <li><h2 className="link leading-none mb-8" onClick={() => navigate('/about')}>Library</h2></li>
                    <li><h2 className="link leading-none mb-8" onClick={() => navigate('/faq')}>Settings</h2></li>
                    <li><h2 className="link leading-none mb-8" onClick={() => navigate('/contact')}>Contact Us</h2></li>


                </ul>
            </div>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-tGrey ${!isOpen && 'hidden'}`}>
                <div className="fixed top-0 left-0 w-2/5 h-screen" onClick={() => {setIsOpen(false)}}></div>
            </div>
    </nav>
    )
}

export default Nav