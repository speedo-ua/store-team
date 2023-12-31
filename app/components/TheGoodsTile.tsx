import TheRating from "./TheRating"
import Cart from "./Icons/Cart"
import FavorIcon from "./Icons/FavorIcon";
import Link from "next/link";
import ScaleIcon from "./Icons/ScaleIcon";

interface IProduct {
    id: number;
    category:string;
    brand: string;
    model: string;
    title: string;
    price_old: number;
    price_new: number;
    img: string;
    rating: number;
    review: number;
    promo: string;
 }

const TheGoodsTile = ({product}: {product:IProduct}) => {
    

    if (product) {
        return (
            <div className="goods-tile">
                    <div className="tile_top_promo">
                        <div className={"promo " + product.promo}>{product.promo}</div>
                    </div>
                    <div className="tile_top_actions">
                        <button className="tile_top_actions_btn"><FavorIcon style="favor_svg"/></button>
                        <button className="tile_top_actions_btn"><ScaleIcon style="compare_svg"/></button>
                    </div>
                <div className="img_container">
                    <img src={`/img/product/${product.id}/${product.img}`} title={product.title} alt={product.title} className="img_tile"/>   
                </div>
                <div className="tile_description" title={product.title}>{product.title}</div>
                <div className="tile-rating_block">
                    <div className="tile-rating">
                        <TheRating /> 
                    </div>
                    <div className="tile-rating_text"> <Link href={"/#"}>{product.review} reviews</Link></div>
                </div>
                <div className="tile-price_old">{product.price_old}₴</div>
                <div className="tile-price_block">
                    <div className="tile_price">{product.price_new}<span className="currency">₴</span></div>
                    <button className="tile_actions_btn"><Cart style="tile_cart"/></button>
                </div>
                <div className="tile_delivery">
                    Redy for delivery 
                    <svg fill="currentColor" className="svg_delivery" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2" id="Layer_2"><path d="M30.35,15.64l-1.91-1.91-1-2.89A.5.5,0,0,0,27,10.5H20.5V9a.51.51,0,0,0-.5-.5H2a.5.5,0,0,0,0,1H19.5v10H13.45a2.5,2.5,0,0,0-4.9,0H5a.5.5,0,0,0,0,1H8.55a2.5,2.5,0,0,0,4.9,0h9.1a2.5,2.5,0,0,0,4.9,0H30a.5.5,0,0,0,.5-.5V16A.51.51,0,0,0,30.35,15.64ZM11,21.5A1.5,1.5,0,1,1,12.5,20,1.5,1.5,0,0,1,11,21.5Zm14,0A1.5,1.5,0,1,1,26.5,20,1.5,1.5,0,0,1,25,21.5Zm4.5-2H27.45a2.5,2.5,0,0,0-4.9,0H20.5v-8h6.14l.89,2.66a.39.39,0,0,0,.12.19l1.85,1.86Z"/><path d="M11.5,16a.5.5,0,0,0-.5-.5H4a.5.5,0,0,0,0,1h7A.5.5,0,0,0,11.5,16Z"/><path d="M12,13.5a.5.5,0,0,0,0-1H7a.5.5,0,0,0,0,1Z"/><path d="M4.5,13a.5.5,0,0,0-.5-.5H3a.5.5,0,0,0,0,1H4A.5.5,0,0,0,4.5,13Z"/></g>
                    </svg>
                </div>
            </div>
        )
    }


}

export default TheGoodsTile