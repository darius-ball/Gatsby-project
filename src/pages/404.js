import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '80px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: 48, fontWeight: '600' }}>404 Not Found</h1>
            <p style={{ marginTop: 20 }}>We couldn't find the page you're looking for.</p>
        </div>
    </Layout>
);

export default NotFoundPage;
