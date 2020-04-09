/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.css';
import '../animate.css';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const FooterLink = styled(Link)`
    color: white;
    font-weight: 400;
    text-decoration: none;
    margin: 0 16px;
    font-size: 14px;

    &:hover {
        color: #ff1871;
    }

    @media (max-width: 500px) {
        margin: 0 4px;
    }
`;

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <footer style={{ backgroundColor: 'black' }}>
                <div
                    css={css`
                        flex-direction: row;

                        @media (max-width: 500px) {
                            flex-direction: column;
                        }
                    `}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `16px 0`,
                        color: '#E4E4E4',
                    }}>
                    <div>
                        <FooterLink to="/privacy">Privacy Policy</FooterLink>
                        <FooterLink to="/preorder">Preorder</FooterLink>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, marginRight: 16 }}>
                            &copy; {new Date().getFullYear()} Vitruvian Investments Pty Ltd
                        </span>
                        <img
                            alt="Vitruvian Logo"
                            src={require('../images/vitruvian-icon-light.png')}
                            style={{ height: 36, marginBottom: 0 }}
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}
