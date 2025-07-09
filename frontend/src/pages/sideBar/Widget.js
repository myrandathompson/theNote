import React from 'react';
import './RightSideBar.css';




const Widget = () => {
    return (
        <div className="widget">
            <h4>Questions Here</h4>
            <div className="RightSideBarDiv1">
                <div className='RightSideBarDiv2'>
                    <p> 
                        This is a widget section where you can add additional content 
                    </p>
                </div>
                <div className='RightSideBArDiv2'>
                    <p>
                         placeholder for additional information or links.
                    </p>
                </div>
            </div>
            <h4>Featured</h4>
            <div className='RightSideBarDiv1'>
                <div className='RightSideBarDiv2'>
                    <p>
                        reviews, or any other relevant content.
                    </p>
                </div>
            </div>

        </div>
            
    );
};

export default Widget;
