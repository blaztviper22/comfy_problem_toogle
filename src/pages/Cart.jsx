/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { SectionTitle } from '../Components';

const Cart = () => {
    // temp
    const user = null;
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

    if(numItemsInCart === 0){
        return(
            <SectionTitle text='Your cart is empty' />
        )
    }
    return (
        <>
            <SectionTitle text='Shopping cart' />
            <div className="mt-8 grid gap-8 lg: grid-cols-12">
                <div className="lg"></div>
            </div>
        </>
    )
};
export default Cart