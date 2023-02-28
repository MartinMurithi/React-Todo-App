import React, { useState } from "react";

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const setOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      isComplete:false
    };
    console.log(taskList);
    setTaskList([...taskList, task]);
  };

  const handleDelete = (taskId) => {
    const newTaskList = taskList.filter((task) => {
      if (task.id === taskId) {
        return false; //remove the element
      } else {
        return true;
      }
    });
    console.log(`${taskId} deleted`);
    setTaskList(newTaskList);
  };

  const checkHandle = (taskId) => {
    console.log(`${taskId} is checked`);
    taskList.map(task => {
      if (task.id === taskId) {
        if (task.isComplete === true) {
          return task.isComplete = false;
        } else {
          return task.isComplete = true;
        }
        
      } else {
        return task;
      }
    })
    
  }
  return (
    <div>
      <div className="addTask">
        <input type="text" placeholder="Enter a task" onChange={setOnChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasksDiv">
        {taskList.map((task) => {
          return (
            <div className="taskItem" >
              <input type="checkbox" name="" id="check" onChange={() => checkHandle(task.id)} style={{backgroundColor: task.isComplete=== true ? 'green' : 'red'}}/>
              <h4 className="task">{task.taskName}</h4>
              <button className="edit">EDIT</button>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
