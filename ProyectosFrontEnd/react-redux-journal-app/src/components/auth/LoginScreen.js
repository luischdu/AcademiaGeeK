import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';

import {startLoginEmailPassword, startGoogleLogin} from '../../actions/auth'


export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const {loading} = useSelector(state => state.ui)

 const [formValues, handleInputChange] = useForm({
     email:'chdluism@gmail.com',
     password: '123456'
 })

 //desestructuramos
  const {email, password} = formValues;

  const handleLogin = (e) => {
      e.preventDefault();
      dispatch(startLoginEmailPassword(email,password))
      console.log(email,password);
  }


const handleGoogle =()=>{
    dispatch(startGoogleLogin())
}

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                 disabled={loading}
                    
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text"
                        onClick={handleGoogle}
                        >
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
