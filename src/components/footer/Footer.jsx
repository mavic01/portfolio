import "./footer.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {

  let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className="footer">
            <div className="footer-links">
                <a className="ig" href="https://www.instagram.com/mavic_art/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                <a className="lkd" href="https://www.linkedin.com/in/victor-iberi-018904175/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a className="fb" href="https://web.facebook.com/iberi.victoremeka/" target="_blank" rel="noreferrer"><FacebookIcon /></a> <br/>
            </div>
            <div className="footer-para">
                <p className="m-0 text-center text-">
                    Copyright &copy;
                    <span> {getYear()} Mavic </span>
                </p>
            </div>
        </div>
    )
}

export default Footer
