import React from 'react'

export default function Login(props) {
    const { loginFn, password, email, setPassword, setEmail } = props;
    return (
        <div className='loginContainer'>
            <h3>Login</h3>
            <label>Email : </label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password : </label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={loginFn} >Login</button>
        </div>
    )
}
