import IconType from "@/components/Buttons/IconType";
import TheGoodsTile from "@/components/TheGoodsTile";
import TheSidebarLeft from "@/components/TheSidebarLeft";
import Pagination from "@/components/Pagination";
import Reload from "@/components/Reload";

export default function Home() {
  return (
    <>
    <nav className="page-breadcumbs">
      <ul>
        <li><IconType type='home' style='page-breadcumbs_homesvg'/> </li>
        <li>/ Desktops and Notebooks</li>
        <li>/ Notebooks</li>
      </ul>
    </nav>
    <div className="page-title"><h1>Notebooks Acer</h1></div>
    <div className="catalog-settings">
      <div className="catalog-settings_filter">
        <div className="catalog-settings_filter-text">
          4000 products selected
          </div>
          <button className="catalog-settings_btn_cancel">
            Cancel
          </button>
          <button className="catalog-settings_btn_check">
            Acer 
            <div className="cancel_round"> 
            <IconType type='cancel'/>
            </div> 
          </button>
      </div>
      <div className="catalog-settings_sorting">
        <select defaultValue={"rating"}>
          <option value="cheap">Cheap to expensive</option>
          <option value="expensive">Expensive to cheap</option>
          <option value="novelty">Novelty</option>
          <option value="rating">By rating</option>
        </select>
        <button className="grid-two"><IconType type='grid-two'/></button>
        <button className="grid-three"><IconType type='grid-three'/></button>
      </div>
    </div>
    <div className="catalog-container">
      <div className="catalog-container_settings">
        <TheSidebarLeft/>
      </div>
      <div className="catalog-grid_container">
        <div className="catalog-grid">
            <div className="catalog-grid_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_item">
              <TheGoodsTile/>
            </div>
            <div className="catalog-grid_item">
              <TheGoodsTile/>
            </div>
        </div>
        <Reload />
        <Pagination />
      </div>
    </div>
    </>
  )
}
