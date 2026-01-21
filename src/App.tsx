import { createContext, useContext, useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import ProductCard from './components/ProductCard';

export const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext value={theme}>
      <Navbar />
      <Button setTheme={setTheme} theme={theme} />
      <ProductCard/>
    </ThemeContext>
  )
}





