import React, { useState, useEffect } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  // Simulación de carga de datos desde una API con useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1 class="m-4">Lista de tareas</h1>
      {tasks.map((task) => (
        <div class="card bg-secondary m-4" key={task.id}>
          <div class="card-header"></div>
          <div class="card-body">
            <h4 class="card-title">{task.title}</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList