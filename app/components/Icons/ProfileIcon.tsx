"use client"
import UserSvg from '@/images/profile-user.svg'

const ProfileIcon = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <UserSvg className={style}/>
    )
}

export default ProfileIcon