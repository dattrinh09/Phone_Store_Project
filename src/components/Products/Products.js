import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import { productData } from './Data'
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

const Products = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('')
        .then(res => setDatas(res.data)            
        ).catch(error => console.log(error))
    },[])

    return (
        <>
        <ProductsContainer>
            <ProductsHeading>Choose Your Favorite</ProductsHeading>
            <ProductsWrapper>
                {datas.map((product, index) => {
                    return(
                        <ProductCart key={index}>
                            <ProductImg src={product.img}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>BUY NOW</ProductButton>
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
