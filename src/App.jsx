import React, { useState } from "react";
import CoffeeCard from "./components/CoffeeCard";
import CoffeeBill from "./components/CoffeeBill";
import data from "./data.json";
import logo from "./asset/logo.png";

let { coffees: coffeesArr } = data;
//                             👇paranthesis are because of curly braces to be considered as object not code block.
coffeesArr = coffeesArr.map((coffee) => ({ ...coffee, count: 0 }));

function App() {
  const [coffees, setCoffees] = useState(coffeesArr);

  const handleIncrement = () => {};

  const handleDecrement = () => {
    console.log("dd");
  };

  return (
    <div className="container mx-auto my-8 flex flex-col items-center">
      <img width={500} src={logo} />
      <p className="text-3xl text-[#1E3932] font-bold mb-8">
        StarBucks Online Coffee Order
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2">
        {coffees.map(({ id, title, price, pic, count }) => (
          <CoffeeCard
            key={id}
            title={title}
            price={price}
            pic={pic}
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>

      <p className="text-2xl text-[#1E3932] font-bold my-8">Bill </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2 mb-8">
        {coffees.map(({ id, title, price, pic, count }) => (
          <CoffeeBill
            key={id}
            title={title}
            price={price}
            pic={pic}
            count={count}
          />
        ))}
      </div>
      <p className="text-[#1E3932] text-lg font-bold">tptal : $65.50</p>
      <button className="bg-[#E9C9A2] text-[#1E3932] w-full font-bold text-xl">
        Submit order
      </button>
    </div>
  );
}

export default App;
