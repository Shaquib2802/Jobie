import React from "react";
import contentImg from "../../Images/CONTENT.png";
import { useNavigate } from "react-router-dom";

const Enter1 = () => { 
    const navigate = useNavigate()
  return (
    <div  className="bg-[#40189d]  h-screen flex justify-center items-center">
      <img onClick={()=> navigate("/Enter2")} src={contentImg} alt="Content" />
    </div>
  );
};

export default Enter1;
