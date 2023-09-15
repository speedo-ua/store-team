"use client"
import FavorSvg from '@/app/images/favorite-outline.svg'

const FavorIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <FavorSvg className={style}/>
    )
}

export default FavorIcon