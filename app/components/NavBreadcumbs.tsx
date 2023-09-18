import Link from "next/link"
import IconType from "./Buttons/IconType"

const NavBreadcumbs = () => {
    
    return (

        <nav className="page-breadcumbs">
            <ul>
                <li><Link href={'#'}><IconType type='home' style='page-breadcumbs_homesvg'/></Link> </li>
                <li><Link href={'#'}>Desktops and Notebooks</Link> </li>
                <li><Link href={'#'}>Notebooks</Link> </li>
            </ul>
        </nav>

    )
}

export default NavBreadcumbs