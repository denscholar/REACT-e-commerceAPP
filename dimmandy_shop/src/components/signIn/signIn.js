import './signIn.css';

import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButon from '../cutomButton/cutomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
                    <FormInput type="password" name='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />
                    <div className="buttons">
                        <CustomButon type="submit" value='submit form' > Sign In</CustomButon>
                        <CustomButon onClick={signInWithGoogle} isGoogleAuth > Sign In with Google</CustomButon>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn;
