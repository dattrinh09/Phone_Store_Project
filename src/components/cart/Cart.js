import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CartEmpty } from './Cart.Elements'

function Cart() {

    const [cartDatas, setCartDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/users/getProductsFromCart', {withCredentials:true})
        .then(resp => {
            console.log(resp.data)
            setCartDatas(resp.data)
        }
        ).catch(err => console.log(err))
    }, [])

    return (
        <div>
            {cartDatas.length === 0 ? (
                <CartEmpty>Cart is empty</CartEmpty>
            ):(
                cartDatas.map((product,index) => {
                    return (
                        <div key={index}>
                            <h1>{product.nameProduct}</h1>
                            <img src={product.imageURL}></img>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Cart
