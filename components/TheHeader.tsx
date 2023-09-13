import Link from "next/link"
import Cart from "./Buttons/Cart"
import Profile from "./Buttons/Profile"
import FatMenu from "./Buttons/FatMenu"

const TheHeader = () => {
    return (
        <>
        <div className="top-information">SUMMER SALE -40%</div>
            <header>
                <div className="header-layout">
                
                <div className="header-logo"><Link href={'/'}><img src="img/logo.svg" alt="Logo"/></Link></div>

                <button className="header_fat-menu">
                        <FatMenu style="svg_fat-menu"/>
                            Catalog
                    </button>
                <div className="header_search_form">
                        <input type="text" className="header_search_input" placeholder="I'm searching.." />
                        <button type="submit" className="header_search_submit">Search</button>
                </div>
                    {/* <ul className="header-menu">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contacts'}>Contacts</Link></li>
                    </ul> */}

                    <ul className="header-actions">
                        <li className="header-actions_item-languages"></li>
                        <li className="header-actions_item-user">
                            <button className="header-actions_button">
                                <Profile style="header-actions_cart"/>
                            </button>
                        </li>
                        <li className="header-actions_item-cart"> 
                            <button className="header-actions_button">
                            <Cart style="header-actions_cart"/>
                            </button>
                        </li>

                    </ul>
                </div>
            </header>
    </>
    )
} 

export default TheHeader