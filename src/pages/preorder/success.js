import React, { useEffect} from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';




export default function Success() {
    useEffect(() => {
        window._hsq = window._hsq || [];

        window._hsq.push(["trackEvent", {
            id: "Pre Ordered - Deposit"
        }]);
    }, []);

    return (
        <Layout>
            <SEO title="Success" />
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
                <h2
                    style={{
                        fontSize: 36,
                        fontWeight: '600',
                        marginTop: 40,
                        marginBottom: 20,
                        textAlign: 'center',
                    }}>
                    Thanks for placing a pre order!
                </h2>
                <p style={{ textAlign: 'center', marginBottom: 36 }}>We've reserved a V200 unit for you. We'll keep you up to date with product updates. When your V200 is ready to ship we'll let you know how you can complete your order.</p>
                <div>
                    <p style={{ textAlign: 'center', marginBottom: 12 }}>YOUR CODE</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: 36,
                        }}
                    >
                        <span
                            style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                                paddingLeft: 24,
                                paddingRight: 24,
                                border: 'dashed 1px grey',
                                fontSize: 24,
                                fontWeight: 700,
                                color: 'green',
                            }}
                        >
                        </span>
                    </div>
                </div>
                <p style={{ textAlign: 'center', marginBottom: 24 }}>Share your code with a friend. When they use it for their first order, you both get discounted offer.</p>
                
            </div>
        </Layout>
    );
}
