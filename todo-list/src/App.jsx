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
          setTodos([...todos, {
            id: Date.now(),
            text: input.trim(),
            completed: false
          }]); 
        }

        setInput("")

        }}>

        Add
      </button>

      {todos.length === 0 ? <p>No todos yet. Add one!</p> : <p>You have {todos.length} {todos.length === 1 ? "todo" : "todos"}</p>}

      {todos.map((todo) => (
        <p key={todo.id}>

          <button onClick={() => {
            const newTodos = todos.map((item) => {
              if(item.id === todo.id) {
                return {
                  ...item,
                  completed: !item.completed
                }
              }

              return item;
            })

            setTodos(newTodos);
            }}>

            {todo.completed ? "Undo" : "Complete"}
          </button>

          {todo.text} -{'>'} {todo.completed ? "Completed" : "Not Completed"}

          <button 
            onClick={() => {const newTodos = todos.filter((item) => item.id !== todo.id);

            setTodos(newTodos)}}>

            Delete
          </button>

        </p>
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
