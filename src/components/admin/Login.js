import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// import '../styles/Login.css';
import { connect } from 'react-redux';
import { login, clearLoginError } from "../../actions/admin/userActions";
import { useNavigate } from 'react-router-dom';

function Login({login, clearLoginError, loginError}) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username required')
      .min(3, 'Username must be at least 3 characters long'),
    password: yup
      .string()
      .required('Password required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  useEffect(() => {
    formSchema.isValid(user).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formSchema,user]);

  const validate = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.message,
        });
      });
  };

  const textBoxChanges = e => {
    e.persist();
    validate(e);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = e => {
    e.preventDefault();
    login(user, setUser, go)
  };

  const go = (id) => {
    navigate(`/admin/${id}/dashboard`)
  }

  return (
      <div className='login-outer-div'>
         <form 
            onSubmit={formSubmit} 
            className="form-container"
            autoComplete='off'>
            <h2>Login</h2>
            <label htmlFor="username">Username<br />
            <input
                name="username"
                id="username"
                type="text"
                onChange={textBoxChanges}
                value={user.username}
                placeholder="At least 3 characters long" 
            />
            </label><br />
            <div className="username-error">
                {errors.username.length > 0 ? (
                    <p className="username-error-p">{errors.username}</p>
                ) : null}
            </div >
            <label htmlFor="password">Password<br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    onChange={textBoxChanges}
                    value={user.password}
                    placeholder="At least 6 characters long" 
                />
            </label><br />
            <div className="password-error">
                {errors.password.length > 0 ? (
                    <p className="password-error-p">{errors.password}</p>
                ) : null}
            </div>
            <div className='button-div'>
               <button 
                    disabled={buttonDisabled}
                    className={buttonDisabled?"disabled":""}>Login</button> 
            </div>
        </form>
        <div className="already-signedup">
            <p>Not an Admin?</p>
            <button onClick={() => navigate("/")}>Signup</button> 
        </div>
        {loginError ? (
                <div className='login-error'>
                    <div className='login-error-inner'>
                        <p className="login-error-text">{loginError}</p>
                    <button 
                    className='close-login-error'
                    onClick={() => clearLoginError()}>X</button>  
                    </div>
                </div> 
            ) : null}  
      </div>
  );
}

const mapStateToProps = state => {
    return {
        loginError : state.userReducer.loginError
    }
}

export default connect( mapStateToProps, { login, clearLoginError } )( Login )
