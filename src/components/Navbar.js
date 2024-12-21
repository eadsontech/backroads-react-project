import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../Data';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt='logo' />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
                return <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
            })}
        </ul>

        <ul className="nav-icons">
            {socialLinks.map((socialLink) => {
                return <li key={socialLink.id}>
            <a href={socialLink.href} target="_blank" rel="noreferrer" className="nav-icon"
              ><i className={socialLink.icon}></i
            ></a>
          </li>
            })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar