import Link from "next/link"

const TheHeader = () => {
    return (
        <header>
            <div className="header-logo">Logo</div>
            <ul className="header-menu">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contacts'}>Contacts</Link></li>
            </ul>
            <div className="header-cart"> Cart</div>
        </header>
    )
} 

export {TheHeader}