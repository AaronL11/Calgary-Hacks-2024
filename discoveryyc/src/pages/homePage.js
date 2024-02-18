import React from 'react';

const HomePage = () => {
  return (
    <div style={{
        backgroundColor: "#ECE2D0",
        height:"100vh"
    }}>
      <main>
        <img style={{width:"100%", height:"100px"}} src={require("../Assets/calgaryskyline.png")} alt="City Skyline" /> 
        <div style={{margin:"50px"}}>
            <h2 style= {{textAlign: "center", fontFamily:"inherit", fontWeight:"bold", color:"#A30A11", marginTop:"10px", }}>
                Today's Adventure
            </h2>
            <img style={{width:"200px", height:"200px", marginTop:"10px", display: "block", marginLeft: "auto", marginRight:"auto"}} src={require("../Assets/castlePicture.png")} alt="City Skyline" /> 
        </div>
      </main>
    </div>
  );
}

export default HomePage;