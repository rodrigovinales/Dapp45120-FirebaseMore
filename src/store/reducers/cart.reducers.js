import { CART } from '../../data/cart'
import { Alert } from 'react-native'
import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART, EMPTY_CART } from '../actions/cart.actions';

const INITIAL_STATE = {
    items: [],
    total: 0,
}

const sumTotal = (list) => list.map(item => item.quantity * item.price).reduce((acc, curr) => acc + curr, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            Alert.alert('Producto Agregado al carrito !!!');
            const indexItem = state.items.findIndex(item => item.id === action.item.id);
            if (indexItem === -1) {
                const item = { ...action.item, quantity: 1 };
                const updatedCart = [...state.items, item];
                return {
                    ...state,
                    items: updatedCart,
                    total: sumTotal(updatedCart)
                }
            }

            const items = [...state.items].map(item => {
                if (item.id === action.item.id) item.quantity++;
                return item;
            });
            return {
                ...state,
                items,
                total: sumTotal(items)
            }
        case REMOVE_ITEM:
            const cleanCart = [...state.items].filter(item => item.id !== action.itemID);
            return {
                ...state,
                items: cleanCart,
                total: sumTotal(cleanCart)
            }
        case CONFIRM_CART:
            return state;
        case EMPTY_CART:
            const emptyCart = { items: [], total: 0 }
            return emptyCart;
        default:
            return state;
    }
}

export default CartReducer