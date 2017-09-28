import { todoReducer } from './todoReducer';
import * as Redux from 'redux';

const configureStore = () => {
  // const store = createStore(rootReducer)
  const store = Redux.createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./todoReducer', () => {
        store.replaceReducer(todoReducer)
      })
    }
  }

  return store
}

export default configureStore
