import React from 'react';

const MenuPage = () => {
  return (
    <div style={{
        backgroundColor: "#ECE2D0",
        height:"100vh"
    }}>
      <main>
        <img style={{width:"300%", height:"100px"}} src={require("../Assets/calgaryskyline.png")} alt="City Skyline"/> 
        <div style={{margin:"50px"}}>
            <div style= {{textAlign: "center", fontFamily:"inherit", fontWeight:"bold", marginTop:"10px", display:"flex", flexDirection:"column"}}>
                <h3 style= {{color:"#A30A11"}}> Locations to</h3>
                <h1 style= {{color:"#0F7173", display:"inline"}}>Discover </h1>

            </div>
            <img style={{width:"200px", height:"200px", marginTop:"10px", marginBottom:"100px", marginLeft: "auto", marginRight:"auto"}} src={require("../Assets/castlePicture.png")} alt="City Skyline" /> 
        </div>
      </main>
    </div>
  );
}

export default MenuPage;