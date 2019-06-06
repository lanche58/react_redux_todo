import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
const sageMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, sageMiddleware),
  // other store enhancers if any
);
const store = createStore(reducer,
    // 使用中间件
    enhancer
    // 启动redux-devtools工具
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sageMiddleware.run(sagas);

export default store;
