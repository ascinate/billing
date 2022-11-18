import React, { useState, useEffect } from "react";
import {NavLink } from "react-router-dom";
import { FaRupeeSign, FaBell, FaBars, FaCircle, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Togglebtn from "../images/toogle.svg";
import SideBar from "../SideBar";
import UserAcountTop from "../components/UserAcountTop";
import userimg from "../images/a1.jpeg";
import AccountUserLeftSec from '../components/AccountUserLeftSec';
import SubUser from "../components/SubUser";
import  TagbsAcoounts from "../components/TagbsAcoounts";
import Logo from "../images/logo.jpg";
import LogoIcon from "../images/logo-icon.jpg";


function AccountSettings(){
    const navRef = React.useRef(null);
    const slideRef = React.useRef(null);
    
   

    const onAddClick = (e) => {
        navRef.current.classList.toggle("full-width");
        slideRef.current.classList.toggle("active");
      };

    return(
        <>
        <div className='page-wrapper chiller-theme toggled' >
        
                <div className="main-sec d-lg-flex">
                    <div className="sidebar-menu" ref={slideRef}>
                      <div className="inside0div">
                         <div className="logo-admin">
                            <NavLink to="/" >
                              <span className="logoicnm">
                                  <img src={LogoIcon} alt="logo"/>
                              </span>
                              <span className="full-logo">
                                <img src={Logo} alt="logo"/>
                              </span>
                            </NavLink>
                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                            className="d-block d-lg-none bar-icon1">  
                                <FaBars/> 
                            </a>

                            <button className="tog-btn me-2 togle-icon" onClick={onAddClick}>
                                 <span>
                                   <img src={Togglebtn} alt="anghm"/>
                                 </span>
                            </button>
                         </div>
                        <SideBar/>

                      </div>
                    </div>
                </div>

                <main className="body-total content-wrapper float-start w-100" ref={navRef}>
                    <div className="container-fluid px-lg-0">
                    

                        <div className="d-none d-lg-block">
                            <div className="top-bar-menu float-start">
                               
                               <UserAcountTop/>
                              
                            </div>
                        </div>
                        
                        <div className="dasb-div bk-div float-start w-100">
                        
                             <div className="comon-page-head">
                               <h2>Account Settings </h2>
                             </div>

                             <div className="body-account-sec">
                                 <div className="row">
                                    <div className="col-lg-3">
                                        <AccountUserLeftSec/>
                                        <SubUser/>
                                        
                                    </div>
                                    <div className="col-lg-9">
                                      <div className="right-tabs1">
                                       <TagbsAcoounts/>
                                       </div>
                                    </div>
                                 </div>
                             </div>
                        
                        </div>
                    </div>
                </main>

        </div>
       
        </>
    )
};
export default AccountSettings;