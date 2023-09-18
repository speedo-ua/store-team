


const TheSidebarLeft = () => {

    return (
            <div className="catalog-container_settings">
                <div className="sidebar-container">
                    <div className="sidebar-block">
                        <button className="sidebar-block_toggle">
                            <div className="sidebar-block_toggle-text">Saler <span>2</span></div>
                            <div className="sidebar-block_toggle-arrow"></div>
                        </button>
                        <ul className="checkbox-filter">
                            <li><input className="custom-checkbox" type="checkbox" name="Saler" id="Rozetka" value="Rozetka" /><label htmlFor="Rozetka">Rozetka</label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="Saler" id="Other" value="Other" /><label htmlFor="Other">Other</label></li>
                        </ul>
                    </div>
                    <div className="sidebar-block">
                        <button className="sidebar-block_toggle">
                            <div className="sidebar-block_toggle-text">Brand <span>10</span></div>
                            <div className="sidebar-block_toggle-arrow"></div>
                        </button>
                        <ul className="checkbox-filter">
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="acer" value="acer" defaultChecked/><label htmlFor="acer">Acer <span className="grey text-xs ml-1">1870</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="asus" value="asus" /><label htmlFor="asus">ASUS <span className="grey text-xs ml-1">2384</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="apple" value="apple" /><label htmlFor="apple">Apple <span className="grey text-xs ml-1">56</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="dell" value="dell" /><label htmlFor="dell">Dell <span className="grey text-xs ml-1">7726</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="gigabyte" value="gigabyte" /><label htmlFor="gigabyte">Gigabyte <span className="grey text-xs ml-1">642</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="hp" value="hp" /><label htmlFor="hp">HP <span className="grey text-xs ml-1">16107</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="huawei" value="huawei" /><label htmlFor="huawei">Huawei <span className="grey text-xs ml-1">187</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="lenovo" value="lenovo" /><label htmlFor="lenovo">Lenovo <span className="grey text-xs ml-1">14076</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="msi" value="msi" /><label htmlFor="msi">MSI <span className="grey text-xs ml-1">2644</span></label></li>
                            <li><input className="custom-checkbox" type="checkbox" name="brand" id="samsung" value="samsung" /><label htmlFor="samsung">Samsung <span className="grey text-xs ml-1">166</span></label></li>
                        </ul>
                    </div>
                    <div className="sidebar-block">
                        <button className="sidebar-block_toggle">
                            <div>Price</div>
                            <div className="sidebar-block-arrow"></div>
                        </button>
                        <div className="range-filter">
                        <div className="price_range_blocks">
                        <input type="text" name="priceFrom" id="priceFrom" className="input_price_range" defaultValue={0} /> -
                        <input type="text" name="priceFrom" id="priceFrom" className="input_price_range" defaultValue={30000} />
                        <button type="submit">OK</button>
                        </div>
                        <input className="range" id="range" type="range" defaultValue={50}/>
                        </div>
                        
                    </div>
                </div>
            </div>
    )

}

export default TheSidebarLeft