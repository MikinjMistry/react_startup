import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../action/';

class TaskForm extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let input
        let dispatch = this.props.dispatch;
        return (    
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    Add a new item:
                    <input type='text' ref={node => input = node}/>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}
export default connect()(TaskForm);