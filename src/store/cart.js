const initialState = [];

function cartRed(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case 'ADD':
            return state = [...state, payload];
        case 'REMOVE':
            const items = state.filter((i) => i !== payload);
            return (items);
        default:
            return state;
    }
}

export const addTo = (item) => {
    return {
        type: 'ADD',
        payload: item,
    }
}

export const remove = (item) => {
    return {
        type: 'REMOVE',
        payload: item,
    }
}

export default cartRed;