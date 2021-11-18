import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useStateValue } from '../stateprovider/StateProvider';
import './Login.css'


function Login() {
    const [{ basket, users, currentUser }, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        users.map(user => {
            if (user.password === password && email === user.email) {
                dispatch({
                    type: "SET_CURRENT_USER",
                    item: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        items: user.items,
                        pay: user.pay
                    }
                })
                dispatch({
                    type: "Set_BASKET",
                    item: user
                })
            }
        })
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <div className="login_head">Sign-in</div>
                <form >
                    <label>E-mail</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Link to='/home'>
                        <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                    </Link>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/register'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
