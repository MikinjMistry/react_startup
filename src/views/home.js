import React, { Component } from 'react';
import TaskFrom from './../shared/taskForm';
import TaskList from './../shared/taskList';
class Home extends Component {
    render() {
        return (
            <div>
                <TaskFrom />
                <TaskList />
            </div>
        );
    }
}

export default Home;