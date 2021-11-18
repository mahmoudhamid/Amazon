import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useStateValue } from '../stateprovider/StateProvider';
import './Register.css'


function Register() {
    const [{ basket, users, currentUser }, dispatch] = useStateValue();
    const [newUser, setNewUser] = useState({ name: '', email: '', password1: '', password2: '' })
    let name = newUser.name;
    let email = newUser.email;
    let password1 = newUser.password1;
    let password2 = newUser.password2;

    const register = (e) => {
        e.preventDefault();
        console.log(name, email, password1, password2);
        if (name !== '' && email !== '' && password1 !== '' && password2 !== '') {
            let found = false;
            users.map(user => {
                if (email === user.email) {
                    found = true;
                }
            })
            if (!found) {
                dispatch({
                    type: "SET_NEW_USER",
                    user: {
                        id: users.length + 1,
                        name: newUser.name,
                        email: newUser.email,
                        password: newUser.password1,
                        items: [],
                        pay: 0
                    }
                });
                dispatch({
                    type: "SET_CURRENT_USER",
                    item: {
                        id: users.length + 1,
                        name: newUser.name,
                        email: newUser.email,
                        password: newUser.password1,
                        items: [],
                        pay: 0
                    }
                })
            }
            else {
                console.log('this user is already there')
            }
        }

        // users.map(user => {
        //     if (user.password === password && email === user.email) {
        //         dispatch({
        //             type: "SET_CURRENT_USER",
        //             item: {
        //                 id: user.id,
        //                 name: user.name,
        //                 email: user.email,
        //                 password: user.password,
        //                 items: user.items,
        //                 pay: user.pay
        //             }
        //         })
        //         dispatch({
        //             type: "Set_BASKET",
        //             item: user
        //         })
        //     }
        // })
    }


    return (
        <div className='register'>
            <Link to='/Amazon/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='register__container'>
                <div className="register_head">Create account</div>

                <form onSubmit={register} >
                    <label>Your name</label>
                    <input type='text' value={name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />

                    <label>E-mail</label>
                    <input type='text' value={email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />

                    <label>Password</label>
                    <input type='password' value={password1} onChange={e => setNewUser({ ...newUser, password1: e.target.value })} />

                    <label>Re-enter password</label>
                    <input type='password' value={password2} onChange={e => setNewUser({ ...newUser, password2: e.target.value })} />

                    {/* <Link to='/Amazon/'> */}
                    <button type='submit' className='register__registerButton'>Register</button>
                    {/* </Link> */}

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/login'>
                    <button className='register__signInButton'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Register
