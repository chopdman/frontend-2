import { createContext } from 'react';

import { Route, Routes } from 'react-router';
import Product from './components/Product';
import Home from './components/Home';
// import Demo from './components/Demo';

export const ThemeContext = createContext(null);

export default function MyApp() {
 
  return (
  
    <Routes>
<Route path="/" element={<Home />}>
<Route index element={<Product/>}/>
<Route path="/:products" element={<Product />} />
</Route>
</Routes>
  )
}





