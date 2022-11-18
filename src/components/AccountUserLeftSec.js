import React from "react";
import userimg from "../images/a1.jpeg";

 function AccountUserLeftSec(){
    return(
        <>
        <div className="left-user-section">
            <div className="userid-details-left text-center">
                <figure className="us-pick mx-auto">
                    <img src={userimg} alt="user"/>
                </figure>
                <h4> Paul Elliott </h4>
                <h6> Paul Elliott </h6>
            </div>

            <div className="main-left-details">
            <div className="d-flex debn1 align-items-center justify-content-between">
                <h5> Details </h5>
                <button className="btn btn-settings">
                    Update
                </button>
            </div>

            <ul className="list-unstyled list-dbn10">
                <li>
                    <h5> Full Name 
                    <span className="d-block">  Paul Eliott </span>
                    </h5>
                </li>
                <li>
                    <h5> Account ID
                    <span className="d-block">  ID-45453423 </span>
                    </h5>
                </li>
                <li>
                    <h5> Billing Email
                    <span className="d-block">  info@mind2matter.com </span>
                    </h5>
                </li>
                <li>
                    <h5> Billing Address 
                    <span className="d-block">  101 Collin Street, Melbourne 3000, Australia </span>
                    </h5>
                </li>
                <li>
                    <h5>Language
                    <span className="d-block">  English </span>
                    </h5>
                </li>

                <li>
                    <h5>Upcoming Invoice
                    <span className="d-block"> 54238-8693 </span>
                    </h5>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
 };
 export default AccountUserLeftSec;