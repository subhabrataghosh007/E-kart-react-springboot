import {PRODUCT_LIST, PRODUCT_LIST_SUCCESS} from './productTypes'

const intitialState = {
    loading: false,
    product: {}
}

const productReducer = (state = intitialState, action) => {

    switch (action.type) {
        case PRODUCT_LIST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        default:
            return state
    }
}

export default productReducer