import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";

const fetchProps = async () => {
  const data = await fetch('http://localhost:3000/api');
  return data.json();
}


const TheGoodsGrid = async () => {

  const data = await fetchProps();
 

  // console.log (data)

  return(
      
        <div className="catalog-grid">
        <div className="catalog-grid_container">
           
              {data.map((product:any, index:number) => 
                      <div className="catalog-grid_container_item">
                          <TheGoodsTile key={index} product={product} />
                      </div>
              )}

        </div>
        <Reload />
        <Pagination />
      </div>
    )

}


export default TheGoodsGrid;