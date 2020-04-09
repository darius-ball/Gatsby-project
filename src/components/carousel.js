import React, { useState } from 'react';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

export default function GatsbyCarousel({ images }) {
    const [selected, setSelected] = useState(images[0]);

    const index = images.indexOf(selected);

    function next() {
        setSelected(images[(index + 1) % images.length]);
    }

    function prev() {
        setSelected(images[index === 0 ? images.length - 1 : index - 1]);
    }

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <Img fluid={selected} />
                <div
                    onClick={next}
                    css={css`
                        cursor: pointer;
                        position: absolute;
                        top: 50%;
                        right: 0;
                        background-color: rgba(0, 0, 0, 0.3);
                        transform: translate(0, -50%);
                        padding: 12px 18px;
                        color: white;

                        &:hover {
                            background-color: rgba(0, 0, 0, 0.4);
                        }
                    `}>
                    <i
                        className="fal fa-angle-right"
                        style={{ fontSize: 32, lineHeight: 1, marginTop: 3 }}
                    />
                </div>
                <div
                    onClick={prev}
                    css={css`
                        cursor: pointer;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        background-color: rgba(0, 0, 0, 0.3);
                        transform: translate(0, -50%);
                        padding: 12px 18px;
                        color: white;

                        &:hover {
                            background-color: rgba(0, 0, 0, 0.4);
                        }
                    `}>
                    <i
                        className="fal fa-angle-left"
                        style={{ fontSize: 32, lineHeight: 1, marginTop: 3 }}
                    />
                </div>
            </div>

            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    overflow-x: auto;
                `}>
                {images.map(it => (
                    <div key={it} onClick={() => setSelected(it)}>
                        <Img
                            fluid={it}
                            css={css`
                                margin: 8px;
                                width: 100px;
                                height: 80px;
                                opacity: ${selected === it ? '100%' : '60%'};

                                &:hover {
                                    opacity: 100%;
                                    cursor: pointer;
                                }
                            `}
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
