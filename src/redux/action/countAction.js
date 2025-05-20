import countReducer from "../reducers/countReducer";

export const countIncrement = (payload)=>{
    return {
        type: `INCREMENT`,
        payload,

    };
};
export const countDecrement = (payload) => {
    return {
        type: `DECREMENT`,
        payload,
    };
};