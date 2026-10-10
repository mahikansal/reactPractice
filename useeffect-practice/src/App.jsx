import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count])

  // useEffect(() => {
  //   console.log("Counter component mounted");
  // },)

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  },[]);

  return (
    <>
      <p>Count: {count}</p>
      
      <button onClick={() => setCount(count+1)}>
        Increase
      </button>

      <br />
    </>
  )
}

function Component() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <Counter />}
    </>
  )
}

function NameTracker() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log("Name changed:", name)
    console.log("Age change:", age)
  },[name, age])

  return (
    <>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type='text'
        placeholder='Enter your name' 
      />

      <input
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder='Enter your age' 
      />      

      <p>Hello, {name}</p>
      <p>Your age is, {age}</p>
    </>
  )
}

function App() {
  
  return (
    <>
      <Counter />
      <Component />
      <NameTracker />
    </>
  )
}

export default App