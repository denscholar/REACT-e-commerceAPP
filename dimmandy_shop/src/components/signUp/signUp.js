import './signUp.css';
import FormInput from '../formInput/formInput';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButon from '../cutomButton/cutomButton';

import React, { Component } from 'react'
// import { async } from '@firebase/util';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',

        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('Passwprds don\'t match')
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                //this will clear the form out
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">
                    I don't have an account
                </h2>
                <span>Signup with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButon type='submit'>SIGN UP</CustomButon>
                </form>
            </div>
        )
    }
}

export default SignUp;
