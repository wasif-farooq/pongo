import {
  configureStore,
  getDefaultMiddleware
} from 'redux-starter-kit';
import SocketMiddleware from './Middlewares/SocketMiddleware';
import rootReducer from 'Reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), SocketMiddleware()]
})

window.store = store
export default store