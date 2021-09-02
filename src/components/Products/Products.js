import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'
import axios from 'axios'
import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductCart,
    ProductImg,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductInfo
} from './Products.Elements'
import Cookies from 'js-cookie'

const Products = () => {

    const history = useHistory()

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/getAllProducts', {withCredentials:true}
        ).then(res => {
            setDatas(res.data.listProducts)
        }).catch(err => console.log(err))
    }, [])

    const showProduct = id => {
        Cookies.remove("showId")
        Cookies.set("showId", id)
        history.replace("/show-data-info")
    }

    return (
        <>
        <ProductsContainer>
            <ProductsHeading>Choose Your Favorite</ProductsHeading>
            <ProductsWrapper>
                {datas.map((product, index) => {
                    return(
                        <ProductCart key={index}>
                            <ProductImg src={product.imageURL}/>
                            <ProductInfo>
                                <ProductTitle>{product.nameProduct}</ProductTitle>
                                <ProductDesc>{product.description}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton onClick={showProduct.bind(this, product._id)}>BUY NOW</ProductButton>
                            </ProductInfo>
                        </ProductCart>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
        <Footer/>
        </>
    )
}

export default Products
