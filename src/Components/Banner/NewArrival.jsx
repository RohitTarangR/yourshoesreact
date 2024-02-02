import React from 'react'
import SingleProduct from '../Products/SingleProduct';



const product = [
  {
    id: 1,
    imgUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/h/r/-original-imagtbtdttykgejk.jpeg?q=70&crop=false",
    pTitle: "New Balance",
    lTitle: "520 Running Shoes For Men  (Black)",
  },
  {
    id: 2,
    imgUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/b/j/-original-imagtbtd7mh6vcq6.jpeg?q=70&crop=false",
    pTitle: "New Balance",
    lTitle: "327 Sneakers For Men  (Multicolor)",
  },
  {
    id: 3,
    imgUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/f/l/y/10-gb9944-11-reebok-navy-original-imagq3zpjxnac3ca.jpeg?q=70&crop=false",
    pTitle: "REEBOK",
    lTitle: "Gym Shoes For Men  (Navy)",
  },
  {
    id: 4,
    imgUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/6/q/6/8-394371-puma-black-matte-silver-original-imaghkpenkhn6ahn.jpeg?q=70&crop=false",
    pTitle: "X-Tep",
    lTitle: "Running Shoes For Men  (White)",
  },
];


const NewArrival = () => {
  return (
    <>
    <div className='bg-zinc-100 py-5'>

      <h1 className="flex text-4xl font-bold justify-center m-8">
        New Arrivals
      </h1>

      <div className="flex justify-around mt-16">

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {product.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default NewArrival


