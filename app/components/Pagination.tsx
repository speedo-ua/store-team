import Link from "next/link"
import ArrowIcon from "./Icons/ArrowIcon"

const Pagination = () => {

    return (
        <div className="pagination">
            <nav className="pagination-navigation">
                <Link href={'/#'} className="pagination_arrow_block"><ArrowIcon style='pagination_arrow_bck'/></Link>
                <ul className="pagination-navigation_list">
                    <li className="navigation_item"><Link className="active" href={'#'}>1</Link></li>
                    <li className="navigation_item"><Link href={'#'}>2</Link></li>
                    <li className="navigation_item"><Link href={'#'}>3</Link></li>
                    <li className="navigation_item"><Link href={'#'}>4</Link></li>
                    <li className="navigation_item"><Link href={'#'}>5</Link></li>
                    <li className="navigation_item"><Link href={'#'}>6</Link></li>
                    <li className="navigation_item"><Link href={'#'}>7</Link></li>
                    <li className="navigation_item"><Link href={'#'}>8</Link></li>
                </ul>
                <Link href={'/#'} className="pagination_arrow_block"><ArrowIcon style='pagination_arrow_fwd'/></Link>
            </nav>
        </div>
    )
}

export default Pagination