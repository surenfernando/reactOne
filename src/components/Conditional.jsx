import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  //   let messageOne = <h1>This is message 1</h1>;
  //   let messageTwo = <h1>This is message 2</h1>;
  const conState = true;

  return conState ? <Welcome /> : <Code />;
}
