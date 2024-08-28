import MeuComponente from "./MeuComponente";
import NumeroMaior from "./NumeroMaior";




export default function Fundamentos() {

    return  (
        <>
        
        {/* Comentários no JSX */}

        <h1>Página Fundamentos</h1>
        <hr/>


    <MeuComponente />
        
        <hr/>
    
    <NumeroMaior numA={2} numB={15} />
    <NumeroMaior numA={8} numB={30} />
    <NumeroMaior numA={74} numB={90} />
    <NumeroMaior numA={98} numB={45} />
    <NumeroMaior numA={100} numB={7000} />
    <NumeroMaior numA={977} numB={15} />

        </>
 
 
     )
 
}
    