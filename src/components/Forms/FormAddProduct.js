import React, { useState } from 'react'
import axios from 'axios'
import {
    FormContainer,
    FormWrapper,
    FormItems,
    FormInput,
    FormAlert,
    FormButton,
    CloseButon,
    FormInputLabel
} from './FormAdd.Elements'

const FormAddProduct = () => {

    const handleFormAdd = (e) =>{
        e.preventDefault()
        if(values.name !== '' && values.description !== '' && values.imgURL !== '' && values.price !== 0 && values.quantity !== 0)
        {

            const newProduct  = {
                productName: values.name,
                description: values.description,
                price: values.price,
                imageURL: values.imgURL,
                quantity: values.quantity
            }

            axios.post('http://localhost:8000/admin/add', newProduct, {withCredentials: true})
            .then(res => {
                if(res.data.status === 1) {
                    setAddSuccess('Successful')
                    setValues({
                        name: '',
                        description: '',
                        price: 0,
                        imgURL: '',
                        quantity: 0
                    })
            }
                else setAddSuccess('CAN NOT ADD THIS PRODUCT')
            }).catch(err => {
                console.log(err)
            })
        }else setAddSuccess('CAN NOT ADD THIS PRODUCT')

    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: 0,
        imgURL: '',
        quantity: 0
    })

    const [addSuccess, setAddSuccess] = useState('')

    return (
        <FormContainer>
            <FormWrapper>
                <CloseButon to="/">X</CloseButon>
                <FormItems>
                    <FormAlert>{addSuccess}</FormAlert>
                </FormItems>
                <form>
                    <FormItems>
                        <FormInputLabel>Product Name</FormInputLabel>
                        <FormInput 
                        type="text"  
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        <FormInputLabel>Description</FormInputLabel>
                        <FormInput
                        type="text" 
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        <FormInputLabel>Price($)</FormInputLabel>
                        <FormInput 
                        type="number" 
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        <FormInputLabel>Image URL</FormInputLabel>
                        <FormInput 
                        type="url"  
                        name="imgURL"
                        value={values.imgURL}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormItems>
                        <FormInputLabel>Quantity</FormInputLabel>
                        <FormInput 
                        type="number"  
                        name="quantity"
                        value={values.quantity}
                        onChange={handleChange}
                        />
                    </FormItems>
                    <FormButton
                    onClick={handleFormAdd}
                    >
                        Add Product 
                    </FormButton>
                </form>
            </FormWrapper>
        </FormContainer>
    )
}

export default FormAddProduct 