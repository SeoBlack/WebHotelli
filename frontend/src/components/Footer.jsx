const Footer = () => {
  return (
    <div id="footer">
      <div className="asiakaspalvelu">
        <p className="footer-title">Asiakaspalvelu</p>
        <p>tuki@webhotelli.oy</p>
        <p>Puh. 012-3456789</p>
        <p>Arkisin klo 9-16</p>
      </div>
      <div className="myynti">
        <p className="footer-title">Myynti</p>
        <p>myynti@webhotelli.oy</p>
        <p>Puh. 012-3456789</p>
        <p>Arkisin klo 9-16</p>
      </div>
      <div className="social">
        <img
          className="social-icon"
          src="/src/assets/youtube.png"
          alt="youtube-logo"
        />
        <img
          className="social-icon"
          src="/src/assets/twitter.png"
          alt="twitter-logo"
        />
        <img
          className="social-icon"
          src="/src/assets/linkedin.png"
          alt="linkedin-logo"
        />
        <img
          className="social-icon"
          src="/src/assets/facebook.png"
          alt="facebook-logo"
        />
      </div>
    </div>
  );
};

export default Footer;
