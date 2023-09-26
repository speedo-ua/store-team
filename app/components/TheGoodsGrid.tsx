'use client'
import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";
import { useEffect, useState } from "react";



const TheGoodsGrid = () => {
 
  const [result, setResult] = useState<any>()

  useEffect(()=>{
    dataFetching('/api')
  }, [])


  const dataFetching = async (url: string) => {
    const res = await fetch(url)
    res.json().then(data=>setResult(data))
  }

  console.log (result)
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