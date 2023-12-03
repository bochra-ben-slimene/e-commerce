import React from 'react'

export default function Login(props) {
    const { loginFn, password, email, setPassword, setEmail } = props;
    return (
        <div className='loginContainer row m-auto mt-5'>
            <h1 className='titre_login mb-5'>Login</h1>
            {/* <div className="mb-3 col-12">
                <label>Email : </label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="mb-3 col-12">
                <label>Password : </label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            <button onClick={loginFn} >Login</button> */}

            <form>
                <div className="mb-3 text-align-left">
                    <label className="form-label">Email :</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3  text-align-left">
                    <label className="form-label">Password :</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                
                <button  className="btn btn-primary" onClick={loginFn} >Login</button>
            </form>











        </div>
    )
}
