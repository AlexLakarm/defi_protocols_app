import './Filters.css'
import FilterButton from './FilterButton.js';

const Filters = ({blockchainClick}) => {

    const blockchains = ["All","Ethereum", "Avalanche", "Solana", "Fantom", "Polygon","Terra"];


    return (
        <>
        <h2>Filter by Blockchain :</h2>
        <div className="flex">
            {blockchains.map((blockchain, index)=>(
                <FilterButton key={index} blockchain={blockchain} blockchainClick={blockchainClick}/>
            ))

            }
        </div>
        </>
    )
}


export default Filters;