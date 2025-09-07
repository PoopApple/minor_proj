"use client"; // This is a client component 👈🏽
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count = {count} />
      <br/>
      <MyButton />
    </div>
  );
}

function MyButton() {
  

  return (
    <button onClick={handleClick} style={{border: "1px solid black"}}>
      Clicked {count} times
    </button>
  );
}


