import React from 'react';
import './layout.css';
import logo from '../../assets/image/logo.svg';
import { homeIcon, productIcon } from '../../assets/bootstrapIcon';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/image/innoloft-no-white-space.svg';

const Layout = (props) => {
    let navigationItems = [
        {
            name: 'Home',
            path: '/',
            icon: homeIcon
        },
        {
            name: 'Product',
            path: '/product',
            icon: productIcon
        }
    ]

    let path = props.children.props.location.pathname

    const checkActiveNav = (nav) => path === nav
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt={'...'} />
                </div>
            </header>
            <div className="layout_body">
                <aside className="side_bar_nav">
                    <ul className="nav_list">
                        {
                            navigationItems.map((x, i) => (
                                <NavLink to={x.path} className={`nav_link ${checkActiveNav(x.path) && 'active_nav'}`}>
                                    <li>
                                        <span className="nav_icon">
                                            {x.icon}
                                        </span>
                                        <span>
                                            {x.name}
                                        </span>
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </aside>
                <div className="page_container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout