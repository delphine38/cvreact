import React from "react";
import { useNavigate } from "react-router-dom";

//images
import Http from "../images/http.jpg";

const Liens = () => {
    const navigate = useNavigate();

    const navigateOnMesLiens=()=>{
        navigate("/mesLiens");
        // navigate(MesLiens);
  }
    return(
        <div onClick={navigateOnMesLiens}>
            <img src={Http} alt="image de lien" width="80px" />
        </div>
    )
}
export default Liens;