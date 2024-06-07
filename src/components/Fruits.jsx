import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mangoes", "Carrots", "Plums"];
  const fruits = [
    {
      name: "apple",
      price: 10,
    },
    {
      name: "banana",
      price: 210,
    },
    {
      name: "berry",
      price: 130,
    },
    {
      name: "mango",
      price: 110,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
