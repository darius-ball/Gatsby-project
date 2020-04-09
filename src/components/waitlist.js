import React, { useState } from 'react';
import { css } from '@emotion/core';

import Cookies from 'js-cookie';

import { Helmet } from 'react-helmet';

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

export default function JoinWaitlist({ open, onRequestClose }) {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function registerInterest(e) {
        e.stopPropagation();
        e.preventDefault();

        window._hsq = window._hsq || [];

        window._hsq.push([
            'identify',
            {
                firstName,
                lastName,
                email
            },
        ]);

        window._hsq.push([
            'trackEvent',
            {
                id: 'Joined Waitlist',
            },
        ]);

        fetch(
            'https://api.hsforms.com/submissions/v3/integration/submit/7418947/b76a9817-2970-4b0d-8528-5e745fb6702e',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: firstName },
                        { name: 'lastname', value: lastName },
                        { name: 'email', value: email },
                        { name: 'hs_lead_status', value: 'WAITLIST' },
                    ],
                    context: {
                        hutk: Cookies.get('hubspotutk'),
                    },
                    legalConsentOptions: {
                        consent: {
                            consentToProcess: true,
                            text:
                                'I agree to allow Vitruvian to store and process my personal data.',
                            communications: [
                                {
                                    value: true,
                                    subscriptionTypeId: 999,
                                    text:
                                        'I agree to receive marketing communications from Vitruvian.',
                                },
                            ],
                        },
                    },
                }),
            }
        );

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'register-interest',
                firstName,
                lastName,
                email
            }),
        }).then(() => {
            setEmailSubmitted(true);
        });
    }

    return (
        <>
            {open ? (
                <Helmet>
                    <body style="overflow: hidden;" />
                </Helmet>
            ) : null}
            <div
                onClick={onRequestClose}
                style={{
                    visibility: open ? 'visible' : 'hidden',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <div
                    onClick={e => e.stopPropagation()}
                    css={css`
                        position: relative;
                        cursor: default;
                        background-color: white;
                        padding: 40px;
                        max-width: 600px;
                        margin: 40px;

                        @media (max-width: 600px) {
                            margin: 0;
                            max-width: none;
                            width: 100%;
                            height: 100%;
                            overflow-y: auto;
                        }
                    `}>
                    {!emailSubmitted ? (
                        <>
                            <h2
                                style={{
                                    fontSize: 48,
                                    fontWeight: '600',
                                    margin: '18px 0',
                                    textAlign: 'center',
                                }}>
                                Join the wait list
                            </h2>
                            <p style={{ textAlign: 'center', lineHeight: 1.5 }}>
                                Enter your details below and you'll be one of the first to know when
                                the Vitruvian V200 becomes available for preorder
                            </p>
                            <form
                                css={css`
                                    display: block;
                                    label {
                                        font-weight: 600;
                                        margin: 8px 0;
                                        text-align: left;
                                        display: block;

                                        input {
                                            margin: 8px 0;
                                            width: 100%;
                                            display: block;

                                            border: 2px solid #171717;
                                            font-size: 14px;
                                            padding: 8px 16px;
                                            border-radius: 6px;
                                        }
                                    }
                                `}
                                onSubmit={registerInterest}
                                style={{ textAlign: 'center', marginTop: 16 }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: -8,
                                    }}>
                                    <label style={{ flex: 1, marginRight: 4 }}>
                                        First name*
                                        <input
                                            required
                                            type="text"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                        />
                                    </label>

                                    <label style={{ flex: 1, marginLeft: 4 }}>
                                        Last name*
                                        <input
                                            required
                                            type="text"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                        />
                                    </label>
                                </div>

                                <label>
                                    Email*
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </label>

                                <p style={{ fontSize: 12, marginTop: 16, color: '#8d8d8d' }}>
                                    By submitting this form you agree to allow Vitruvian to store
                                    and process your personal data and agree to receive marketing
                                    material from Vitruvian.
                                </p>

                                <button
                                    type="submit"
                                    style={{
                                        marginLeft: 8,
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
                                        width: '100%',
                                    }}>
                                    Join
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <h2
                                style={{
                                    fontSize: 48,
                                    fontWeight: '600',
                                    margin: '18px 0',
                                    textAlign: 'center',
                                }}>
                                Thanks!
                            </h2>
                            <p style={{ textAlign: 'center' }}>
                                We'll be in touch with product updates and let you know when the
                                V200 becomes available to purchase.
                            </p>
                        </>
                    )}

                    <a
                        onClick={onRequestClose}
                        style={{
                            cursor: 'pointer',
                            fontSize: 32,
                            position: 'absolute',
                            top: 16,
                            right: 32,
                        }}>
                        &times;
                    </a>
                </div>
            </div>
        </>
    );
}
