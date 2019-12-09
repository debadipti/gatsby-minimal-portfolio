import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import myImg from '../images/my-image.jpeg';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author
          bio
          links {
            github
            twitter
            behance
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.bio} />
      <div className="intro">
        <div className="intro_img">
          <img src={myImg} alt="a cute minnion" />
        </div>
        <h1 className="intro_heading">{data.site.siteMetadata.bio}</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
