import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ author }) => (
  <div className="nav">
    <Link to="/" className="nav_logo">
      {author}
    </Link>
    <nav className="nav_links">
      <Link to="/works">works</Link>
      <a
        href="https://github.com/debadipti/gatsby-minimal-portfolio"
        target="_blank"
      >
        github
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={12}
          height={12}
          viewBox="0 0 16 16"
        >
          <path fill="#808080" d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z" />
          <path
            fill="#808080"
            d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"
          />
        </svg>
      </a>
    </nav>
  </div>
);

Header.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Header;
