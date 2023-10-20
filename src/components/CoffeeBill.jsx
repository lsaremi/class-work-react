const CoffeeBill = ({ pic, price, title, count }) => {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-2 rounded-md bg-[#1E3932]">
      <div className="p-2">
        <img width={100} className="object-cover" src={pic} />
      </div>
      <p className="text-white">{title}</p>
      <p className="text-[#CCA57B] font-bold">${price}</p>
      <div className="text-white">QTY : {count}</div>
    </div>
  );
};

export default CoffeeBill;
