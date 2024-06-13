/* eslint-disable react/jsx-key */

import Item from "./Item";

/* eslint-disable react/prop-types */
export default function Ingredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
