import "./footer.scss";
import Social from "./social";
import FooterMetaDaoIcon from "../../assets/icons/footer-metadao.png";

function Footer() {
    return (
        <div className="footer-wrap">
            <Social />
            <img className="footer-logo" src={FooterMetaDaoIcon} alt="footer" />
        </div>
    );
}

export default Footer;
