import { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2e2aebe14cf64e3dae20333697e21077";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
