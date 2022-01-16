import { SvgIcon, Link } from "@material-ui/core";
import TwitterIcon from "../../assets/icons/twitter.png";
import DiscordIcon from "../../assets/icons/discord.png";
import TelegramIcon from "../../assets/icons/telegram.png";
import MediumIcon from "../../assets/icons/medium.png";
import YoutubIcon from "../../assets/icons/youtub.png";

export default function Social() {
    return (
        <div className="social-row">
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
    );
}
