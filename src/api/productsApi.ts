const BASE_URL = "https://dummyjson.com";

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) {
    throw new Error("Failed to load categories");
  }
  return res.json();
};

export const fetchProducts = async (category) => {
  const url =
    category && category !== "all"
      ? `${BASE_URL}/products/category/${category}`
      : `${BASE_URL}/products`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to load Products");
  }
  return res.json();
};

export const searchProducts = async (query) => {
    const res = await fetch(`${BASE_URL}/products/search?q=${query.toLowerCase()}`);
if(!res.ok) throw new Error("Search failed");
    return res.json();
}
