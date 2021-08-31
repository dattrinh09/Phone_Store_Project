import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart, datasSelector, getProductData, showProductData } from '../../store/appSlice';
import Footer from '../Footer/Footer'
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

    const datas = useSelector(datasSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductData())
    }, [dispatch])

    const history = useHistory()

    const productPicked = id => {
        dispatch(showProductData(id))
        history.replace('/show-data-info')
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
                                <ProductButton onClick={productPicked.bind(this, product._id)}>BUY NOW</ProductButton>
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
