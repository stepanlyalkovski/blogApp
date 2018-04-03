import React, { Component } from 'react';

const Spinner = () => {
    return (
        <div id="spinner" className="spinner">
            <div className="spinner-inner">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Spinner;
  
