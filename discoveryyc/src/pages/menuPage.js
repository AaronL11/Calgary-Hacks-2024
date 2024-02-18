import React from 'react';
import { locationBox } from '../Components/locationBox.js';


const MenuPage = () => {
  return (
    <div style={{
        backgroundColor: "#ECE2D0",
        height:"100vh"
    }}>
      <main>
        <img style={{width:"100%", height:"100px"}} src={require("../Assets/calgaryskyline.png")} alt="City Skyline" /> 
        <h3 style= {{textAlign: "center", fontFamily:"inherit", fontWeight:"bold", marginTop:"30px"}}>
            <span style= {{color:"#A30A11"}}> Locations to </span>
            <span style= {{color:"#0F7173", display:"inline"}}>discover </span>
        </h3>
        <div className='locationMenu' style={{flex: "2", overflowY:"scroll"}}>
           {locationBox(
            "Worker's Cottages", 
            "https://www.calgary.ca/content/dam/www/pda/pd/documents/heritage-planning/heritage-resources/historic_resource_media/4806.%204808%201st%20Ave%202nd.jpg", 
            "MANCHESTER"
            )}
        </div>
      </main>
    </div>
  );
}


export default MenuPage;

