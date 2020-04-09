import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from "@emotion/styled"

const HeaderLink = styled(Link)`
    color: white;
    font-weight: 400;
    text-decoration: none;
    margin: 0 16px;
    font-size: 16px;
    
    &:hover {
      color: #FF1871;      
    }
    
    @media (max-width: 500px) {
      font-size: 14px;
      margin: 0 6px;
      text-align: center;
    }
`;

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: '#000',
            padding: '8px 0'
        }}>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: `0 auto`,
                maxWidth: 960,
            }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/preorder">Product</HeaderLink>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <HeaderLink
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>
                    <img
                        alt="Vitruvian Logo"
                        src={require('../images/vitruvian-icon-light.png')}
                        style={{ height: 50, marginBottom: 0 }}
                    />
                </HeaderLink>
            </div>
            <div style={{ flex: 1 }}>
                <HeaderLink to="/about">About</HeaderLink>
                <HeaderLink to="/contact">Contact</HeaderLink>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
