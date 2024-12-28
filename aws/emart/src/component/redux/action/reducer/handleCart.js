// const ADDITEM = "ADDITEM";
// const DELITEM = "DELITEM";

// const cart = [];

// const handleCart = (state = cart, action) => {
//     const product = action.payload;
//     switch (action.type) {
//         case ADDITEM:
//             // CHECK IF ITEM ALREADY EXISTS IN CART
//             const exist = state.find((x) => x.id === product.id);
//             if(exist){
//                 // INCREASE THE QUANTITY
//                 return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
//             }else {
//                 const product = action.payload;
//                 return [
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1,
//                     }
//                 ]
//             }
//             break;

//             case "DELITEM":
//                 const exist1 = state.find((x) => x.id === product.id);
//                 if(exist1.qty === 1){
//                     return state.filter((x) => x.id !== exist1.id);
//                 }else {
//                     return state.map((x)=> x.id === product.id ? {...x, qty: x.qty-1} : x);
//                 }
//                 break;
    
//         default:
//             break;
//     }

// }

// export default handleCart;


// const ADDITEM = "ADDITEM";
// const DELITEM = "DELITEM";

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // CHECK IF ITEM ALREADY EXISTS IN CART
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // INCREASE THE QUANTITY
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }

        default:
            // Return the current state if no action type matches
            return state;
            break;
    }
};

export default handleCart;
