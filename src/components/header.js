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
      <Link to="/contact">contact me</Link>
    </nav>
  </div>
);

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: ``,
};

export default Header;
