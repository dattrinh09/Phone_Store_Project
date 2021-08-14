import React from 'react'
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

    const data = productData;

    return (
        <>
        <ProductsContainer>
            <ProductsHeading>Choose Your Favorite</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCart key={index}>
                            <ProductImg src={product.img}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
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
