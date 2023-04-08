import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import banner from '../../../image/banner.png'


const Products = () => {
    const [products,setProducts] =useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);
    return (
        <div className='grid grid-cols-[4fr,1fr]'>
            <div className='ml-24 grid grid-cols-5 gap-4'>
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Products;