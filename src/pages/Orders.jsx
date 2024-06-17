/* eslint-disable no-constant-condition */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { ComplexPaginationContainer, Orderlist, SectionTitle } from '../Components';

const ordersQuery = (params,user) => {
    return {
        queryKey:[
            'orders',
            user.username, params.page? parseInt(params.page) : 1,
        ],
        queryFn: () => customFetch.get('/orders',{
            params,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    }
}

export const loader = 
(store, queryClient) => 
async({request}) => {
    //console.log(store);
    const user = store.getState().userState.user;
    
    //restrict access in orders
    if (!user) {
        toast.warn('You must logged in to view orders');
        return redirect('/login');
    }
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    try {
        const response = await queryClient.ensureQueryData(
            ordersQuery(params, user)
        );
        //console.log(response)
        return {
            orders: response.data.data,
            meta: response.data.meta //resuable both in orders page
        };
    } catch(error) {
        console.log(error);
        const errorMessage = 
            error?.response?.data?.error?.message || 
            'there was an error placing your order';
        toast.error(errorMessage);
        if(error?.response?.status === 401 || 403) return redirect('/login');
        return null;
    }
};

const Orders = () => {
    const { meta } = useLoaderData();
    if(meta.pagination.total < 1){
        return (
            <SectionTitle text='please make an oreder' />
        )
    }
    return (
        <>
            <SectionTitle text='Your Oders' />
            <Orderlist />
            <ComplexPaginationContainer />
        </>
    )
};
export default Orders