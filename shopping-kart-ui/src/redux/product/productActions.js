import {PRODUCT_LIST, PRODUCT_LIST_SUCCESS} from './productTypes'
import axios from 'axios'


export const productList = () => {

    return (dispatch) => {
        dispatch({
            type: PRODUCT_LIST
        })
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

}