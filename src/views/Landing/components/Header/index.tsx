import React, { useState } from "react";
import { Link } from "@material-ui/core";
import "./header.scss";
import MetaDaoIcon from "../../../../assets/icons/metadao-icon.png";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="landing-header">
            <img src={MetaDaoIcon} alt="logo" />
            <div className="landing-header-nav-wrap">
                <Link className="landing-header-nav-text" href="https://github.com/docs" target="_blank">
                    <p>DOCS</p>
                </Link>
                <Link className="landing-header-nav-text" href="https://github.com/blog" target="_blank">
                    <p>Blog</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
