import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST, INIT_LIST} from '../actionTypes';
const defaultState = {
    inputValue: "",
    todoList: []
}
export default function(state = defaultState, action) {
    // 深拷贝 state
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_LIST:
            if (!newState.inputValue || newState.todoList.indexOf(newState.inputValue) !== -1) { return state; }
            newState.todoList.push(newState.inputValue);
            newState.inputValue = "";
            return newState;
        case DELETE_LIST:
            newState.todoList.splice(action.index, 1);
            return newState;
        case INIT_LIST:
            newState.todoList = newState.todoList.concat(action.data);
            return newState;
        default:
            return state;
    }
}