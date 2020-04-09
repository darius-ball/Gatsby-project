import React, { useState } from 'react';

import { css } from '@emotion/core';

import JoinWaitlist from '../components/waitlist';
import useJs from '../components/useJs';
import Product from '../components/product';

export default function PreOrder({ data }) {
    const jsLoaded = useJs();
    const [waitlistOpen, setWaitlistOpen] = useState(false);

    return (
        <Product>
            <button
                onClick={() => setWaitlistOpen(true)}
                css={css`
                    cursor: pointer;

                    visibility: ${jsLoaded ? 'visible' : 'hidden'};

                    text-decoration: none;
                    background-color: rgba(255, 24, 113, 0.85);
                    color: white;
                    text-transform: uppercase;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 1000px;
                    font-size: 14px;
                    font-weight: 600;

                    transition: all 0.2s ease-in-out;

                    &:hover {
                        background-color: rgb(255, 24, 113);
                    }
                `}>
                Reserve your spot on the pre-order waiting list
            </button>
            <JoinWaitlist open={waitlistOpen} onRequestClose={() => setWaitlistOpen(false)} />
        </Product>
    );
}
