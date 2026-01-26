import {  useEffect, useState } from "react";
import Dropdown from "./Dropdown.js";
import ProductCard from "./ProductCard.tsx";
import Loader from "./Loader.tsx";
import { useDebounce } from "../hooks/useDebounce.js";
import {
  fetchCategories,
  fetchProducts,
  searchProducts,
} from "../api/productsApi.ts";
import Search from "./Search.tsx";

export default function Product() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        const tempData = data.map((cat) => {
          return cat.name;
        });
        setCategories(["all", ...tempData]);
      })
      .catch(() => setError("Failed to load categories"));
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError("");

      let data = [];

      if (debouncedSearch) {
        data = await searchProducts(debouncedSearch);
      } else {
        data = await fetchProducts(selectedCategory);
      }
      setProducts(data.products);
      setLoading(false);
    };

    load();
  }, [selectedCategory, debouncedSearch]);

  const handleCategoryChange = (str) => {
    setSelectedCategory(str);
    setSearch("");
  };

  return (
    <div className="w-full  mt-10 flex gap-5 flex-col p-10  ">
      <div className="flex justify-between items-center">
        <Dropdown
          value={selectedCategory}
          handleChange={handleCategoryChange}
          categories={categories}
        />

        <Search value={search} handleSearch={setSearch} />
      </div>

      {/* States */}
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found</p>}

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
