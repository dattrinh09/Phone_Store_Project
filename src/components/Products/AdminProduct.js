import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
    ProductInput,
    AddProductBtn,
    AddProductIcon
} from './AdminProduct.Elements'

function AdminProduct() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/getAllProducts'
        ).then(res => {
            setDatas(res.data.listProducts)
        }).catch(err => console.log(err))
    }, [])
    
    const [values, setValues] = useState({
        name: '',
        desc: '',
        price: '',
        quantity: ''
    })

    const [deleteId, setDeleteId] = useState(
        null
    ) 

    useEffect(() => {
        if(deleteId){
            axios.post('http://localhost:8000/admin/delete', {deleteId:deleteId})
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        }
    }, [deleteId])

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


    const saveToStore = product => {
        const newProduct  = {
            productId: product._id,
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

        axios.post('http://localhost:8000/admin/update', newProduct
        ).then(res => console.log(res)
        ).catch(err => console.log(err))

        setIsPick(-100)
        setValues({
            name: '',
            desc: '',
            price: '',
            quantity: ''
        })
    }

    const history = useHistory()

    const onAdd = () => {
        history.replace("/add-products")
    }

    return (
        <ProductsContainer>
            <AddProductBtn onClick={onAdd}>
                <AddProductIcon>
                <i class="fas fa-plus-circle"></i>
                </AddProductIcon>
                Add Product
            </AddProductBtn>
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
                            <DeleteButton onClick={() => setDeleteId(product._id)}>Delete</DeleteButton>
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
