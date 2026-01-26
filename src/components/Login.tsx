import { useState } from "react";
import { useAuth } from "../context/AuthContext"

const Login = ({onClose}) => {
    const {login} = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit= () =>{
        const sucess = login(email,password);
        if(!sucess){
            setError("Invalid credentials");
            return;
        }
        onClose();
    }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-80 space-x-4">
            <h3 className="text-xl font-bold">Login</h3>
            <input className="w-full border px-3 py-2 rounded " placeholder="email" value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="w-full border px-3 py-3 rounded" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

            {error && <p className="text-red-500 text-sm">{error}</p> }

            <div className="flex justify-end gap-2">
                <button onClick={onClose} className="text-gray-500">
                    Cancel
                </button><button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-1 rounded">
                Login
                </button>

            </div>
        </div>
    </div>
  )
}

export default Login