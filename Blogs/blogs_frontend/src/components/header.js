import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

const Header = () => {
    return (
      <header>
      <ul>
          <li>
              <Link to='/'>My Site</Link>
          </li>
          <li>
              <Link to='/addPosts'>New Posts</Link>
          </li>
      </ul>
      </header>


    );
};

export default Header;