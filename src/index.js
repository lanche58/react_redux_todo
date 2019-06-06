import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './todo';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    // Provider组件下的所有组件都有能力获取store的数据
    <Provider store={store}>
        <ToDo/>
    </Provider>, 
    document.getElementById('root')
);
