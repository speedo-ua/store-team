import TheGoodsTile from "@/components/TheGoodsTile";


export default function Home() {
  return (
    <>
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
    </>
  )
}
