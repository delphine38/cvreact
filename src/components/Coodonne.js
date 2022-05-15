import React from "react";
import { useNavigate } from "react-router-dom";


//images
import Imgcoord from "../images/coordonnees.jpg";

const Coordonnees = () =>{
    const navigate = useNavigate();

    const navigateOnMesCoordonnees=()=>{
        navigate("/mescoordonnees");
    }
    return(
        <div onClick={navigateOnMesCoordonnees}>
            <img src={Imgcoord} alt="image de coordonées" width="80px" />
        </div>
    )
}
export default Coordonnees;
