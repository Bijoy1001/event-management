
const Footer = () => {
    return (
        <div className="pt-10">
             <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                  <header className="footer-title">Services</header> 
                  <a className="link link-hover">Wedding Events</a>
                  <a className="link link-hover">Birthday Party</a>
                  <a className="link link-hover">Children Birthday</a>
                  <a className="link link-hover">Corporate Meets</a>
                  <a className="link link-hover">Proposal Arrange</a>
                  <a className="link link-hover">Social Meetings</a>
                  <a className="link link-hover">Outdoor Meets</a>
                  <a className="link link-hover">Fashion Shows</a>
                </nav> 
                <nav>
                  <header className="footer-title">Company</header> 
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
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