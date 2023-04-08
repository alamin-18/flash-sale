import React from 'react';
import { StarIcon, ShoppingBagIcon, EyeIcon,  HeartIcon, ArrowsUpDownIcon } from '@heroicons/react/24/solid'


const Product = ({ product }) => {

    return (
        <div className='group/item relative h-[508px] w-[280px] border-solid border-2  border-[#F2F2F2]' >
            <div className='p-4'>
            {product.new ? <span className='text-[#DB2F06] p-2 text-center bg-[#FAE8E4]'>New</span>:<span className='p-2 text-center bg-[#f5eded]'>Sale</span>
            
        }
        <img className='w-full' src={product.image} alt="" />
        <div className='px-4'>
            <h4 className='text-[12px] mb-2 text-[#8B928F]'>{product.catagory}</h4>
            <p className='text-[16px] font-medium mb-2'>{product.description}</p>
            <div className='flex mb-2'>
                <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                <span className='text-[#8B928F]'>
                    ({product.rating})</span>
            </div>

            <div className='flex flex-grow-0 gap-2  mb-2'>
                <h2 className='text-[#5B9982] text-[16px] font-bold' >$ {product.salePrice}.00</h2>
                <h2 className='text-[#A3A9A7] text-[12px] font-medium'><del>$ {product.price}.00</del></h2>
            </div>

        </div>
        {/* hover item */}
        <div className="absolute bottom-16 group/edit h-14 w-full  invisible border-solid border-y-2  border-[#F2F2F2] bg-white group-hover/item:visible ..." >
            <div className='flex py-4 justify-around'>
            <span className="group-hover/edit:text-black ..."><EyeIcon className="h-6 w-6" ></EyeIcon></span> | 
            <span className="group-hover/edit:text-black ..."><HeartIcon className="h-6 w-6"></HeartIcon></span> |
            <span className="group-hover/edit:text-black ..."><ArrowsUpDownIcon className="h-6 w-6"></ArrowsUpDownIcon></span>
            </div>

        </div>
        {/* hover item */}
        <div className='flex justify-center items-center'>

            <button className='bg-[#daece2] w-[240px] h-[49px] flex items-center justify-center gap-2 text-[#5B9982] text-[15px] font-bold'><span>Add To Cart</span> <ShoppingBagIcon className="h-6 w-6 text-center"></ShoppingBagIcon> </button>
        </div>
            </div>
        </div>
    );
};

export default Product;