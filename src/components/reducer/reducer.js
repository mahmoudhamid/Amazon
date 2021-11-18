import { users, items } from '../../data'

export const initialState = {
    basket: [],
    users: users,
    currentUser: {},
    currentProduct: {},
    items: items
}

export const reducer = (state, action) => {
    // console.log(action.item);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            newBasket = newBasket.filter(basketItem => action.id !== basketItem.id)
            // const index = state.basket.findIndex(
            //     (basketItem) => basketItem.id === action.id
            // );
            // let newBasket = [...state.basket];
            // if (index >= 0) {
            //     newBasket.splice(index, 1);
            // }
            // else {
            //     console.warn(`Cant Remove Product (id : ${action.id}) as it is not in the basket`)
            // }
            return {
                ...state,
                basket: newBasket
            };
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.item]
            };
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: { ...action.item }
            };
        case "Set_BASKET":
            console.log(action.item.items);
            return {
                ...state,
                basket: [...action.item.items]
            }
        case "UPDATE_BASKET":
            let newUsers = [...state.users];
            // console.log(state.users);
            let current = { ...state.currentUser }
            newUsers = users.filter(user => {
                return (user.id !== state.currentUser.id)
            });
            current.items = [...state.basket];
            newUsers.push(current)
            return {
                ...state,
                users: [...newUsers],
                currentUser: { ...current }
            }
        case "SET_CURRENT_PRODUCT":
            // console.log(action.item.title);
            return {
                ...state,
                currentProduct: { ...action.item }
            }
        case "SET_NUM":
            let modBasket = [...state.basket];
            modBasket.map(i => {
                if (action.id === i.id) {
                    i.num = action.num;
                }
            })
            return {
                ...state,
                basket: [...modBasket]
            }
        case "SET_NEW_USER":
            let arr = [...users];
            arr.push(action.user);
            console.log(arr);
        default:
            return {
                ...state,
                users: [...arr]
            }
    }
}