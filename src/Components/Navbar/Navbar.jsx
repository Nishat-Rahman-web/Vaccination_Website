import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav>
      <div className="mainMenu">
        <div className="container">
          <div className="menuRow">
            {/* logo part */}
             <div className="menuLogo relative">
                <img src={logo} alt="logo" />
             </div>
            {/* menu items */}
            <ul>
              <li><Link to='#'>Home</Link></li>
              <li><Link to='#'>Services</Link></li>
              <li><Link to='#'>Schedule</Link></li>
              <li><Link to='#'>Contact us</Link></li>
            </ul>
            {/* menu buttons */}
            <div className="menuBtn">
              <Link to='#'>Check Status</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar