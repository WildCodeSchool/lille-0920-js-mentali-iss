import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="foot-container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>A PROPOS</h4>
            <p className="text-justify">
              Mental-ISS.com fournit une information complète concernant la
              station spatiale internationale. Mental-ISS se consacre <br />à
              maintenir la position de l&apos;ISS sur une carte en temps réel, à
              fournir les données permettant d&apos;observer la station depuis{' '}
              <br />
              chez soi, de mettre à disposition les photos de l&apos;espace par
              par la NASA et de suivre le robot Curiosity sur Mars
            </p>
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>FOLLOW US</h4>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#7">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#8">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#10">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#11">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear} MENTAL-ISS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
