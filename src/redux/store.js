import {createStore} from "redux"
import reducers from "./reducers/index"
import { createStoreHook } from "react-redux"

const store = createStore(
    reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store