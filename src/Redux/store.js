import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import loginReducer from "./Login Redux/reducer"
import linkedInReducer from "./LinkedIn Redux/reducer"
const rootReducer = combineReducers({
    login:loginReducer,
    linkedIn:linkedInReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))
export {store,rootReducer}