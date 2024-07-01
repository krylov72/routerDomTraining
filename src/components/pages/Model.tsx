import { useParams } from "react-router-dom";
import { adidasArr } from "./Adidas";
import { Button } from "../Button";

export const Model = () => {
    let params = useParams()
    console.log(params.id);
    
    
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',fontFamily:'monospace'}}>
           <h2>{adidasArr[Number(params.id)].model}</h2>
           <h4>Collection: {adidasArr[Number(params.id)].collection}</h4>
           <h3>Price: {adidasArr[Number(params.id)].price}</h3>
           <Button title="Drop in cart" action={() => {}} />
           <img src={adidasArr[Number(params.id)].picture} alt=""
           style={{width:'800px'}} />
        </div>  
        
    );
};