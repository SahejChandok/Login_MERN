import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="">
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0'
            onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0'
            onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
        </form>

      </div>

    </div>
  )
}

export default App
