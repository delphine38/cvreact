import React from "react";
import { useNavigate } from "react-router-dom";


//images
import Imgcomp from "../images/competences.jpg"

const Comp = () => {
    const navigate = useNavigate();

    const navigateOnMesCompetences=()=>{
        navigate("/mescomp");
    }
    return(
        <div onClick={navigateOnMesCompetences}>
            <img src={Imgcomp} alt="image de compétences" width="80px" />
        </div>
    )
}
export default Comp;