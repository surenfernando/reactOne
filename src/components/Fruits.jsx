import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mangoes", "Carrots", "Plums"];
  const fruits = [
    {
      name: "apple",
      price: 10,
      soldout: true,
    },
    {
      name: "banana",
      price: 210,
      soldout: false,
    },
    {
      name: "berry",
      price: 130,
      soldout: true,
    },
    {
      name: "mango",
      price: 110,
      soldout: false,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
