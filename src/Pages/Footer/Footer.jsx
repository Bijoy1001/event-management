import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="pt-10">
             <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                  <header className="footer-title">Services</header> 
                  <a className="link link-hover"><NavLink to='/service'>Wedding Events</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Birthday Party</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Children Birthday</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Corporate Meets</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Proposal Arrange</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Social Meetings</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Outdoor Meets</NavLink></a>
                  <a className="link link-hover"><NavLink to='/service'>Fashion Shows</NavLink></a>
                </nav> 
                <nav>
                  <header className="footer-title">Company</header> 
                  <a className="link link-hover"><NavLink to='/about'>About us</NavLink></a>
                  <a className="link link-hover"><NavLink to='/contact'>Contact</NavLink></a>
                 </nav> 
                <nav>
                  <header className="footer-title">Legal</header> 
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </nav>
              </footer>
        </div>
    );
};

export default Footer;