import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    //console.log("Counter Increase");
  }, [count]);

  useEffect(() => {
    return() => {
      document.title = "My React App";
      //console.log("Title");
    }
  },[])

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count+1)}>
        Increase
      </button>
    </>
  )
}

function App() {
  
  return (
    <>
      <Counter />
    </>
  )
}

export default App
