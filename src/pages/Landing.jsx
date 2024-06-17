/* eslint-disable react-refresh/only-export-components */
import { FeaturedProducts, Hero } from "../Components";
import { customFetch } from "../utils";

const url = '/products?featured=true';

const FeaturedProductsQuery = {
    queryKey:['featuredProducts'],
    queryFn: () => customFetch(url)
}

export const loader = (queryClient) => async () => {
    const response = await queryClient.ensureQueryData(FeaturedProductsQuery);
    //console.log(response); check the useage of react query here
    const products = response.data.data;

    //console.log(response);
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
