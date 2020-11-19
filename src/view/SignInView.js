/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../utils/global/provider/UserProvider'

export const SignInView = () => {
  const history=useHistory()
  const [username, setUsername] = useState("")
  const [passWord, setPassWord] = useState();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const login = () => {
    setAuthenticatedUser(username)
    localStorage.setItem("username", username)
    history.push('/')
  }

  return (
    <div>
      <br></br>
      <span>Username:</span> <input onChange={event => setUsername(event.target.value)} /><br />
      <span>Password :</span><input type="password" onChange={event => setPassWord(event.target.value)} />
      <button onClick={() => login()}>Login</button>
    </div>
  )
}