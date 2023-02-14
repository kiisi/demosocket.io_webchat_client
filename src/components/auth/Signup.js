import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        setNameError('')
        setEmailError('')
        setPasswordError('')

        console.log(name, email, password)

        try {
            const res = await fetch('http://localhost:5000/signup', {
                method: 'post',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({name,email,password})
            })
            const data = await res.json()
            if(data.errors){
                let errors = data.errors
                setNameError(errors.name)
                setEmailError(errors.email)
                setPasswordError(errors.password)
            }
            if(data.user){
                navigate('/login')
            }
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }

    

    return (
        <div className="row">
            <h2>Signup</h2>
            <form className="col s12" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="validate" />
                        <div className="email error red-text">{nameError}</div>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
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
                <button className="btn">Sign up</button>
            </form>
        </div>

    )
}

export default Signup