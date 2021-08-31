import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, productShowSelector } from '../../store/appSlice'
import InfoSection from './InfoSection'

function ProductInfoSection() {

    const showData = useSelector(productShowSelector)

    const showSingleData = {
        id: '',
        primary: false,
        lightBg: true, 
        imgStart: 'start', 
        lightTopLine: false, 
        lightTextDesc: false, 
        buttonLabel: 'Add To Cart',
        description: '',
        headLine: '',
        lightText: false,
        topLine: '',
        img: '',
        alt: 'Image',
        start: '',
        price: '',
    }

    showData.map(data => {
        showSingleData.id = data._id
        showSingleData.headLine = data.nameProduct
        showSingleData.description = data.description
        showSingleData.img = data.imageURL
        showSingleData.price = data.price
    })

    const disptach = useDispatch()

    const addToCart = id => {
        disptach(addProductToCart(id))
    }

    return (
        <div>
            <InfoSection {...showSingleData} addToCart={addToCart.bind(this, showSingleData.id)}/>
        </div>
    )
}

export default ProductInfoSection
