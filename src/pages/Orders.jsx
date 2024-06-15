/* eslint-disable no-constant-condition */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { Orderlist, PaginationContainer, SectionTitle } from '../Components';

export const loader = 
(store) => 
async({request}) => {
    //console.log(store);
    const user = store.getState().user;
    
    //restrict access in orders
    if (!user) {
        toast.warn('You must logged in to view orders');
        return redirect('/login');
    }
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    try {
        const response = await customFetch.get('/orders',{
            params,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        //console.log(response)
        return {
            order: response.data.data,
            meta: response.data.meta //resuable in orders page
        };
    } catch(error) {
        console.log(error);
        const errorMessage = 
            error?.response?.data?.error?.message || 
            'there was an error placing your order';
        toast.error(errorMessage);
        if(error.response.status === 401 || 403) return redirect('/login');
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
            <PaginationContainer />
        </>
    )
};
export default Orders