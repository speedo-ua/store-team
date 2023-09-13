import IconType from "@/components/Buttons/IconType";
import TheGoodsTile from "@/components/TheGoodsTile";


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
    <div className="page-title"><h1>Notebooks</h1></div>
    <div className="catalog-settings">
      <div className="catalog-settings_filter">filter</div>
      <div className="catalog-settings_sorting">sorting</div>
    </div>
    <div className="catalog-container">
      <div className="catalog-container_settings">
        settings
      </div>
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
    </div>
    </>
  )
}
