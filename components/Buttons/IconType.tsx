"use client"
import FatMenuIcon from '@/app/images/fat_menu_icon.svg'
import ProfileIcon from '@/app/images/profile-user.svg'
import BasketIcon from '@/app/images/cart_icon_outline.svg'
import HomeIcon from '@/app/images/home_outline_icon.svg'
import CancelIcon from '@/app/images/cancel_icon.svg'
import GridTwoIcon from '@/app/images/grid_two.svg'
import GridThreeIcon from '@/app/images/grid_three.svg'
import {useEffect, useState} from 'react'

const IconType = (props:{type:string; style?: string}) => {

    const {type, style} = props;
    const [icon, setIcon] = useState<any>(null);
    
    useEffect (()=>{
        iconHandle(type)
    }, [])
    
    const iconHandle = (type: string) => {
        type === 'home' ? setIcon(<HomeIcon className={style}/>) 
        : type === 'cart' ? setIcon(<BasketIcon className={style}/>)
        : type === 'profile' ? setIcon(<ProfileIcon className={style}/>)
        : type === 'fatmenu' ? setIcon(<FatMenuIcon className={style}/>)
        : type === 'cancel' ? setIcon(<CancelIcon className={style}/>)
        : type === 'grid-two' ? setIcon(<GridTwoIcon className={style}/>)
        : type === 'grid-three' ? setIcon(<GridThreeIcon className={style}/>)
        : setIcon('')
    }
    
    return (
        icon
    )
}

export default IconType