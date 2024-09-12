// pages/index.js
import Image from 'next/image';

const categories = [
  { name: 'Restaurants', image: '/image/restaurant.jpg' },
  { name: 'Hotels', image: '/image/hotel.jpg' },
  { name: 'Beauty Spa', image: '/image/beauty.jpg' },
  { name: 'Home Decor', image: '/image/home.jpg' },
  { name: 'Rent & Hire', image: '/image/rent.jpg' },
  { name: 'Contractors', image: '/image/contract.jpg' },
  { name: 'Pet Shops', image: '/image/pet.jpg' },
  { name: 'Gym', image: '/image/gym.jpg' },
  { name: 'Dentist', image: '/image/dentist.jpg' },
  { name: 'Consultant', image: '/image/cons.jpg' },
  { name: 'Event Planner', image: '/image/event.jpg' },
  { name: 'Packer and Mover', image: '/image/packer.jpg' },
  { name: 'Salon', image: '/image/salon.jpg' },
  { name: 'Jewellery', image: '/image/jew.jpg' },
];

export default function Home() {
  return (
    <div className='flex justify-center items-center overflow-x-hidden'>
        {/* business catalogs  */}
            <div className=' '>

        <div className='relative  w-[299px] '>
        {/* Red underline */}
        <div className='absolute w-[281px] h-[2px] rounded-sm mt-2 bg-red-500 top-[48px] left-4'></div>
        <div className='absolute w-[1192px] h-[1px] rounded-md mt-2.5 bg-[#EDEDED]  top-[48px] left-4'></div>
        {/* Text section */}
        <div className="w-[375px] h-[30px] container mx-auto px-4 py-8  ">
            <h1 className="text-[#666666] font-ubuntu text-xl font-medium leading-7 text-left">
            Business Listing 
            <span className="font-ubuntu text-xl font-bold leading-7 text-left text-red-500"> Top Categories</span>
            </h1>
        </div>
        </div>

       
        <div className="flex justify-center items-center px-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 pt-4">
    {categories.map((category) => (
      <div key={category.name} className="text-center w-[131px] h-[172px]">
        <div className="relative w-24 h-24 mx-auto mb-3">
          <Image
            src={category.image}
            alt={category.name}
            className="rounded-full border-[1px] border-[#F5F5F5] hover:border-red-500 transition"
            layout="fill"
            objectFit="none"
          />
        </div>
        <p className="text-[#222222] font-ubuntu text-base font-medium leading-5 text-center">
          {category.name}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
    </div>

    
  );
}













