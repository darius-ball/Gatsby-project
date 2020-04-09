import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';

import { loadStripe } from '@stripe/stripe-js';
import Product from '../../components/product';

const stripePromise = loadStripe('pk_live_LCquyDDKVqq3gmm6YZ80lW8s00WacOJpFL');

export default function PreOrder({ data }) {
    const [qty, setQty] = useState(1);

    async function preorder() {
        const stripe = await stripePromise;

        fetch(`https://us-central1-vitruvian-938ef.cloudfunctions.net/preorder?qty=${qty}`)
            .then(response => response.json())
            .then(sessionId => {
                stripe.redirectToCheckout({
                    sessionId,
                });
            });
    }

    return (
        <Product>
            <p style={{ fontSize: 24 }}>
                <span style={{ textDecoration: 'line-through' }}>${2200 * qty}</span> ${999 * qty}{' '}
                USD
            </p>
            <p style={{ fontSize: 14, marginBottom: 16, marginTop: 4 }}>(first 1000 pre-orders)</p>

            <div>
                <label>
                    Quantity
                    <select
                        value={qty}
                        onChange={e => setQty(e.target.value)}
                        style={{
                            marginLeft: 8,
                            marginBottom: 16,
                            height: 36,
                            backgroundColor: 'white',
                            border: '2px solid black',
                            fontSize: 14,
                        }}>
                        {[...new Array(25)].map((it, ix) => (
                            <option key={ix} value={ix + 1}>
                                {ix + 1}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <button
                onClick={preorder}
                css={css`
                    cursor: pointer;

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
                Pre order - ${qty * 50} USD deposit
            </button>
        </Product>
    );
}
