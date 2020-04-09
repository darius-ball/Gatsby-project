import React, { useState } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Cookies from 'js-cookie';

const Label = styled.label`
    margin-top: 10px;
    font-weight: bold;

    input,
    textarea {
        margin-top: 8px;
    }
`;

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};



export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [completed, setCompleted] = useState(false);

    function submit(e) {
        e.stopPropagation();
        e.preventDefault();

        window._hsq = window._hsq || [];

        window._hsq.push([
            'identify',
            {
                firstName,
                lastName,
                email,
            },
        ]);

        window._hsq.push([
            'trackEvent',
            {
                id: 'Submitted Contact Form',
            },
        ]);

        fetch(
            'https://us-central1-vitruvian-938ef.cloudfunctions.net/contact',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: firstName + ' ' + lastName,
                    email,
                    content: message
                }),
            }
        );

        fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', firstName, lastName, email, message }),
        }).then(() => {
            setCompleted(true);
        });
    }

    return (
        <Layout>
            <SEO title="Contact" />
            <div style={{ maxWidth: 960, margin: '0 auto' }}>
                <h2
                    style={{
                        fontSize: 48,
                        fontWeight: '600',
                        margin: '18px 0',
                        textAlign: 'center',
                    }}>
                    Contact Us
                </h2>

                {completed ? (
                    <>
                        <h2
                            style={{
                                fontSize: 36,
                                fontWeight: '600',
                                marginTop: 40,
                                marginBottom: 20,
                                textAlign: 'center',
                            }}>
                            Thanks for getting in touch!
                        </h2>
                        <p style={{ textAlign: 'center', marginBottom: 80 }}>
                            We'll reach out to you shortly
                        </p>
                    </>
                ) : (
                    <form
                        onSubmit={submit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 960,
                            margin: '0 auto',
                            padding: '0 16px',
                            marginBottom: 60,
                        }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Label style={{ flex: 1, marginRight: 4 }}>
                                First name*
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        border: '2px solid #171717',
                                        fontSize: 14,
                                        padding: '8px 16px',
                                        borderRadius: 6,
                                    }}
                                />
                            </Label>
                            <Label style={{ flex: 1, marginLeft: 4 }}>
                                Last name*
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    required
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        border: '2px solid #171717',
                                        fontSize: 14,
                                        padding: '8px 16px',
                                        borderRadius: 6,
                                    }}
                                />
                            </Label>
                        </div>
                        <Label>
                            Email*
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    border: '2px solid #171717',
                                    fontSize: 14,
                                    padding: '8px 16px',
                                    borderRadius: 6,
                                }}
                            />
                        </Label>
                        <Label>
                            Message*
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 150,
                                    border: '2px solid #171717',
                                    fontSize: 14,
                                    padding: '8px 16px',
                                    borderRadius: 6,
                                }}
                            />
                        </Label>

                        <p style={{ fontSize: 12, marginTop: 16, color: '#8d8d8d' }}>
                            By submitting this form you agree to allow Vitruvian to store and process your personal data and agree to receive marketing material from Vitruvian.
                        </p>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                cursor: 'pointer',
                                backgroundColor: '#FF1871',
                                color: 'white',
                                textTransform: 'uppercase',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: 1000,
                                fontSize: 14,
                                fontWeight: '600',
                                marginTop: 20,
                            }}>
                            Submit
                        </button>
                    </form>
                )}
            </div>
            <form style={{ display: 'none' }} data-netlify="true" name="contact">
                <input type="hidden" name="firstName" />
                <input type="hidden" name="lastName" />
                <input type="hidden" name="email" />
                <input type="hidden" name="message" />
            </form>
        </Layout>
    );
}
