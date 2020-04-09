import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image/withIEPolyfill';
import { css } from '@emotion/core';
import JoinWaitlist from '../components/waitlist';
import useJs from '../components/useJs';

function SubHeroImage({ alt, fluid }) {
    return (
        <Img
            alt={alt}
            fluid={fluid}
            loading="eager"
            css={css`
                width: 100%;
                height: 100%;
                transition: all 0.6s ease-in-out;

                &:hover {
                    opacity: 0.8;
                    transform: scale3d(1.08, 1.08, 1.08);
                }
            `}
            objectFit="cover"
            objectPosition="50% 50%"
        />
    );
}

export default function Index({ data }) {
    const jsLoaded = useJs();
    const [waitlistOpen, setWaitlistOpen] = useState(false);

    return (
        <Layout>
            <SEO title="Join The Home Fitness Revolution" />
            <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
                <video
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    muted
                    playsInline
                    loop
                    autoPlay
                    src="https://content.jwplatform.com/videos/xYuDhWw9-BDBhNGrd.mp4"
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0,0,0,0.25)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        padding: 16,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <ul
                        css={css`
                            li {
                                display: inline;
                                margin-left: 16px;
                                margin-right: 16px;
                                color: white;

                                a {
                                    color: white;
                                    text-decoration: none;
                                }
                            }
                        `}>
                        <li>
                            <a href="#overview">Overview</a>
                        </li>
                        <li>
                            <a href="#how-it-works">How it works</a>
                        </li>
                    </ul>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}>
                    <div
                        className="animated fadeInUp"
                        css={css`
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        `}>
                        <h1
                            css={css`
                                font-size: 64px;
                                font-weight: 300;
                                color: white;

                                @media (max-width: 900px) {
                                    font-size: 54px;
                                }
                            `}>
                            Join the home fitness revolution
                        </h1>
                        <h2
                            css={css`
                                font-size: 32px;
                                font-weight: 300;
                                color: white;
                                margin-top: 16px;

                                @media (max-width: 900px) {
                                    font-size: 28px;
                                }
                            `}>
                            Launching May 2020
                        </h2>
                        <button
                            onClick={() => setWaitlistOpen(true)}
                            css={css`
                                cursor: pointer;
                                margin-top: 20px;

                                text-decoration: none;
                                background-color: rgba(255, 24, 113, 0.85);
                                color: white;
                                text-transform: uppercase;
                                border: none;
                                padding: 16px 32px;
                                border-radius: 1000px;
                                font-size: 16px;
                                font-weight: 600;

                                transition: all 0.6s ease-in-out;
                                
                                visibility: ${jsLoaded ? 'visible' : 'hidden'};

                                &:hover {
                                    background-color: rgb(255, 24, 113);
                                }
                            `}>
                            register interest
                        </button>
                    </div>
                </div>
            </div>

            <div
                css={css`
                    padding: 40px;
                    max-width: 960px;
                    margin: 0 auto;
                `}>
                <h2
                    style={{
                        fontSize: 48,
                        fontWeight: '600',
                        textAlign: 'center',
                    }}>
                    The most versatile workout across all muscle groups
                </h2>

                <div
                    css={css`
                        display: flex;
                        flex-direction: row;
                        margin-top: 32px;

                        text-align: center;

                        @media (max-width: 900px) {
                            flex-direction: column;
                        }

                        div {
                            margin: 8px;
                            flex: 1;
                        }

                        i {
                            font-size: 32px;
                        }

                        h3 {
                            font-weight: 600;
                            font-size: 24px;
                            margin: 8px 0;
                        }

                        p {
                            line-height: 1.2;
                        }
                    `}>
                    <div>
                        <i className="fal fa-calendar" />
                        <h3>Versatile</h3>
                        <p>
                            Full body workout with 100’s of different exercise types and workouts
                            across all muscle groups including squats, presses, curls, lifts
                        </p>
                    </div>
                    <div>
                        <i className="fal fa-bolt" />
                        <h3>Powerful</h3>
                        <p>
                            Unit weighs only 20kgs but each cable can provide 100kgs of resistance,
                            allowing a total of 200kgs for max lifts
                        </p>
                    </div>
                    <div>
                        <i className="fal fa-lightbulb-on" />
                        <h3>Smart</h3>
                        <p>
                            Adaptive force algorithm manages load, dynamically changing resistance
                            to slash time to build muscle, whilst logging data to monitor progress
                        </p>
                    </div>
                    <div>
                        <i className="fal fa-sparkles" />
                        <h3>Sleek</h3>
                        <p>
                            High end finish and dynamic lighting allow it to be a living room
                            feature or its light and flat design allow it to be easily stored out of
                            sight
                        </p>
                    </div>
                </div>
            </div>

            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    background-color: #171717;
                    color: #e4e4e4;

                    @media (max-width: 900px) {
                        flex-direction: column;
                    }
                `}>
                <div style={{ flex: 1 }}>
                    <div style={{ padding: '130px 80px' }}>
                        <h2 style={{ fontSize: 48, fontWeight: '600', marginRight: 20 }}>
                            Meet your new trainer
                        </h2>
                        <div
                            style={{
                                marginTop: 30,
                                fontSize: 20,
                                lineHeight: 1.5,
                            }}>
                            The V200 uses intelligent algorithms to dynamically update resistance in
                            real time giving you a workout perfectly tailored to your strength
                            allowing you to build muscle faster than ever before.
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'black', overflow: 'hidden' }}>
                    <Link to="/preorder">
                        <SubHeroImage alt="Preorder" fluid={data.newTrainer.childImageSharp.fluid} />
                    </Link>
                </div>
            </div>

            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    background-color: #171717;
                    color: #e4e4e4;

                    @media (max-width: 900px) {
                        flex-direction: column-reverse;
                    }
                `}>
                <div
                    style={{
                        flex: 1,
                        backgroundColor: 'black',
                        overflow: 'hidden',
                    }}>
                    <Link to="/preorder">
                        <SubHeroImage alt="Preorder" fluid={data.classImage.childImageSharp.fluid} />
                    </Link>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ padding: '130px 80px' }}>
                        <h2 style={{ fontSize: 48, fontWeight: '600' }}>
                            We're with you every step of the way
                        </h2>
                        <div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 30 }}>
                            With hundreds of classes and instructional videos you'll never work out
                            alone.
                        </div>
                    </div>
                </div>
            </div>
            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    @media (max-width: 900px) {
                        padding: 0 32px;
                        flex-direction: column-reverse;
                    }
                `}
                style={{ maxWidth: 960, margin: '0 auto' }}>
                <a name="overview" />
                <div style={{ flex: 2 }}>
                    <h3 style={{ fontSize: 28, fontWeight: '600', margin: '32px 0' }}>Overview</h3>
                    <p style={{ lineHeight: 1.6, fontSize: 18, marginBottom: 40 }}>
                        Vitruvian V200 is a cutting edge piece of hardware with immersive software
                        that empowers you to do a full range of resistance based training in your
                        own home and connect with communities of others. Using two cables, each able
                        to provide up to 100kgs of resistance with an integrated phone application
                        to control your device, Vitruvian lets you build and do work-outs, share
                        your progress, and compare work-outs with friends. It contains intelligent
                        software that dynamically changes resistance to match your performance and
                        provides an immersive audio and visual work-out with a virtual trainer
                        through Tablet, Smart TV or VR integration. It is a platform for building
                        and sharing your own work-outs, and following the regimes of your favourite
                        trainers and coaches.
                    </p>
                </div>
                <div
                    css={css`
                        @media (max-width: 900px) {
                            width: 60%;
                            padding: 0 !important;
                        }
                    `}
                    style={{ flex: 1, padding: '20px 0' }}>
                    <Img fluid={data.phone.childImageSharp.fluid} />
                </div>
            </div>

            <div
                css={css`
                    ul {
                        list-style: circle;
                        padding-left: 40px;

                        li {
                            font-size: 18px;
                            margin: 8px 0;
                        }
                    }
                    @media (max-width: 900px) {
                        padding: 0 32px;
                    }
                `}
                style={{ backgroundColor: '#171717' }}>
                <a name="how-it-works" />
                <div
                    css={css`
                        display: flex;
                        flex-direction: row;

                        @media (max-width: 900px) {
                            flex-direction: column;
                        }
                    `}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: 960,
                        margin: '0 auto',
                        color: 'white',
                        padding: '40px 0',
                    }}>
                    <div
                        css={css`
                            @media (max-width: 900px) {
                                width: 60%;
                                padding: 0 !important;
                            }
                        `}
                        style={{ flex: 2, padding: '20px 0' }}>
                        <Img fluid={data.phone2.childImageSharp.fluid} />
                    </div>
                    <div style={{ flex: 4 }}>
                        <h3 style={{ fontSize: 28, fontWeight: '600', margin: '32px 0' }}>
                            How it works
                        </h3>
                        <h4 style={{ fontSize: 22, fontWeight: '600', margin: '32px 0' }}>
                            1. Build
                        </h4>

                        <ul>
                            <li>
                                Stream live classes, select Vitruvian work-outs and circuits; or
                            </li>
                            <li>Create custom workouts with customisable weights and resistance</li>
                            <li>Set reps, exercises, or entire regimes</li>
                            <li>
                                Choose your weight, reps, or let Vitruvian adapt to your performance
                            </li>
                        </ul>

                        <h4 style={{ fontSize: 22, fontWeight: '600', margin: '32px 0' }}>2. Do</h4>

                        <ul>
                            <li>
                                Instructional videos for 50+ work-outs and classes or hundreds of
                                individual exercises
                            </li>
                            <li>Follow along on your TV, tablet, or phone</li>
                            <li>
                                Audio and visual assistance to count reps and track work-out to
                                completion
                            </li>
                            <li>Set weight or intelligent motors dynamically change resistance</li>
                        </ul>

                        <h4 style={{ fontSize: 22, fontWeight: '600', margin: '32px 0' }}>
                            3. Share
                        </h4>
                        <ul>
                            <li>
                                Share designed work-outs with friends and family on social media
                            </li>
                            <li>Compete with friends and share performance in-platform</li>
                            <li>Collaborate to build shared exercise programmes with friends</li>
                        </ul>

                        <h4 style={{ fontSize: 22, fontWeight: '600', margin: '32px 0' }}>
                            4. Compare
                        </h4>
                        <ul>
                            <li>
                                Track improvement in strength, weight, and endurance over time for
                                each exercise
                            </li>
                            <li>
                                See how friends and family did on similar work-outs and exercises
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                css={css`
                    @media (max-width: 900px) {
                        padding: 0 32px;
                    }
                `}
                style={{ maxWidth: 960, margin: '0 auto' }}>
                <h3 style={{ fontSize: 28, fontWeight: '600', margin: '32px 0' }}>Testimonials</h3>

                <p style={{ lineHeight: 1.6, fontSize: 18, marginBottom: 40 }}>
                    "Eccentric exercise resistance training” is getting popular, but in order to
                    perform it, either expensive machines (more than $20,000 for each exercise) or a
                    “spotter” who assists concentric phases of the exercises are necessary. The V200
                    provides many “eccentric-only” and/or “eccentric-overload” exercises, which
                    cannot be done by any existing equipment. Because of the freedom of the
                    movements that the V200 allows, it is possible to create many new eccentric
                    exercises using the machine. The V200 will change resistance training paradigm,
                    and will be used by children to older adults, clinical to athletic populations,
                    and businessmen to astronauts."
                    <br />
                    <span style={{ fontWeight: 'bold' }}>- Professor Ken Nosaka PhD</span>
                </p>

                <p style={{ lineHeight: 1.6, fontSize: 18, marginBottom: 40 }}>
                    "As an Exercise Physiologist and Scientist, the V200 provides a solution to a
                    previously unsolved problem - the challenge of creating different levels of
                    resistance in different phases of a movement. What is of particular interest to
                    me is the ability to increase load during the 'eccentric' (lowering) phase of a
                    repetition. There are a raft of health, fitness, performance and aesthetic
                    benefits that are unique to this type of muscle contraction. The V200 is an
                    elegant solution that will provide a time efficient and highly effective method
                    of training for strength, muscle growth and overall health."
                    <br />
                    <span style={{ fontWeight: 'bold' }}>
                        - Dan Williams, Director, Range of Motion
                    </span>
                </p>
            </div>

            <JoinWaitlist open={waitlistOpen} onRequestClose={() => setWaitlistOpen(false)} />

            <form style={{ display: 'none' }} data-netlify="true" name="register-interest">
                <input type="hidden" name="firstName" />
                <input type="hidden" name="lastName" />
                <input type="hidden" name="email" />
                <input type="hidden" name="age" />
                <input type="hidden" name="occupation" />
            </form>
        </Layout>
    );
}

export const query = graphql`
    query {
        deviceImage: file(relativePath: { eq: "device.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
        newTrainer: file(relativePath: { eq: "your-new-trainer.png" }) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
        classImage: file(relativePath: { eq: "with-you.png" }) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
        phone: file(relativePath: { eq: "phone.png" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
        phone2: file(relativePath: { eq: "phone-2.png" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
    }
`;
