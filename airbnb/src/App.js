import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Shopping from "./Components/Shopping";
import { data } from "./data";

function App() {
  const Cards = data.map((item) => {
    return (
      <Shopping
        key={item.id}
        item={item}
        // item={...item}
      />
    );
  });
  return (
    <div>
      <Nav />
      <Hero />
      <div className="shopping-cart">{Cards}</div>
    </div>
  );
}

export default App;
