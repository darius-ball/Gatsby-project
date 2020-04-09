import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { css } from '@emotion/core';

import styled from '@emotion/styled';

const TeamMembers = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

function TeamMember({ name, title, photo, description, size = 150 }) {
    return (
        <div
            css={css`
                max-width: 50%;
                flex-direction: row;

                @media (max-width: 800px) {
                    max-width: 100%;
                }
                
                @media (max-width: 480px) {
                    flex-direction: column;
                    
                    img {
                    margin-bottom: 16px;
                    }
                }
            `}
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                margin: 16,
            }}>
            <img
                src={photo}
                style={{
                    width: size,
                    height: size,
                    flexShrink: 0,
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
            />
            <div style={{ marginLeft: 20 }}>
                <h2 style={{ fontSize: 24, fontWeight: '600' }}>{name}</h2>
                {title ? <h3 style={{ fontSize: 18 }}>{title}</h3> : null}
                <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.5 }}>{description}</div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <Layout>
            <SEO title="Home" />

            <div
                css={css`
                    @media (max-width: 960px) {
                        padding: 0 40px;
                    }
                    p {
                        margin: 8px 0;
                        font-size: 16px;
                        line-height: 1.5;
                    }
                `}
                style={{ maxWidth: 960, margin: '0 auto' }}>
                <div
                    css={css`
                        h3 {
                            font-weight: 600;
                            font-size: 20px;
                            margin: 16px 0;
                        }
                    `}>
                    <h2
                        style={{
                            fontSize: 48,
                            fontWeight: '600',
                            margin: '18px 0',
                            textAlign: 'center',
                        }}>
                        The story
                    </h2>

                    <h3>2016</h3>
                    <p>
                        As with many disruptive companies, Vitruvian began with an idea and a
                        passion... Fitness influencers were on the rise, full of highly talented
                        trainers with a reach of millions but were struggling to have tools to
                        effectively train their legions of followers remotely. You can only do so
                        much resistance training without a set of weights..... and most home gym
                        equipment are unsightly and take up a lot of space in somebody’s home.
                    </p>
                    <p>
                        From this insight, the Vitruvian concept was born. An at home, open,
                        connected resistance training device that enable the worlds most talented
                        trainers to reach and train their followers wherever they are.
                    </p>
                    <p>
                        The design started with John Gregory tinkering around in his garage with a
                        set of weights, some pulleys, motors and computer to develop a concept that
                        worked, but was under-powered as the off the shelf motors available weren’t
                        up to the job.
                    </p>
                    <h3>2018</h3>
                    <p>
                        More powerful and compact motors became available which enabled a more
                        advanced proof of concept to be developed. It worked so well that Jon
                        committed to working full time to bring the technology to market.
                    </p>
                    <h3>2019</h3>
                    <p>
                        Things have moved very quickly since then with a “working at home prototype”
                        developed and Walid, Andrew and Izaak joining the team to accelerate the
                        development of the product.  We are at now at the point where we have a
                        version of the hardware and software that has a magical quality to it –
                        Seeing the “wow” moment when somebody steps onto the board to train for the
                        first time lets us know we are onto something special!
                    </p>
                    <h3>2020</h3>
                    <p>
                        We are now ready to share our product with the masses and very excited about
                        the opportunity in front of us - we are fully committed to building a
                        company that is the future of resistance training!
                    </p>
                </div>

                <h2
                    style={{
                        fontSize: 48,
                        fontWeight: '600',
                        margin: '18px 0',
                        textAlign: 'center',
                    }}>
                    The team
                </h2>
                <TeamMembers>
                    <TeamMember
                        name="Walid Sharif"
                        title="CEO/Co-Founder"
                        description="A Heinz Nixdorf electrical engineer graduate from Germany with a major in software engineering. Walid has 20+ years experience in B2B & B2C sales, marketing, finance, insurance and project management."
                        photo={require('../images/team/walid.png')}
                    />
                    <TeamMember
                        name="Jon Gregory"
                        title="CTO/Founder"
                        description="Jon the founder of Vitruvian and has 15+ years experience as an entrepreneur and has taken his previous venture to a multi million-dollar business. He holds an MBA / MSc along with a BSc (applied physics) and BSc (multi-disciplinary science)."
                        photo={require('../images/team/jon.png')}
                    />
                </TeamMembers>
                <TeamMembers>
                    <TeamMember
                        name="Ben Mactiernan"
                        title="Growth"
                        description="Ben is a Chicago Booth MBA and ex-strategy consultant with particular expertise in capital markets and developing go to market approaches for tech telecom and media companies."
                        photo={require('../images/team/ben.png')}
                    />
                    <TeamMember
                        name="Izaak Sultan"
                        title="Lead Software Engineer"
                        description="Izaak has a BSc (Computer Science) from UWA and 6+ years of experience working as a software engineer for early stage tech startups, bringing his previous startup to a successful exit."
                        photo={require('../images/team/izaak.jpg')}
                    />
                </TeamMembers>

                <TeamMembers>
                    <TeamMember
                        name="Wiebke Hensen"
                        title="Head Coach"
                        description="Wiebke is a qualified personal trainer from Germany specialising in group training and fitness for women, running a successful face to face and online training business helping them to achieve their health and fitness goals around the world."
                        photo={require('../images/team/wiebke.png')}
                    />
                </TeamMembers>

                <h2
                    style={{
                        fontSize: 48,
                        fontWeight: '600',
                        margin: '18px 0',
                        textAlign: 'center',
                    }}>
                    Advisors
                </h2>
                <TeamMembers>
                    <TeamMember
                        size={150}
                        name="Professor Ken Nosaka (PhD)"
                        description="Professor Ken Nosaka is the Director of Exercise and Sports Science in the School of Medical and Health Sciences at Edith Cowan University. Ken is a world leading researcher in eccentric exercise."
                        photo={require('../images/team/ken.png')}
                    />
                    <TeamMember
                        size={150}
                        name="Mike Perrow"
                        description="Mike has been supporting software teams for over 20 years, ranging from startups to large engineering projects and sites at Google and Facebook, building products that have touched the lives of billions of users and made billions of dollars."
                        photo={require('../images/team/mike.jpg')}
                    />
                </TeamMembers>
                <TeamMembers>
                    <TeamMember
                        size={150}
                        name="Rodney Brown"
                        description="Rodney is an experienced product engineer. He is able to deliver products on time and within budget, to an exceptional standard. Rodney has worked with Toyota and Dyson as a product engineer."
                        photo={require('../images/team/rodney.png')}
                    />
                    <TeamMember
                        size={150}
                        name="Andrew Larsen"
                        description="Andrew is the Investment Director for Larsen Ventures and Partner at Tempus Partners. Andrew is an active Director at Healthengine, and Board Observer for Go1 and EdStart. He is an active Mentor, Judge and Advisor in the Australian Startup ecosystem."
                        photo={require('../images/team/andrew.png')}
                    />
                </TeamMembers>
                <TeamMembers>
                    <TeamMember
                        size={150}
                        name="Dan Williams"
                        description="Dan Williams is an Exercise Physiologist and Exercise Scientist, and is the Director of Range of Motion. He has a Bachelor of Science and a Postgraduate Bachelor of Exercise Rehabilitation Science."
                        photo={require('../images/team/dan.png')}
                    />
                    <TeamMember
                        size={150}
                        name="Andrew Hagen"
                        description="Founder & ex CEO of Cycliq (ASX:CYQ), non executive director and advisor. Andrew has launched three KickStarter campaigns that have raised over $1,000,000."
                        photo={require('../images/team/andrewh.png')}
                    />
                </TeamMembers>
            </div>
        </Layout>
    );
}
