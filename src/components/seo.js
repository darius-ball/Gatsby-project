import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`${site.siteMetadata.title} | %s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content:
                        'Home, Fitness, Equipment, Smart, Home, Gym, Fitness, Classes, Online, Live, On Demand, Vitruvian, V, 200,',
                },
            ].concat(meta)}>
            <link rel="preconnect" href="https://track.hubspot.com" />
            <link rel="preconnect" href="https://content.jwplatform.com/videos/xYuDhWw9-BDBhNGrd.mp4" />
            <script src="https://kit.fontawesome.com/acb87cb48e.js" crossOrigin="anonymous" />
            <script
                type="text/javascript"
                id="hs-script-loader"
                async
                defer
                src="https://js.hs-scripts.com/7418947.js"
            />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
