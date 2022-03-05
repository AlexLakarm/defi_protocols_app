import './Filters.css'



const FilterButton = ({blockchain, blockchainClick}) => {

    


    return (
       <button className='btn-grad' onClick={blockchainClick}>{blockchain}</button>
    )
}


export default FilterButton;