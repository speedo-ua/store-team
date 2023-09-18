import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";


const TheGoodsGrid = () => {

    return(
        <div className="catalog-grid">
        <div className="catalog-grid_container">
            <div className="catalog-grid_container_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_container_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_container_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_container_item">
              <TheGoodsTile/>
            </div>
        </div>
        <Reload />
        <Pagination />
      </div>
    )

}

export default TheGoodsGrid;