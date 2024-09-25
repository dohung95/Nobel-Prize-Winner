import React from 'react';
import information from "../Data/Van/infor.json"

const Information = () => {
    return (
        <>
        <div>
            {information.map((info)=>(
            <div key={info.id}>
                <p>{info.noidung}</p>

            </div>
            ))}
        </div>
        </>
    );
}

export default Information;