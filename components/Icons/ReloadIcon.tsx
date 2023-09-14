"use client"
import ReloadSvg from '@/app/images/reload_icon.svg'

const ReloadIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <ReloadSvg className={style}/>
    )
}

export default ReloadIcon