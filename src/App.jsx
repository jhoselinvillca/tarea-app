import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';


useState([]); // Mi lista esta vacia siendo un array
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');

    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);




  };

  return (
    <>
      <div >
        <div >
          <h1>-TO-DO-LIST-</h1>
        </div>
        <div>
          <div class="input-group mb-3">
            <input value={newTask} onChange={handleInputChange} type="text" class="form-control" placeholder="Add task" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button type="button" class="btn btn-outline-success" onClick={handleAddTask}>Save</button>
         </div>
       </div>
        <div>
          {tasks.length > 0 && <div> <p class="text-primary"> List of task </p></div>}
          <ul>
            {tasks.map((task, index) => (

              <li class="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button onClick={() => handleDeleteTask(index)} type="button" class="btn btn-outline-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default App
