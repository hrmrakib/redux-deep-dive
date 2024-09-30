import React from 'react'
import { useSelector } from 'react-redux'
const About = () => {
    const todos = useSelector((state) => state.todo.todos)
  return (
    <div>
        {todos.map((todo,i)=> <h3 id={todo.id}>{`${i+1}: ${todo.text}`}</h3>)}
    </div>
  )
}

export default About