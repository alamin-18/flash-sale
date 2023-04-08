import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import banner from '../../../image/banner.png'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    // countdown
    const countDownDate = new Date("april 11, 2023, 00:00:00").getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    
    return (
        <div>
            <div className='flex gap-4  items-center'>
            <h1 className='text-4xl'><span className='font-bold'>Flash</span> Sale Product</h1>
            <h1 className='text-[#554FA6] text-[14px] font-bold'><span className='bg-[#D3D1F3] px-2 py-[6px] border rounded-md'>{days}d</span> : <span className='bg-[#D3D1F3] px-2 py-[6px] border rounded-md'>{hours}h</span> : <span className='bg-[#D3D1F3] px-2 py-[6px] border rounded-md'>{minutes}m</span> : <span className='bg-[#D3D1F3] px-2 py-[6px] border rounded-md'>{seconds}</span></h1>
            </div>
            <div className='grid gap-2 grid-cols-[4fr,1fr]'>
                <div className='grid grid-cols-5 gap-4'>
                    {
                        products.map(product => <Product product={product} key={product._id}></Product>)
                    }
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Products;