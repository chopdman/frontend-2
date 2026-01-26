import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import Dropdown from "./Dropdown.js";
import ProductCard from "./ProductCard.tsx";
import Loader from "./Loader.tsx";
import Search from "./Search.tsx"
import { UrlContext } from "../context/Url.tsx";

export default function Product() {
  // let url = "https://dummyjson.com/products";
  const {url} = useContext(UrlContext);

  const [category, setCategory] = useState("");
  const path = location.pathname;

  // if (path !== "/") {
  //   url = `https://dummyjson.com/products/category${category !== "" ? category : path}`;
  // }
  // console.log(url);
  const { data, error, loading } = useFetch(url);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-screen h-full min-h-screen bg-blue-100 flex flex-col gap-3 ">
      <div className="flex gap-2 z-40 self-end pr-10 pt-20">
        <Search/>
        <Dropdown setCategory={setCategory} />
      </div>
      <div className="flex flex-wrap p-5  gap-5 items-center justify-center ">
        {error === null ? (
          data?.products?.map((p) => {
            return <ProductCard data={p} key={p.id} />;
          })
        ) : (
          <p className="text-red-500">
            Failed to load the data please try again.
          </p>
        )}
      </div>
    </div>
  );
}
