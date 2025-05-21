const initialState = [{
    id: 1,
    product:{
        id: 1,
        name: "Pizza",
        image: "../public/img/pizza.jpg",
        price: 30,
        quantity: 0,
        detail: "Delicious cheese pizza, crispy thin crust.",
        disabled: true,
    },
    quantity:5
}, {
    id: 2,
    product:{
        id: 2,
        name: "Hamburger",
        image: "../public/img/Hamburger.jpg",
        price: 15,
        detail: "American beef burger, with vegetables and special sauce.",
    
        quantity: 4,
    },
    quantity: 2
}];
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_CART":
            return state.filter((item) => item.id !== action.payload); 
        case "ADD_CART":
            let cloneCart = [...state]
            let cartItem = cloneCart.find((el) => {
                return el.product.id === action.payload.product.id

            });
            if (cartItem) {
                cartItem.quantity += +action.payload.quantity
            } else {
                cartItem = {
                    id: new Date().getTime(),
                    product: action.payload.product,
                    quantity: +action.payload.quantity,
                }
                cloneCart.push(cartItem);
        
            }
            console.log(action.payload);
            
            return cloneCart;
        default:
            return state;
    }
    
    
}
export default cartReducer;