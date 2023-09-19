'use client'
import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";
import { useEffect, useState } from "react";
import Data from '@/api/data/goods.json'


const TheGoodsGrid = () => {

  const [result, setResult] = useState<any>()

  useEffect(()=>{
    dataFetching(Data)
  }, [])


  const dataFetching = async (url: any) => {
    const res = await fetch(url)
    const result = res.json()
    setResult(result)
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