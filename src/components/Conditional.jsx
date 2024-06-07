export default function Conditional() {
  const conState = true;
  if (conState) {
    return (
      <div>
        <h3>This is a conditional component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code everyday!</h3>
      </div>
    );
  }
}
