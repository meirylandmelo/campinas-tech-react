import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStateToDo = {
    arrayToDo: []
}

function reduceToDo(state = initialStateToDo, action: any) {
    switch(action.type) {
        case 'GET_TO_DO' :
            return {
               arrayToDo: action.payload
            }
        default:
            return state
    }
}

const initialStateUsers = {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}

function reduceUsers(state = initialStateUsers, action: any) {
    switch(action.type) {
        case 'GET_USERS' :
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            }
        default:
            return state
    }
}

const createRootReducer = () => combineReducers({
    toDo: reduceToDo,
    users: reduceUsers
 })

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }