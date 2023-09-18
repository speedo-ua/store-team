import TheSidebarLeft from "@/components/Blocks/TheSidebarLeft";
import DescriptionCatalog from "@/components/DescriptionCatalog";
import TheGoodsGrid from "@/components/TheGoodsGrid";
import FilterResults from "@/components/FilterResults";
import NavBreadcumbs from "@/components/NavBreadcumbs";
import SelectSortingGoods from "@/components/SelectSortingGoods";
import GridStyle from "@/components/Buttons/GridStyle";
import GoodsHistory from "@/components/GoodsHistory";

export default function Home() {
  return (
    <>
    <NavBreadcumbs/>
    <div className="page-title"><h1>Notebooks Acer</h1></div>
    <div className="catalog_block">
      <div className="catalog-settings">
          <FilterResults/>
          <div className="catalog-settings_sorting">
              <SelectSortingGoods/>
              <GridStyle/>
          </div>
      </div>
      <div className="catalog-container">
          <TheSidebarLeft/>
          <TheGoodsGrid/>
      </div>
    </div>
    <GoodsHistory/>
    <DescriptionCatalog/>
    </>
  )
}
