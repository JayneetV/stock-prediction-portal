import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {AuthContext} from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loding, setloding] = useState(false)
  const [error, seterror] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn, setisLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    setloding(true)

    const userData = {username, password}
    console.log(userData);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      console.log('Login Successful !');
      setisLoggedIn(true)
      navigate('/')
    } catch (error) {
      seterror("Invalid credentials")
      console.log("Response error: ", error);
    } finally {
      setloding(false)
    }

  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-light-dark p-5 rounded'>
            <h1 className="text-light text-center mb-4">Login to our Portal</h1>

            <form onSubmit={handleLogin}>

              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => (setUsername(e.target.value))} />

              </div>

              <div className="mb-3">
                <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e) => (setPassword(e.target.value))} />

              </div>

              {error && <div className='text-danger'>{error}</div>}

              {loding ? (
                <button type='submit' className='btn btn-info d-block mx-auto' disabled>Loging in...</button>
              ) : (
                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
              )}

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
