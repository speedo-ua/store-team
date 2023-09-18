import TheGoodsTile from "./TheGoodsTile";

const GoodsHistory = () => {

    return (
        
        <div className="history-views_container">
            <span>Your history views</span>
            <div className="history-views_container_grid">
                <div className="history-views_tile">
                <TheGoodsTile/>
                </div>
            </div>
        </div>

    )
}

export default GoodsHistory;