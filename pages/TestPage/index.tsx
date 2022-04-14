import { useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>TestPage</h1>
      <h3>count::{count}</h3>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
};

export default TestPage;
