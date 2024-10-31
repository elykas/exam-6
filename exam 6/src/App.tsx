import { useState } from 'react'
import React from 'react'
import TasksApp from './components/TasksApp/TasksApp'
import "./App.css"

const App:React.FC = () => {
  return (
    <div>
      <TasksApp/>
    </div>
  )
}

export default App