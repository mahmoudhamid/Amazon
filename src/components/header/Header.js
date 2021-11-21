import React, { useState } from 'react';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from '@mui/icons-material/Reorder';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider/StateProvider';
const Header = () => {
    const [{ currentUser, basket, items }, dispatch] = useStateValue();
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);

    const searchDropdown = () => (items.map((Item) => (
        <Link to="/currentProduct">
            <option key={Math.random()} value={Item.name} className="header_search_item" />
        </Link>
    ))
    )
    const search = (e) => {
        e.preventDefault();
        let Items = items.filter(item => (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        return Items;
    }

    const totalLength = () => {
        let total = 0;
        basket.forEach(item => {
            total += item.num;
        })
        return total;
    }
    const handleStack = () => {
        setShow(!show);
    }
    const logout = () => {
        dispatch({
            type: "SET_CURRENT_USER",
            item: {}
        })
    }
    return (
        <>
            <div className="header">
                <Link to="/Amazon/">
                    <img className="header_logo wb" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="image" />
                </Link>
                <form onSubmit={search} className="header_search">
                    <input onChange={(e) => setSearchTerm(e.target.value)} list="list" placeholder="search" className="header_searchInput" type="text" />
                    <datalist id="list" className="header_search_filter">
                        {searchDropdown()}
                    </datalist >
                    <SearchIcon className="header_searchIcon" />
                </form>
                <div className="header_nav" >
                    <Link to="/login">
                        <div className="header_option wb">
                            <span className="header_optionLineOne">Hello {currentUser.name ? currentUser.name : 'Guest'}</span>
                            <span className="header_optionLineTwo">Sign In</span>
                        </div>
                    </Link>
                    <div className="header_option wb">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                    <div className="header_optionBasket wb">
                        <Link to="/checkout">
                            <div className="header_optionLineTwo header_basketCount orange">{totalLength()}</div>
                            <div><ShoppingCartOutlinedIcon /></div>
                        </Link>
                    </div>
                    <div onClick={handleStack} className="header_stack wb">
                        <ReorderIcon />
                    </div>
                </div>
            </div>
            {
                show && (
                    <div className="show_items">
                        {
                            (currentUser.name) ?
                                (<Link to="/login">
                                    <div onClick={logout} className="tologin">
                                        <div>Logout</div>
                                        <LoginIcon />
                                    </div>
                                </Link>
                                ) : (
                                    <Link to="/login">
                                        <div className="tologin">
                                            <div>Login</div>
                                            <LogoutIcon />
                                        </div>

                                    </Link>
                                )
                        }
                    </div>
                )
            }


            <div className="underHeader">
                <div className="wb">Today's Deals</div>
                <div className="wb">Buy Again</div>
                <div className="wb">Customer Service</div>
                <div className="wb">Browsing History</div>
                {currentUser.name && <div className="wb"> {currentUser.name}'s Amazon.com </div>}
                <div className="wb">Gift Cards</div>
                <div className="wb">Registry</div>
                <div className="wb">Sell</div>
            </div>
        </>
    )
}

export default Header
