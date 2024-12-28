// For Add item to cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}


// For Delete item from cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}