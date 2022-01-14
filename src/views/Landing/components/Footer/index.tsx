import React from "react";
import { Link } from "@material-ui/core";
import "./footer.scss";
import TwitterIcon from "../../../../assets/icons/twitter.png";
import DiscordIcon from "../../../../assets/icons/discord.png";
import TelegramIcon from "../../../../assets/icons/telegram.png";
import MediumIcon from "../../../../assets/icons/medium.png";
import YoutubIcon from "../../../../assets/icons/youtub.png";

function Footer() {
    return (
        <div className="landing-footer">
            <div className="landing-footer-launch-wrap">
                <div className="landing-footer-text">MetaDAO</div>
                <Link href="https://app.wonderland.money" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Launch App</p>
                    </div>
                </Link>
            </div>
            <div className="landing-footer-socials-wrap">
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src={TwitterIcon} alt="social" />
                </Link>
                <Link href="https://discord.com" target="_blank" rel="noreferrer">
                    <img src={DiscordIcon} alt="social" />
                </Link>
                <Link href="https://telegram.com" target="_blank" rel="noreferrer">
                    <img src={TelegramIcon} alt="social" />
                </Link>
                <Link href="https://medium.com" target="_blank" rel="noreferrer">
                    <img src={MediumIcon} alt="social" />
                </Link>
                <Link href="https://youtub.com" target="_blank" rel="noreferrer">
                    <img src={YoutubIcon} alt="social" />
                </Link>
            </div>
        </div>
    );
}

export default Footer;
