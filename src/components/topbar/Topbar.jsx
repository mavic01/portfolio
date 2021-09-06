import "./topbar.scss"
import logo from "../../img/default-monochrome.svg"
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" ><img className="logo" src={logo} alt="logo"/></a>
                    <div className="itemContainer">
                        <PersonIcon className="iconn"/>
                        <span>(+234)810 864 6033</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineIcon className="iconn"/>
                        <span>iberivictor7@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
