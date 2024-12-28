// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Cart


import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    // Fetch the cart state from Redux store
    const cart = useSelector((state) => state.handleCart);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.qty}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
