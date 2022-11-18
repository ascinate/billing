import React from "react";
import Arrowdp from "../images/arrow-down.svg";
import userimg from "../images/a1.jpeg";

function UserAcountTop(){
    return(
        <>
        <div className="right-user-sec d-flex align-items-center ms-lg-auto">
           <div className="user-details d-flex align-items-center">
              <figure>
                <img src={userimg} alt="user"/>
              </figure>
              <h6> Paul Elliott 
                <span className="d-block"> Paul.Elliott@Fakemail.com </span>
              </h6>
           </div>
           <div className="dropdown">
            <button className="btn snbm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={Arrowdp} alt="anbm"/>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
           </div>
        </div>
        
        </>
    )
};
export default UserAcountTop;
