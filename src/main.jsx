import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './TaskList';
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList />
    {/* <App /> */}
  </React.StrictMode>,
)
