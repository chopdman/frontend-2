import { useContext, useState } from "react";
import useDropdown from "../hooks/useDropdown.js";

import { Link } from "react-router";
import Loader from "./Loader.js";
import { UrlContext } from "../context/Url.js";

export default function Dropdown({setCategory}) {
  const {setUrl}= useContext(UrlContext);
  const { data, error, loading } = useDropdown(
    "https://dummyjson.com/products/category-list",
  );

 const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   if (loading) {
      return <Loader />;
    }

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md 
                    border border-gray-300 shadow-sm px-4 py-2 bg-white 
                    text-sm font-medium text-gray-700 hover:bg-gray-50 
                    focus:outline-none"
        >
          Options
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none z-50 overflow-scroll"
          role="menu"
        >
          <div className="py-1" role="none">
<Link
                to={`/`}
                onClick={()=>{
                    setUrl(`https://dummyjson.com/products`)
                    setIsOpen(!isOpen);
                }}
                className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                role="menuitem"
              >
                all
              </Link>
            {error === null ? data?.map((cat) => {
             return <Link
                to={`/${cat}`}
                onClick={()=>{
                    setUrl(`https://dummyjson.com/products/category/${cat}`)
                    setIsOpen(!isOpen);
                }}
                className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                role="menuitem"
              >
                {cat}
              </Link>
            })
        :
        (
          <p className="text-red-500">
            Failed to load the data please try again.
          </p>
        )
        }
          </div>
        </div>
      )}
    </div>
  )}
 