import React from "react";
import { useParams } from "react-router-dom";

function MyParams(){
    const {Paramsid} = useParams()
    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl">Username: {Paramsid}</div>
    )
}

export default MyParams;