// eslint-disable-next-line react/prop-types
export default function Fruit({ name, price, soldout }) {
  return (
    <>
      {/* {name} is priced at $ {price} */}
      {price > 115 ? (
        <li>
          {name} is priced at $ {price} {soldout ? "soldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
