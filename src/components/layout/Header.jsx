import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Header() {
    const navigate = useNavigate()
    return (
        <header className="grid grid-cols-3 items-center bg-darkShade w-full h-20">
            <div></div>
            <h1 className="logo h-20 flex items-center justify-center leading-none text-center" onClick={() => navigate('/')}>Reloud</h1>
            <div className="justify-self-end">
                <Nav />
            </div>
        </header>
    )
}

export default Header;