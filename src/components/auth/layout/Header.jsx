import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Header() {
    const navigate = useNavigate()
    return (
        <header className="flex flex-row w-full h-15 p-4 align-middle justify-between bg-darkShade outline-none">
            <img src="../../../../img/profileHolder.png" className="w-11 h-11 border-black border-solid border-2 rounded-2xl"></img>
            <h1 onClick={() => navigate('/auth/dashboard')} className="logo leading-none">Reloud</h1>
            <Nav />
        </header>
    )
}

export default Header;