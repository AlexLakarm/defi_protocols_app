
import Protocol from './Protocol.js'
import './Protocols.css'

const Protocols = ({protocols, filter}) => {


    const filteredProtocols = filter==="All" ? protocols : protocols.filter(protocol=> protocol.chains.includes(filter))

    return (
        <section className='flex'>
            
                {filteredProtocols.map((protocol, index)=>(
                   <Protocol key={index} name = {protocol.name} symbol = {protocol.symbol} logo = {protocol.logo} id={protocol.id}/>
                ))}
            
            
        </section>
    )
}


export default Protocols;