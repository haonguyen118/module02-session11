export const deleteCart = (payload) => {
    return {
        type: "DELETE_CART",
        payload,
    }
}
export const addCart = (payload) => {
    return {
        type: "ADD_CART",
        payload,
    }
}