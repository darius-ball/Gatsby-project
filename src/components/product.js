import Layout from './layout';
import SEO from './seo';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import GatsbyCarousel from './carousel';

export default function Product({ children }) {
    const data = useStaticQuery(graphql`
        query {
            product: file(relativePath: { eq: "product.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            deviceImage: file(relativePath: { eq: "device-3.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            outdoors: file(relativePath: { eq: "DSC07525.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            straps: file(relativePath: { eq: "DSC07034.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            overhead: file(relativePath: { eq: "DSC07223.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Preorder" />

            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    padding: 40px;

                    @media (max-width: 1100px) {
                        flex-direction: column;
                    }
                `}>
                <div style={{ flex: 1, padding: 40 }}>
                    <GatsbyCarousel
                        images={[
                            data.product.childImageSharp.fluid,
                            data.deviceImage.childImageSharp.fluid,
                            data.outdoors.childImageSharp.fluid,
                            data.straps.childImageSharp.fluid,
                            data.overhead.childImageSharp.fluid,
                        ]}
                    />
                </div>
                <div style={{ flex: 1, padding: 40, flexShrink: 0 }}>
                    <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 16 }}>
                        Vitruvian V200
                    </h2>
                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
                        Launching May 2020
                    </h3>

                    {children}

                    <p style={{ fontSize: 16, lineHeight: 1.2, marginTop: 16 }}>
                        Vitruvian is a digital weight system that allows users to train with up to
                        200kg of resistance in a small 20kg package.
                    </p>

                    <ul
                        style={{
                            listStyle: 'circle',
                            paddingLeft: 40,
                            fontSize: 16,
                            lineHeight: 1.2,
                            marginTop: 16,
                            marginBottom: 32,
                        }}>
                        <li>
                            Perform any barbell or dumbbell exercise to exercises all muscle groups
                        </li>
                        <li>
                            Instructional videos for 1000’s of exercises, 50+ work-outs and classes
                            available to be streamed to your Smart TV or other connected device
                        </li>
                        <li>
                            Smart algorithms manages load, dynamically changing resistance to slash
                            time to build muscle and reduce the risk of injury
                        </li>
                        <li>
                            Training data is logged which enables you to monitor progress and share
                            on social channels
                        </li>
                        <li>
                            Unit is controlled by Vitruvian ios and Andriod apps available free to
                            download in the Google Play and Apple App store
                        </li>
                    </ul>

                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
                        First 1000 pre-order bonus
                    </h3>
                    <ul
                        style={{
                            listStyle: 'circle',
                            paddingLeft: 40,
                            fontSize: 16,
                            lineHeight: 1.2,
                            marginTop: 16,
                        }}>
                        <li>
                            Discounted price of $999 USD, normally $2200 (interest free financing
                            available)
                        </li>
                        <li>12 months free Vitruvian subscription</li>
                    </ul>

                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, marginTop: 16 }}>
                        What's in the box
                    </h3>
                    <ul
                        style={{
                            listStyle: 'circle',
                            paddingLeft: 40,
                            fontSize: 16,
                            lineHeight: 1.2,
                            marginTop: 16,
                        }}>
                        <li>The Vitruvian V200 digital weight system</li>
                        <li>Attachments: handles</li>
                        <li>12 months free voice-controlled weights</li>
                        <li>
                            Videos featuring 1000+ workouts suitable for everyone from teenagers to
                            elderly
                        </li>
                    </ul>

                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, marginTop: 16 }}>
                        Optional accessories
                    </h3>
                    <ul
                        style={{
                            listStyle: 'circle',
                            paddingLeft: 40,
                            fontSize: 16,
                            lineHeight: 1.2,
                            marginTop: 16,
                        }}>
                        <li>V multi-bar</li>
                        <li>V bench</li>
                        <li>V triceps-rope</li>
                        <li>V ankle-strap</li>
                        <li>V belt</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

