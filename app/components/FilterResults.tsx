import IconType from "./Buttons/IconType";


const FilterResults = () => {

    return (

        <div className="catalog-settings_filter">
            <div className="catalog-settings_filter_text">
                4000 products selected
            </div>
            <button className="catalog-settings_filter_btn_cancel">
                Cancel
            </button>
            <button className="catalog-settings_filter_btn_check">
                Acer 
                <div className="cancel_round"> 
                <IconType type='cancel'/>
                </div> 
            </button>
        </div>

    )
}

export default FilterResults;