import { useState } from 'react'

function TodoList() {
  const [input, setInput] = useState(""); 

  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo List</h1>

      <input 
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type='text'
        placeholder='Enter a todo'
      />

      <button onClick={() => {
        if(input.trim() !== "") {
          setTodos([...todos, input.trim()]); 
        }
        setInput("")
      }}>Add</button>

      {todos.map((todo) => (
        <p key={todo}>{todo} <button onClick={() => {const newTodos = todos.filter((item) => item !== todo);
          setTodos(newTodos)}}>Delete</button></p>
      ))}

    </>
  )
}

function App() {
  
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
