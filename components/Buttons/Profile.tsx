"use client"
import UserIcon from '@/app/images/profile-user.svg'

const Profile = (props:{style: string}) => {
    
    const {style} = props;

    return (
        <UserIcon className={style}/>
    )
}

export default Profile