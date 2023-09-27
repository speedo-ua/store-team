import Reload from "./Reload";
import Pagination from "./Pagination";
import TheGoodsTile from "./TheGoodsTile";
<<<<<<< HEAD


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
=======

const fetchProps = async () => {
  const data = await fetch('http://localhost:3000/api');
  return data.json();
}


const TheGoodsGrid = async () => {

  const data = await fetchProps();
 

  // console.log (data)
>>>>>>> b328d0e0e442dce33c60201af97522fbc16550a0

    return(
        <div className="catalog-grid">
        <div className="catalog-grid_container">
           
              {data.map((product: object, index:number) => 
                      <div className="catalog-grid_container_item">
                          <TheGoodsTile key={index} products={product} />
                      </div>
              )}

        </div>
        <Reload />
        <Pagination />
      </div>
    )

}


<<<<<<< HEAD
=======

>>>>>>> b328d0e0e442dce33c60201af97522fbc16550a0
export default TheGoodsGrid;