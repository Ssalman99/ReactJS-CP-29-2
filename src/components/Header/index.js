// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="head-container">
    <ul className="ul-list">
      <li className="header">
        <Link to="/">Home</Link>
      </li>

      <li className="header">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
