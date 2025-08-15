import React from 'react';
import './Header.css';
// import '../../App.css';
// import '../../index.css';

const Header = () => {
    return (
        <header>
            <div className="top_strip py-2">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50]">
                            <p className='text-[14px]'>
                                Get up to 50% off new season styles, limited time only.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
