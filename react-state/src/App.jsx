import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count+1)}>
        Increase
      </button>

      <button onClick={() => setCount(count-1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

function Toggle() {
  const [isValue, setValue] = useState(false);

  return (
    <>
      <p>Status: {isValue ? "ON" : "OFF"}</p>

      <button onClick={() => setValue(!isValue)}>
        {isValue ? "Turn OFF" : "Turn ON"}
      </button>
    </>
  )
}

function Greeting() {
  const [currName, setCurrName] = useState("");
  
  return (
    <>
      <input onChange={(event) => setCurrName(event.target.value)}
        type='text'
        placeholder='Enter your name'
      />

      <p>Hello, {currName}</p>
    </>
  )
}

function GreetingII() {
  const [inputName, setInputName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  return (
    <>
      <input onChange={(event) => setInputName(event.target.value)}
      value={inputName}
        type='text'
        placeholder='Enter your name'
       />

       <button onClick={() => setSubmittedName(inputName)}>Submit</button>

       <button onClick={() => {setInputName(""); setSubmittedName("")}}>Clear</button>

       <p>Hello, {submittedName}</p>
    </>
  )

}

function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <Greeting />
      <GreetingII />
    </>
  )
}

export default App
