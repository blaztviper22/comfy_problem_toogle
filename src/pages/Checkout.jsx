/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, Cartotals } from '../Components';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

//route protection in checkout
export const loader = 
store => 
    () => {
        const user = store.getState().userState.user;
        if(!user){
            toast.warn('You must be logged in to checkout');
            return redirect('/login');
        }
        return null;
}

const Checkout = () => {
    const cartTotal = useSelector((state) => state.cartState.cartTotal);
    if(cartTotal === 0){
        return <SectionTitle text='Your cart is empty' />
    }
    return (
        <>
            <SectionTitle text='Place your order' />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutForm />
                <Cartotals />
            </div>
        </>
    )
};
export default Checkout