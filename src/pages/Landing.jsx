/* eslint-disable react-refresh/only-export-components */
import { FeaturedProducts, Hero } from "../Components";
import { customFetch } from "../utils";

const url = '/products?featured=true';

export const loader = async () => {
    const response = await customFetch(url);
    const products = response.data.data;

    console.log(response);
    return {products};
};

const Landing = () => {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    )
};
export default Landing
