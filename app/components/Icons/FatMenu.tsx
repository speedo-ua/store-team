"use client"
import FatMenuIcon from '@/images/fat_menu_icon.svg'

const FatMenu = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <FatMenuIcon className={style}/>
    )
}

export default FatMenu