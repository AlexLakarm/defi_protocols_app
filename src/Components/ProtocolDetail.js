
import {Link, useParams } from 'react-router-dom';
import './Protocols.css'

const ProtocolDetail = ({protocols}) => {


    const params = useParams();
    


    const protocol= protocols.find(protocol => protocol.id===params.id);

    return (
        
        <div>
            <Link to="/"><button className='btn-grad'>Back</button></Link>
            <div className='flex-center'>
                <h2>Protocol : {protocol.name}</h2>
                <img className='imgdetail' src={protocol.logo}></img>
                </div>
            <li>Category : {protocol.category}</li>
            <li>TVL : {protocol.tvl}</li>
            <li>Url : <a href={protocol.url}>{protocol.name} url</a></li>
            <li>MCap : {protocol.mcap}</li>
            <li>Blockchains : {protocol.chains}</li>
            <p>Description : {protocol.description}</p>
        </div>
    )
}


export default ProtocolDetail;