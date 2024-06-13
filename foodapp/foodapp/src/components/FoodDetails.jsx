/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "131e47ffc9d54dc587a130f739fe6c57";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
          <span>{food.vegan ? "Vegan Meal" : ""}</span>
        </div>

        <div>
          <span>{food.pricePerServing / 100} Per serving</span>
        </div>
        <h2>Ingredients</h2>
        <Ingredients food={food} isLoading={isLoading} />
        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.step}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
