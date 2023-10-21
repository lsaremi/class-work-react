import React, { useState } from "react";
import CoffeeCard from "./components/CoffeeCard";
import CoffeeBill from "./components/CoffeeBill";
import data from "./data.json";
import logo from "./asset/logo.png";

const { coffees: coffeesArr } = data;
//                                    👇paranthesis are because of curly braces to be considered as object not code block.
// coffeesArr = coffeesArr.map(coffee => ({ ...coffee, count: 0 }));
coffeesArr.forEach(coffee => (coffee.count = 0)); // 👈 alternative and better way for upper line:

function App() {
  const [coffees, setCoffees] = useState(coffeesArr);

  const handleIncrement = coffee => {
    const updatedCoffees = coffees.map(c => (c === coffee ? { ...c, count: c.count + 1 } : c));
    setCoffees(updatedCoffees);
  };

  const handleDecrement = coffee => {
    if (coffee.count) {
      const updatedCoffees = coffees.map(c => (c === coffee ? { ...c, count: c.count - 1 } : c));
      setCoffees(updatedCoffees);
    }
  };

  const handleDelete = coffee => {
    const updatedCoffees = coffees.map(c => (c === coffee ? { ...c, count: 0 } : c));
    setCoffees(updatedCoffees);
  };

  const handleIncrement2 = coffee => {
    const targetCoffeeIndex = coffees.indexOf(coffee);

    const editedTargetCoffee = { ...coffee, count: coffee.count + 1 };

    const updatedCoffees = [...coffees];
    updatedCoffees[targetCoffeeIndex] = editedTargetCoffee;

    setCoffees(updatedCoffees);
  };

  const handleDecrement2 = coffee => {
    if (coffee.count) {
      const targetCoffeeIndex = coffees.indexOf(coffee);

      const editedTargetCoffee = { ...coffee, count: coffee.count - 1 };

      const updatedCoffees = [...coffees];
      updatedCoffees[targetCoffeeIndex] = editedTargetCoffee;

      setCoffees(updatedCoffees);
    }
  };

  const handleDelete2 = id => {
    const targetCoffeeIndex = coffees.findIndex(coffee => coffee.id == id);
    const targetCoffee = coffees[targetCoffeeIndex];
    targetCoffee.count = 0;
    const newCoffees = [...coffees];
    newCoffees[targetCoffeeIndex] = targetCoffee;
    setCoffees(newCoffees);
  };

  const handleSubmit = () => {
    const newCoffees = coffees.map(coffee => ({ ...coffee, count: 0 }));
    setCoffees(newCoffees);
  };

  const cartItems = coffees.filter(coffee => coffee.count); // >0 is not required because >0 is truthy :)

  const calcTotal = () => cartItems.reduce((sum, coffee) => coffee.count * coffee.price + sum, 0);

  return (
    <div className='container mx-auto my-8 flex flex-col items-center'>
      <img width={500} src={logo} />
      <p className='text-3xl text-[#1E3932] font-bold mb-8'>StarBucks Online Coffee Order</p>

      <div className='grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2'>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        ))}
      </div>

      <p className='text-2xl text-[#1E3932] font-bold my-8'>Bill</p>

      <div className='grid sm:grid-cols-2 md:grid-cols-5 gap-3 mx-2 mb-8'>
        {cartItems.map(coffee => (
          <CoffeeBill key={coffee.id} coffee={coffee} handleDelete={handleDelete} />
        ))}
      </div>
      <p className='text-[#1E3932] text-lg font-bold'>total : ${calcTotal()}</p>
      <button onClick={handleSubmit} className='bg-[#E9C9A2] text-[#1E3932] w-full font-bold text-xl'>
        Submit Order
      </button>
    </div>
  );
}

export default App;
