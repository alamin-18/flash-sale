import React from 'react';

const Product = ({product}) => {
    
    return (
        <div className='h-[508px] w-[280px]' >
            <img src={product.image} alt="" />
            <div>
                <h4>{product.catagory}</h4>
                <p>{product.description}</p>
                <span>{product.rating}</span>
                <h2>{product.salePrice}</h2>
                <h2>{product.price}</h2>
            </div>
            
        </div>
    );
};

export default Product;