import React from 'react'
import {  useSelector } from 'react-redux'
import { cartDataSelector} from '../../store/appSlice'
import { CartEmpty } from './Cart.Elements'

function Cart() {

    const cartDatas = useSelector(cartDataSelector)

    return (
        <div>
            {cartDatas.length === 0 ? (
                <CartEmpty>Cart is empty</CartEmpty>
            ):(
                cartDatas.map((product,index) => {
                    return (
                        <div key={index}>
                            <h1>{product.id}</h1>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Cart
