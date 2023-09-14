import Link from "next/link"
import Cart from "./Icons/Cart"
import ProfileIcon from "./Icons/ProfileIcon"
import FatMenu from "./Icons/FatMenu"

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

                    <ul className="header-actions">
                        <li className="header-actions_item-languages"></li>
                        <li className="header-actions_item-user">
                            <button className="header-actions_button">
                                <ProfileIcon style="header-actions_cart"/>
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