import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Header = ({ branding }) => {
  return (
    <nav style={{ display: 'flex' }}>
    	<div style={{ marginRight: 'auto' }}>
    		<Link to="/">
    			{branding}
    		</Link>
    	</div>
    	<div style={{ display: 'flex' }}>
    		<ul>
    			<li>
    				<Link to="/">
              <i className="fas fa-home"> Home</i>
            </Link>
    			</li> 
    		</ul>
        <ul>
          <li>
            <Link to="/contact/add">
              <i className="fas fa-plus"> Add</i>
            </Link>
          </li> 
        </ul>
        <ul>
          <li>
            <Link to="/about">
              <i className="fas fa-question"> About</i>
            </Link>
          </li> 
        </ul>
    	</div>
    </nav>
  )
}


Header.defaultProps = {
	branding: "My App"
}

Header.propTypes = {
	branding: PropTypes.string.isRequired
}

export default Header;