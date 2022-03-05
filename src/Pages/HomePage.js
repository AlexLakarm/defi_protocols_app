import Protocols from '../Components/Protocols';
import Filters from '../Components/Filters';

const HomePage = ({blockchainClick, protocols, filter})=> {

    return(
        <main>
        <Filters blockchainClick = {blockchainClick}/>
        <Protocols protocols={protocols} filter = {filter}/>
      </main>
    )
}



export default HomePage;