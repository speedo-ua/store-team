import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";


export async function getServerSideProps () {
  const query = await fetch('http://localhost:3000/api');
  const result = await query.json();
  return {
    props: {
      data: result,
    },
  }
}


const TheGoodsGrid =  ({data}: any) => {
 
  // const [result, setResult] = useState<any>()

  // useEffect(()=>{
  //   dataFetching('/api')
  // }, [])


  // const dataFetching = async (url: string) => {
  //   const res = await fetch(url)
  //   res.json().then(data=>setResult(data))
  // }

  console.log(data)

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