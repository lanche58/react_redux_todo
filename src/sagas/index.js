import axios from 'axios';
import { INIT_LIST_SAGA } from '../actionTypes';
import { takeEvery, put } from 'redux-saga/effects';
import { getInitialListAction } from '../actionCreators';

function* getInitList() {
    try {
        const res = yield axios.get('/todo.json');
        const action = getInitialListAction(res.data);
        yield put(action);
    } catch(err) {
        console.log(err);
    }
}

export default function* sagas() {
    // 接受到的action，与第一参数做比较，相同的话执行fetchUser函数
    yield takeEvery(INIT_LIST_SAGA, getInitList); 
}