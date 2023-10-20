const CoffeeCard = ({
  coffee ,
  handleIncrement,
  handleDecrement,
  
}) => {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-2 rounded-md bg-[#1E3932]">
      <div className="p-2">
        <img width={100} className="object-cover" src={coffee.pic} />
      </div>
      <p className="text-white">{coffee.title}</p>
      <p className="text-[#CCA57B] font-bold">${coffee.price}</p>
      <div className="flex items-center justify-between text-[#1E3932] ">
        <button  onClick={()=>handleIncrement(coffee.id)} className="bg-[#E9C9A2] px-2 py-1 ">
          +
        </button>
        <span className="bg-white px-[10px] py-1 w-8">{coffee.count}</span>
        <button
          onClick={()=>handleDecrement(coffee.id)}
          className="bg-[#E9C9A2] px-[10px] py-1"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
