import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Love to Code💓</p>
        </div>
        <div className="socials ">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon hover:scale-120 transition-transform duration-300">
              <a target="_blank" href={socialImg.link}><img src={socialImg.imgPath} alt="social icon" /></a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aman Singh. Student.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;