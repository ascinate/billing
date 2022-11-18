import React from "react";
import { NavLink } from "react-router-dom";
import Userimgn from "../images/user-img1.jpg";

function SubUser(){
    return(
        <>
          <div className="sub-user-div1">
             <h4> Sub Users </h4>
             <ul className="list-unstyled mt-4">
                <li>
                    <NavLink to="/abn" className="comon-user d-flex align-items-center">
                        <figure className="m-0">
                           <img src={Userimgn} alt="userbnc0"/>
                        </figure>
                        <h5> Paul Elliott 
                          <span className="d-block email-text"> Paul.Elliott@Fakemail.com </span>
                        </h5>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/abn" className="comon-user d-flex align-items-center">
                        <figure className="m-0">
                           <img src="images/user-ibnm.jpg" alt="userbnc0"/>
                        </figure>
                        <h5> Paul Elliott 
                          <span className="d-block email-text"> Paul.Elliott@Fakemail.com </span>
                        </h5>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/abn" className="comon-user d-flex align-items-center">
                        <figure className="m-0">
                        <img src="images/user23.jpg" alt="userbnc0"/>
                        </figure>
                        <h5> Paul Elliott 
                          <span className="d-block email-text"> Paul.Elliott@Fakemail.com </span>
                        </h5>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/abn" className="comon-user d-flex align-items-center">
                        <figure className="m-0">
                           <img src="images/user102.jpg" alt="userbnc0"/>
                        </figure>
                        <h5> Paul Elliott 
                          <span className="d-block email-text"> Paul.Elliott@Fakemail.com </span>
                        </h5>
                    </NavLink>
                </li>
             </ul>
            
          </div>
        </>
    )
};
export default SubUser;