import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToStore, datasSelector, deleteInStore, getProductData } from '../../store/appSlice'
import { 
    ProductContainer, 
    ProductImg, 
    ProductsContainer,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductQuantity,
    DeleteButton,
    ProductButton,
    EditButton,
    ProductInput
} from './AdminProduct.Elements'

function AdminProduct() {

    const datas = useSelector(datasSelector)
    
    const [values, setValues] = useState({
        name: '',
        desc: '',
        price: '',
        quantity: ''
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductData())
    }, [dispatch])

    const [isPick, setIsPick] = useState(0)

    const onEditClick = id => {
        setIsPick(id)
    }

    const onValueChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const onCancel = () => {
        setIsPick(-100)
        setValues({
            name: '',
            desc: '',
            price: '',
            quantity: ''
        })
    }

    const onDelete = id => {
        dispatch(deleteInStore(id))
        console.log(id)
    }

    const saveToStore = product => {
        const newProduct  = {
            _id: product._id,
            nameProduct: '',
            description: '',
            price: '',
            imageURL: product.imageURL,
            quantity: ''
        }

        if(values.name === '') newProduct.nameProduct = product.nameProduct
        else newProduct.nameProduct = values.name

        if(values.description === '') newProduct.description = product.description
        else newProduct.description = values.desc

        if(values.price === '') newProduct.price = product.price
        else newProduct.price = values.price

        if(values.quantity === '') newProduct.quantity = product.quantity
        else newProduct.quantity = values.quantity
        
        console.log(newProduct)

        dispatch(deleteInStore(newProduct._id))

        dispatch(addToStore(newProduct))

        setIsPick(-100)
        setValues({
            name: '',
            desc: '',
            price: '',
            quantity: ''
        })
    }

    return (
        <ProductsContainer>
            {datas.map((product, index) => {
                return(
                    <ProductContainer key={index}>                            
                        <ProductImg src={product.imageURL}/>
                        {product._id !== isPick ? (
                            <ProductInfo>
                                <ProductTitle>Title: {product.nameProduct}</ProductTitle>
                                <ProductDesc>Description: {product.description}</ProductDesc>
                                <ProductPrice>Price: {product.price}</ProductPrice>
                                <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                            </ProductInfo>
                        ):(
                            <ProductInfo>
                                <ProductInput 
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={onValueChange}
                                placeholder={product.nameProduct}
                                />
                                <ProductInput 
                                type="text"
                                name="desc"
                                value={values.desc}
                                onChange={onValueChange}
                                placeholder={product.description}
                                />
                                <ProductInput 
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={onValueChange}
                                placeholder={product.price}
                                />
                                <ProductInput 
                                type="number"
                                name="quantity"
                                value={values.quantity}
                                onChange={onValueChange}
                                placeholder={product.quantity}
                                />
                            </ProductInfo>
                        )}
                        <ProductButton>
                            <DeleteButton onClick={onDelete.bind(this, product._id)}>Delete</DeleteButton>
                            {product._id !== isPick ? (
                                <EditButton onClick={onEditClick.bind(this, product._id)}>Edit</EditButton>
                            ):(
                                <>
                                <EditButton onClick={saveToStore.bind(this, product)}>Save</EditButton>
                                <EditButton onClick={onCancel}>Cancel</EditButton>
                                </>
                            )}
                        </ProductButton>
                    </ProductContainer>
                )
           })}
        </ProductsContainer>
    )
}

export default AdminProduct
