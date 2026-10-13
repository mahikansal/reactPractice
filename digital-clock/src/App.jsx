import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return() => {
      clearInterval(timer);
    }
  }, [])

  return(
    <div>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

function App() {
  
  return (
    <>
      <Clock />
    </>
  )
}

export default App
