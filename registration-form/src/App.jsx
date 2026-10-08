import { useState } from 'react'

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [submittedForm, setSubmittedForm] = useState(null);

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        setSubmittedForm(form)
        }}>

        <input 
          value={form.name}
          onChange={(event) => setForm({
            ...form,
            name: event.target.value
          })}
          type='text'
          placeholder='Enter your name'
       />

        <br />

        <input 
          value={form.email}
          onChange={(event) => setForm({
            ...form,
            email: event.target.value
          })}
          type='email'
          placeholder='Enter your email'
        />

        <br />

        <input 
          value={form.password}
          onChange={(event) => setForm({
            ...form,
            password: event.target.value
          })}
          type='password'
          placeholder='Enter password'
        />

        <br />
      
        <button type='submit'>Submit</button>

        {submittedForm && (
        <>
          <p>Name: {submittedForm.name}</p>
          <p>Email: {submittedForm.email}</p>
        </>
        )}
 
        <button onClick={() => {
          setForm({
          name: "",
          email: "",
          password: ""
          })

          setSubmittedForm(null)}}
          
          type='button'>
          Reset
        </button>

      </form>

    </>
  )
}

function App() {
  
  return (
    <>
      <RegistrationForm />
    </>
  )
}

export default App
