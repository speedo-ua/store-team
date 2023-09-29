const SelectSortingGoods = () => {

    return (
        <select name="sortingType" defaultValue={"rating"}>
            <option value="cheap">Cheap to expensive</option>
            <option value="expensive">Expensive to cheap</option>
            <option value="novelty">Novelty</option>
            <option value="rating">By rating</option>
          </select>
    )


}

export default SelectSortingGoods;