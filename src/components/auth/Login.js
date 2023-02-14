import React, { useState, useContext } from 'react'
import { UserContext } from '../../UserContext'
import {Navigate} from 'react-router-dom'

const Login = () => {

    const {user, setUser} = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        setEmailError('')
        setPasswordError('')

        console.log(email, password)

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'post',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({email,password})
            })
            const data = await res.json()
            if(data.errors){
                let errors = data.errors
                setEmailError(errors.email)
                setPasswordError(errors.password)
            }
            if(data.user){
                setUser(data.user)
            }
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }


    if(user){
        return <Navigate to='/'/>
    }

    return (
        <div className="row">
            <h2>Login</h2>
            <form className="col s12" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="validate" />
                        <div className="email error red-text">{emailError}</div>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="validate" />
                        <div className="email error red-text">{passwordError}</div>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn">Login</button>
            </form>
        </div>

    )
}

export default Login