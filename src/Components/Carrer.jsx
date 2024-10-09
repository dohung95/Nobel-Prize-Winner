import React from "react";
import information from "../Data/Van/infor.json";
const Carrer = () => {
    return ( 
        <>
        <div>
            {information.map((info)=>(
                <div key={info.id}> 
                    <p>{info.noidungcarrer}</p>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Carrer;