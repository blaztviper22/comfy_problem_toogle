/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async ({params}) => {
    const response = await customFetch(`/products/${params.id}`);

    console.log(response);
    
    return {product:response.data.data};
}

const SingleProduct = () => {
    const { product } = useLoaderData();
    const { image, title, price, description, colors, company } = product.attribute;
    const dollarsAmount = formatPrice(price);
    console.log(product);

    return <h1 className='text-4xl'>SingleProduct</h1>
};
export default SingleProduct