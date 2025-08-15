import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="top_strip py-2">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className='text-[14px] font-[500]'>
                                Get up to 50% off new season styles, limited time only.
                            </p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul>
                                <li className='list-none'>
                                    <Link className='text-[12px] link font-[500]' to='#'>Help Center</Link>
                                </li>
                                {/* <li className='list-none'>
                                    <Link className='text-[12px] link' to='#'>Order Tracking</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
