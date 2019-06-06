import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import {getInputValueChangeAction, getAddListAction, getDeleteListAction, getSagaAction} from './actionCreators';
import { connect } from 'react-redux';
class ToDo extends React.Component {
    render() {
        const { inputValue, changeHandle, addListHandle, todoList, deleteListHandle } = this.props;
        return (
            <div style={{padding: "10px"}}>
                <Input style={{width: "300px"}} onChange={changeHandle} value={inputValue} size="large" placeholder="todo"/>
                <Button onClick={addListHandle} style={{height: "40px", verticalAlign: "top", marginLeft: "10px", width: "80px"}} type="primary">add</Button>
                <List
                    style={{marginTop: "10px", width: "390px"}}
                    bordered
                    dataSource={todoList}
                    renderItem={(item, index) => <List.Item onClick={()=>{deleteListHandle(index)}}>{item}</List.Item>}
                />
            </div>
        )
    }

    // 从接口获取数据给todoList一些初始值
    // 模拟mock
    // 使用asixo
    componentDidMount() {
        this.props.initListHandle()
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        todoList:  state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandle(e) {
            dispatch(getInputValueChangeAction(e.target.value))
        },
        addListHandle() {
            dispatch(getAddListAction())
        },
        deleteListHandle(index) {
            dispatch(getDeleteListAction(index))
        },
        initListHandle() {
            dispatch(getSagaAction())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ToDo);