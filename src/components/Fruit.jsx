// eslint-disable-next-line react/prop-types
export default function Fruit({ name, price }) {
  return (
    <li>
      {name} is priced at $ {price}
    </li>
  );
}
