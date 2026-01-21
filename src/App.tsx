import { createContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import ProductCard from './components/ProductCard';

export const ThemeContext = createContext(null);

export default function MyApp() {
  // localStorage.getItem()
  const stored = localStorage.getItem("theme");
  const [theme, setTheme] = useState(stored);

  useEffect(()=>{
// console.log(stored);
    if(stored===null){
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;

        
  
      setTheme(parseInt(prefersDark) ? "dark" : "light");
      localStorage.setItem("theme",!parseInt(prefersDark) ? "dark" : "light")
    }else{
      setTheme(stored);
    }

  },[]);

  return (
    <ThemeContext value={theme}>
      <Navbar />
      <Button setTheme={setTheme} theme={theme} />
      <ProductCard/>
    </ThemeContext>
  )
}





