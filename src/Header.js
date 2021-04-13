import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo'
                src="images\amazon-logo.png" />
            {/* src="https://www.pngjoy.com/pngm/16/437428_amazon-logo-amazon-logo-white-text-png-download.png" />*/}
            <div className="header_search">
                <input
                    className="header_searchInput" type="text" />
                {/* LOGO*/}
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_line_one">
                        Hello Guest</span>
                    <span className="header_option_line_two">
                        Sign In</span>
                </div>

                <div className="header_option">
                    <span className="header_option_line_one">
                        Returns</span>
                    <span className="header_option_line_two">
                        & Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_option_line_one">
                        Your</span>
                    <span className="header_option_line_two">
                        Prime</span>
                </div>
                <div className="header_basket">
                    <ShoppingBasketIcon />
                    <span className="header_option_line_two
                     header_basketCount">
                        0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
