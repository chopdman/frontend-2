
import { useContext } from "react";
import { ThemeContext } from "../App"
import { useNavigate } from "react-router";


export default function Navbar(){
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);

    return (
        <div className={`fixed bg-blue-400 top-0 w-screen h-15 z-50  border flex items-center justify-between px-10 ` }>
            <h2 onClick={()=> navigate("/")} className={`cursor-pointer text-2xl ${theme === "dark" ? `text-white` :`text-black`} `}>
                Swift Shop
            </h2>
        </div>
    )
}
