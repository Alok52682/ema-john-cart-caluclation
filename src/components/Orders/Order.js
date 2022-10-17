import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const removeItem = (id) => {
        const remainProduts = cart.filter(product => product.id !== id);
        setCart(remainProduts);
        removeFromDb(id)
    }

    return (
        <div className="shop-container">
            <div className='orders-container'>
                <div>
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} handle={removeItem}></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No Items For Review</h2>
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Order;