import React from 'react';
import information from "../Data/Van/infor.json"
const Story = () => {
    return ( 
        <>
        <div>
            {information.map((info)=>(
                <div key={info.id}>
                    <p>{info.noidungstory}</p>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Story;