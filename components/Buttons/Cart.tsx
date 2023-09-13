"use client"
import Basket from '@/app/images/cart_icon_outline.svg'

const Cart = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <Basket className={style}/>
    )
}

export default Cart