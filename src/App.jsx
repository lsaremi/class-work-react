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

  const handleSubmit = () => {
    const newCoffees = coffees.map((coffee) => ({ ...coffee, count: 0 }));
    setCoffees(newCoffees);
  };

  const handleDelete = (id) => {
    const targetCoffeeIndex = coffees.findIndex((coffee) => coffee.id == id);
    const targetCoffee = coffees[targetCoffeeIndex];
    targetCoffee.count = 0;
    const newCoffees = [...coffees];
    newCoffees[targetCoffeeIndex] = targetCoffee;
    setCoffees(newCoffees);
  };

  const handleIncrement = (id) => {
    const targetCoffeeIndex = coffees.findIndex((coffee) => coffee.id == id);
    const targetCoffee = coffees[targetCoffeeIndex];
    // const editedTargetCoffee = {
    //   ...targetCoffee,
    //   count: targetCoffee.count + 1,
    // };
    targetCoffee.count += 1;
    const newCoffees = [...coffees];
    newCoffees[targetCoffeeIndex] = targetCoffee;
    setCoffees(newCoffees);
  };

  const handleDecrement = (id) => {
    const targetCoffeeIndex = coffees.findIndex((coffee) => coffee.id == id);
    const targetCoffee = coffees[targetCoffeeIndex];
    // const editedTargetCoffee = {
    //   ...targetCoffee,
    //   count: targetCoffee.count>0? targetCoffee.count - 1: 0,
    // };
    targetCoffee.count = targetCoffee.count > 0 ? targetCoffee.count - 1 : 0;
    const newCoffees = [...coffees];
    newCoffees[targetCoffeeIndex] = targetCoffee;
    setCoffees(newCoffees);
  };

  const cartItems = coffees.filter((coffee) => coffee.count > 0);
  const calcTotal = () =>
    cartItems.reduce((sum, coffee) => coffee.count * coffee.price + sum, 0);

  return (
    <div className="container mx-auto my-8 flex flex-col items-center">
      <img width={500} src={logo} />
      <p className="text-3xl text-[#1E3932] font-bold mb-8">
        StarBucks Online Coffee Order
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>

      <p className="text-2xl text-[#1E3932] font-bold my-8">Bill </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2 mb-8">
        {cartItems.map((coffee) => (
          <CoffeeBill
            key={coffee.id}
            coffee={coffee}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <p className="text-[#1E3932] text-lg font-bold">total : ${calcTotal()}</p>
      <button
        onClick={handleSubmit}
        className="bg-[#E9C9A2] text-[#1E3932] w-full font-bold text-xl"
      >
        Submit order
      </button>
    </div>
  );
}

export default App;
