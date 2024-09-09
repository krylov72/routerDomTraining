import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../router/Router';
import { Link } from 'react-router-dom';

export const Error404 = () => {
const [isClicked,setIsClicked] = useState(false)
if (isClicked) {
    return <Navigate to={PATH.ABIBAS} />
}
    const backHandler = () => {
         setIsClicked(!isClicked)
    }
    return (
        <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div style={{fontSize:'30px',textAlign:'center'}}><b>OOOPS,SOMETHING WRONG <br />Summoners alive!</b></div>
            <Button onClick={backHandler} style={{backgroundColor:'#dada',border:'none',borderRadius:'10px',fontWeight:'bold',cursor:'pointer',fontSize:'15px',fontFamily:'monospace',margin:'10px 0 0 0'}}>BACK TO MAIN</Button>
        </div>
    );
};

