// An action creator is merely a function that returns an action object.
//  ...Calling an action creator does nothing but return an object, 
//  so you have to either bind it to the store beforehand, 
//  or dispatch the result of calling your action creator.

import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    
});

// thunk
export const fetchDishes = () => (dispatch) => {

    dispatch( dishesLoading(true) );

    setTimeout(() => {
        //push the dishes into the state of our store
        dispatch( addDishes(DISHES) )
    }, 2000) //2000 ms
}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess

});


// returns an action
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes

});

