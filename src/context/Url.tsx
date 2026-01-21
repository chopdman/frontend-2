import { createContext, useState } from 'react';

const UrlContext = createContext({
 url: "",
 setUrl: () => {},
});

const UrlProvider = ({ children }) => {
 const [url, setUrl] = useState("https://dummyjson.com/products");

 return (
   <UrlContext.Provider value={{ url, setUrl }}>
     {children}
   </UrlContext.Provider>
 );
};

export { UrlContext, UrlProvider };