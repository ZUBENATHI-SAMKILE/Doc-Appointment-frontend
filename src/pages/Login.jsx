import React, { useState } from 'react'

const Login = () => {


  const [state, setState] = useState('Sign up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName ] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

  }

  return (
    <form className='Form_con'>
      <div className='Form_dv'>
        <p>{state === 'Sign up' ? 'Create Acount' : 'Login' }</p>
        <p>Please {state == 'Sign up' ? 'sign up' : 'log in' } to book appointment </p>

        <div>
          <p>Full Name</p>
          <input type="text" onChange={(e)=> setName(e.target.name)} value={name} required/>
        </div>
        <div>
          <p>Email</p>
          <input type="email" onChange={(e)=> setEmail(e.target.name)} value={email} required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e)=> setPassword(e.target.name)} value={password} required/>
        </div>

        <button> {state === 'Sign up' ? 'Create Acount' : 'Login' }</button>
      </div>

    </form>
  )
}

export default Login