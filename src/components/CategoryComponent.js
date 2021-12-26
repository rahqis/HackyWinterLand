import React from 'react';
import FunctionClick from './FunctionClickComponent';
import Data from "./test.json";

function Category(){
    return(
        <div class="NEw">
            <div className="posts">
                
                    <div>
                        {Data.map((userInfo)=> {
                            return (
                                <h4>
                                    <h4>{userInfo.paths['/Organizations'].get.responses[200].examples['application/json'][0].charityName}</h4>
                                    <h4>{userInfo.paths['/Organizations'].get.responses[200].examples['application/json'][0].mission}</h4>
                                    <h4>{userInfo.paths['/Organizations'].get.responses[200].examples['application/json'][0].websiteURL}</h4>
                                    <h4>{userInfo.paths['/Organizations'].get.responses[200].examples['application/json'][0].donationAddress.city}</h4>
                                     <h4>US</h4>
                                    <h4>{userInfo.paths['/Organizations'].get.responses[200].examples['application/json'][0].donationAddress.postalCode}</h4>
                                    
                                </h4>
                            
                            
                            )
                               
                        })}
                    </div>
            
            </div>
        
        <FunctionClick/>
        </div>
    )
}

export default Category;
