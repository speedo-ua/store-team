"use client"
import FavorSvg from '@/images/favorite-outline.svg'

const FavorIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <FavorSvg className={style}/>
    )
}

export default FavorIcon