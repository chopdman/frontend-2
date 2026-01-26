import { useEffect, useState } from "react"

export const useDebounce = (value,delay) => {
 const [data,setData] = useState(value);

 useEffect(()=>{
    const id = setTimeout(()=> setData(value),delay);
    return ()=> clearTimeout(id);
 },[value,delay]);

 return data;
}