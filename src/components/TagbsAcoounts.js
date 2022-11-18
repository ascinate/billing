import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";


function TagbsAcoounts(){
    return(
        <>
        <div className="tagbs-menu">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" 
                aria-selected="true">SETTINGS</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                aria-selected="false">API KEYS</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" 
                aria-selected="false">SUB-USERS</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                data-bs-target="#pills-contactnm" type="button" role="tab" aria-controls="pills-contact" 
                aria-selected="false">ACCESS HISTORY</button>
                </li>
            </ul>
        </div>

        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" 
            aria-labelledby="pills-home-tab">
                <div className="tabs-div-amnb-crm">
                  <div className="comon-lable-div">
                     <h5 className="cmbn-head"> Sign-In Methods </h5>
                  </div>
                  <div className="comon-lable-div">
                     <h5 className="cmbn-head"> Email Address
                      <span className="d-block"> Paul.Elliott@fakemail.com </span>
                     </h5>
                     <button className="btn btnc-mb"> Change Email </button>
                  </div>

                  <div className="comon-lable-div">
                     <h5 className="cmbn-head"> Password
                      <span className="d-block"> •••••••••••••••• </span>
                     </h5>
                     <button className="btn btnc-mb"> Reset Password </button>
                  </div>

                  <div className="sequery-div">
                    <div className="left-hnm">
                        <span className="iconmb">
                           <AiFillSafetyCertificate/>
                        </span>
                        <h5> Secure Your Account 
                        <span className="d-block"> Two-factor authentication adds an extra layer of security to your account. To 
                        log in, in addition you'll need to provide a 6 digit code</span>
                        </h5>
                    </div>
                    <button className="btn btnc-mb"> Enable </button>
                  </div>

                  <div className="comon-lable-div">
                     <h5 className="cmbn-head"> Authenticator Apps
                      <span className="d-block"> Scan QR Code </span>
                     </h5>
                     <button className="btn btnc-mb"> Scan QR Code </button>
                  </div>

                  <div className="comon-lable-div">
                     <h5 className="cmbn-head"> Email
                      <span className="d-block"> Receive OTP </span>
                     </h5>
                     <button className="btn btnc-mb"> Receive OTP </button>
                  </div>
                     
                </div>
            
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            <div className="tab-pane fade" id="pills-contactnm" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
        </>
    )
};
export default TagbsAcoounts;