import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './../action/';
class TaskList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        const { todo, dispatch: dispatch,deleteTodo } = this.props;
        return (
            <div>
                <h2>List of task:</h2>
                <hr />
                <ul>
                    {
                        todo.map((obj, key) => <li key={obj.id}>
                            <span>
                                {obj.text}
                            </span>
                            <span>
                                <button type='button' onClick={
                                    () => {
                                        deleteTodo(key)
                                    }
                                } >X</button>
                            </span>
                        </li>)
                    }
                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todoReducer
    }
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);