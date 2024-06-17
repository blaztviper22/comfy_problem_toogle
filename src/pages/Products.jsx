/* eslint-disable react-refresh/only-export-components */

import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import { customFetch } from "../utils";

/* eslint-disable no-unused-vars */
const url = '/products';

const allProductsQuery = (queryParams) => {
    const { 
        search, 
        category, 
        company, 
        sort, 
        price, 
        shipping, 
        page 
    } = queryParams;

    return {
        queryKey:[
            'products', search ?? '',
            category ?? 'all',
            company ?? 'all',
            sort ?? 'a-z',
            price ?? 100000,
            shipping ?? false,
            page ?? 1,
        ],
        queryFn: () => customFetch(url, {
            params: queryParams,
        })
    };
};

export const loader = (queryClient) =>
async ({ request }) => {
    //for filtering data
    //console.log(request);
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries() // see thunder client for api's
    ]);
    //console.log(params);

    //for loader data
    const response  = await queryClient.ensureQueryData(allProductsQuery(params)); //just put the filtering params api here!
    const products = response.data.data;
    const meta = response.data.meta;
    //console.log(response);
    return { products, meta, params }; //return the params to fetch using useLoadData!!
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