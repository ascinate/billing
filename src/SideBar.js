import React from "react";
import {NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import productsicon from "./images/products.svg";
import dashordicon from "./images/dashbord.svg";
import arrowicon from "./images/arrow.svg";
import ordericon from "./images/order.svg";
import billicon from "./images/bill.svg";
import supporticon from "./images/support.svg";
import settingsicon from "./images/settings.svg";

function SideBar(){
    return(
        <>
          
            <div className="main-menu d-none d-lg-block">
                <ul className="list-unstyled">
                    <li>
                    <NavLink to="/dashbord" activeClassName="menu_active"> 
                    <span className="menu-icon-new">
                    <img src={dashordicon} alt="dashbord"/>
                    </span> <span className="menu-text"> Dashboard </span>  </NavLink>
                    
                    </li>

                    <li className="dropdown"> 
                
                        <button type="button" className="btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="menu-icon-new"> <img src={productsicon} alt="icon1"/> </span> <span className="menu-text"> Products / Services </span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <NavLink to="/booking" activeClassName="menu_active"> <span className="menu-icon-new"> 
                            <img src={arrowicon} alt="arro"/>
                            </span> <span className="menu-text"> Active </span> </NavLink>
                            </li>
                            <li>
                            <NavLink to="/booking" activeClassName="menu_active"> <span className="menu-icon-new"> 
                            <img src={arrowicon} alt="arro"/>
                            </span> <span className="menu-text"> Suspended </span> </NavLink>
                            </li>
                            <li>
                            <NavLink to="/booking" activeClassName="menu_active"> <span className="menu-icon-new"> 
                            <img src={arrowicon} alt="arro"/>
                            </span> <span className="menu-text"> Suspended </span> </NavLink>
                            </li>
                            <li>
                            <p> Show Cancelled Services 
                              <button className="btn toogle-btn">
                              </button>
                            </p>
                            </li>
                            <li>
                            <NavLink to="/booking" activeClassName="menu_active"> <span className="menu-icon-new"> 
                            <img src={arrowicon} alt="arro"/>
                            </span> <span className="menu-text"> Cancelled </span> </NavLink>
                            </li>
                            
                        </ul>
                    
                    </li>

                    <li>
                    <NavLink to="/dashbord" activeClassName="menu_active"> 
                    <span className="menu-icon-new">
                    <img src={ordericon} alt="dashbord"/>
                    </span> <span className="menu-text"> Orders </span>  </NavLink>
                    
                    </li>
                    <li>
                    <NavLink to="/dashbord" activeClassName="menu_active"> 
                    <span className="menu-icon-new">
                    <img src={billicon} alt="dashbord"/>
                    </span> <span className="menu-text"> Billing </span>  </NavLink>
                    
                    </li>
                    <li>
                    <NavLink to="/dashbord" activeClassName="menu_active"> 
                        <span className="menu-icon-new">
                        <img src={supporticon} alt="dashbord"/>
                        </span> <span className="menu-text"> Support </span> 
                    </NavLink>
                    
                    </li>
                    <li>
                    <NavLink to="/dashbord" activeClassName="menu_active"> 
                        <span className="menu-icon-new">
                        <img src={settingsicon} alt="dashbord"/>
                        </span> <span className="menu-text"> Settings </span> 
                    </NavLink>
                    
                    </li>
                </ul>
            </div>
            
  
        </>
    )
};
export default SideBar;