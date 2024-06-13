import FoodItem from "./FoodItem";

/* eslint-disable react/jsx-key */
export default function FoodList({ setFoodId, foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
