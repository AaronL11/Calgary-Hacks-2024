export function locationBox(name, img, address)  {
    return (

        <main style={{width:"200px", height:"300px"}}>
            <img style={{width:"200px", height:"200px", margin:"10px"}} src={require(img)} alt="City Skyline" /> 
            <h1>{name}</h1>
            <h3>Address: {address}</h3>

        </main>
    );}
