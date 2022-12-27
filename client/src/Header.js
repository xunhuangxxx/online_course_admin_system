import React from "react";
import { Consumer } from "./Context";

const Header = () => {
    return (
        <div>
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo"><a href="/">Courses</a></h1>
                    <nav>
                    {/* render signIn or signOut page  */}
                        <Consumer>
                            { (userInfo) =>{
                                console.log(userInfo);
                                return (
                                    userInfo.firstName ? 
                                    (   
                                      <ul className="header--signedout">
                                        <li> Hello, {userInfo.firstName}</li>
                                        <li><a href="/signout">Sign Out</a></li>
                                      </ul>
                                    )
                                    :
                                    (
                                      <ul className="header--signedout">
                                        <li><a href="/signup">Sign Up</a></li>
                                        <li><a href="/signin">Sign In</a></li> 
                                      </ul>
                                    )
                                )
                              }
                            }
                        </Consumer>    
                    </nav>
                </div>
            </header>
        </div>       
    )
}

export default Header;