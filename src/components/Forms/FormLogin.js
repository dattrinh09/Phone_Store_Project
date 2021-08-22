import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    FormContainer,
    FormWrapper,
    FormHeading,
    FormItems,
    FormInput,
    FormError,
    FormButton,
    CloseButon
} from './Form.Elements'
import { useHistory } from 'react-router-dom';

const FormLogin = () => {

    const history = useHistory()

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        let request = {
            username: values.username,
            password: values.password 
        }

        axios.post('http://localhost:8000/login', request)
        .then(resp => {
          if(resp.data.status === 1){
              localStorage.setItem("adminLogin", true)
              history.replace("/")
            }
          else{
              setErrors(false)
            }
        }).catch( err => {
            setErrors(false)
        })
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = useState(true)

    return (
        <FormContainer>
            <FormWrapper>
                <CloseButon to="/sign-up">X</CloseButon>
                <FormHeading>Login</FormHeading>
                <form>
                    <FormItems>
                        <FormInput 
                        type="text"  
                        name="username"
                        placeholder="User Name"
                        value={values.username}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        <FormInput 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        {!errors ? (<FormError>Username or Password is not correct</FormError>) : (null)}
                    </FormItems>
                    <FormButton
                    onClick={handleFormSubmit}
                    >
                        Login
                    </FormButton>
                </form>
            </FormWrapper>
        </FormContainer>
    )
}

export default FormLogin


