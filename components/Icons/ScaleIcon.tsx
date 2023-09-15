"use client"
import ScaleSvg from '@/app/images/scale-icon.svg'

const ScaleIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <ScaleSvg className={style}/>
    )
}

export default ScaleIcon