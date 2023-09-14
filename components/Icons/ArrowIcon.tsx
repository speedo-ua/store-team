"use client"
import ArrowSvg from '@/app/images/arrow_icon.svg'

const ArrowIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <ArrowSvg className={style}/>
    )
}

export default ArrowIcon