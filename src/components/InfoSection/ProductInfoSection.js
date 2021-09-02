import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { Button, Container } from '../../globalStyles'
import axios from 'axios'
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Price
} from './InfoSection.Elements'

function ProductInfoSection() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/getAllProducts'
        ).then(res => {
            setDatas(res.data.listProducts)
        }).catch(err => console.log(err))
    }, [])

    const showId = Cookies.get("showId")

    const onAddToCart = () => {
        axios.post('http://localhost:8000/users/addToCart', {productId:showId}, {withCredentials: true})
        .then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
        <div>
            {datas.map((product) => {
                if(product._id === showId){
                    return (
                        <InfoSec lightBg={true} key={product._id} paddingInfo>
                        <Container>
                            <InfoRow >
                                <InfoColumn>
                                    <ImgWrapper start>
                                        <Img src={product.imageURL} alt="Image"/>
                                    </ImgWrapper>
                                </InfoColumn>
                                <InfoColumn>
                                    <TextWrapper>
                                        <Heading lightText={false}>
                                            {product.nameProduct}
                                        </Heading>
                                        <Subtitle lightTextDesc={false}>
                                            {product.description}
                                        </Subtitle>
                                        <Price lightTextDesc={false}>
                                            {product.price}
                                        </Price>
                                        <Button big fontBig primary={false} onClick={onAddToCart}>
                                            Add To Cart
                                        </Button>
                                    </TextWrapper>
                                </InfoColumn>
                            </InfoRow>
                        </Container>
                    </InfoSec>
                    )
                }
            })}
        </div>
    )
}

export default ProductInfoSection
