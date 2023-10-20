const CoffeeBill = ({ coffee, handleDelete }) => {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-2 rounded-md bg-[#1E3932]">
      <div className="p-2">
        <img width={100} className="object-cover" src={coffee.pic} />
      </div>
      <p className="text-white">{coffee.title}</p>
      <p className="text-[#CCA57B] font-bold">${coffee.price}</p>
      <div className="text-white">QTY : {coffee.count}</div>
      <button onClick={() => handleDelete(coffee.id)}>x</button>
    </div>
  );
};

export default CoffeeBill;
