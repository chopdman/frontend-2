import { useContext } from "react";
import { ThemeContext } from "../App"
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";


export default function Navbar(){
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);
    const {user,logout,isAuthenticated} = useAuth();

    return (
        <div className={`fixed bg-blue-400 top-0 w-screen h-15 z-50  border flex items-center justify-start gap-10 px-10 ` }>
            <h2 onClick={()=> navigate("/")} className={`cursor-pointer text-2xl ${theme === "dark" ? `text-white` :`text-black`} `}>
                Swift Shop
            </h2>
            {isAuthenticated ? (
                <div className="flex items-center gap-3">
                    <span className="text-sm">Hi,{user?.name}</span>
                    <button onClick={logout} className="text-red-500 text-sm"> Logout</button>
                </div>
            ):(
                <span className="text-sm text-black">
                    Guest
                </span>
            )}
        </div>
    )
}
