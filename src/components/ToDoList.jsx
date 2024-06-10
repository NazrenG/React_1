import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    tasks: [],
    newTask: "",
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim()) {
      this.setState({
        tasks: [, newTask],
        newTask: "",
      });
    }
  };

  removeTask = (index) => {
    const filterArr = this.state.tasks.filter((_, i) => i !== index);
    this.setState({
      tasks: filterArr,
    });
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div>
        <h1>ToDoList</h1>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Əlavə et</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
