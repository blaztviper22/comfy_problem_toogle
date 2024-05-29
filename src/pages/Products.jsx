/* eslint-disable react-refresh/only-export-components */

import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import { customFetch } from "../utils";

/* eslint-disable no-unused-vars */
const url = '/products';
export const loader = async ({ request }) => {
    const response  = await customFetch(url);
    const products = response.data.data;
    const meta = response.data.meta;
    console.log(response);
    return { products, meta };
};

const Products = () => {
    return (
        <>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </>
    )
};
export default Products