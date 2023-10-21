const CoffeeBill = ({ coffee, handleDelete }) => {
  const { title, price, count, pic } = coffee;

  return (
    <div className='flex flex-col p-4 items-center justify-center gap-2 rounded-md bg-[#1E3932]'>
      <div className='p-2'>
        <img width={100} className='object-cover' src={pic} />
      </div>
      <p className='text-white'>{title}</p>
      <p className='text-[#CCA57B] font-bold'>${price}</p>
      <div className='text-white'>QTY: {count}</div>
      <button className='bg-red-500 px-2 py-1 rounded-xl text-white font-bold' onClick={() => handleDelete(coffee)}>
        Delete
      </button>
    </div>
  );
};

export default CoffeeBill;
