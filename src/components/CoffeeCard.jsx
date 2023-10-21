const CoffeeCard = ({ coffee, handleIncrement, handleDecrement }) => {
  const { title, price, count, pic } = coffee;

  return (
    <div className='flex flex-col p-4 items-center justify-center gap-2 rounded-md bg-[#1E3932]'>
      <div className='p-2'>
        <img width={100} className='object-cover' src={pic} />
      </div>
      <p className='text-white'>{title}</p>
      <p className='text-[#CCA57B] font-bold'>${price}</p>
      <div className='flex items-center justify-between text-[#1E3932] '>
        <button onClick={() => handleIncrement(coffee)} className='bg-[#E9C9A2] px-2 py-1 '>
          +
        </button>
        <span className='bg-white px-[10px] py-1 w-8'>{count}</span>
        <button onClick={() => handleDecrement(coffee)} className='bg-[#E9C9A2] px-[10px] py-1'>
          -
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
