import React from "react";
import { Grid, Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { trim } from "../../../../helpers";
import "./main.scss";
import { IReduxState } from "../../../../store/slices/state.interface";
import MetaDaoBg1 from "../../../../assets/icons/metadao-landing-bg1.png";
import AvawareLog from "../../../../assets/icons/avaware.png";

function Main() {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const stakingAPY = useSelector<IReduxState, number>(state => {
        return state.app.stakingAPY;
    });
    const treasuryBalance = useSelector<IReduxState, number>(state => {
        return state.app.treasuryBalance;
    });
    const circSupply = useSelector<IReduxState, number>(state => {
        return state.app.circSupply;
    });

    const trimmedStakingAPY = trim(stakingAPY * 100, 1);

    return (
        <div className="landing-main">
            <div className="landing-main-metadao-info-wrap">
                <div className="landing-main-metadao-info">
                    <div className="landing-main-help-text-wrap">
                        <p>Avalanche META →</p>
                    </div>
                    <div className="landing-main-title-wrap">
                        <p>The Defi MetaDAO</p>
                    </div>
                    <div className="landing-main-help-text-wrap">
                        <p>
                            Inspired by the decentralization of cryptocurrencies, a group of Avalanche developers came up with the idea for a decentralized autonomous organization,
                            or MetaDAO.
                        </p>
                    </div>
                    <div className="landing-main-btns-wrap">
                        <Link href="https://app.wonderland.money" target="_blank" rel="noreferrer">
                            <div className="landing-main-btn launch-app-btn">
                                <p>Launch App</p>
                            </div>
                        </Link>
                        <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                            <div className="landing-main-btn start-farm-btn">
                                <p>Starting Farming</p>
                            </div>
                        </Link>
                    </div>
                    <div className="landing-main-help-text-wrap">
                        <p>
                            Powered by Avaware → <img src={AvawareLog} alt="avaware" />
                        </p>
                    </div>
                </div>
                <div className="metadao-bg-wrap">
                    <img src={MetaDaoBg1} alt="bg1" />
                </div>
            </div>
            <div className="landing-main-metadao-value-wrap">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className="landing-main-metadao-item-wrap">
                            <p className="landing-main-metadao-item-title">Total Staked</p>
                            <p className="landing-main-metadao-item-value">
                                {isAppLoading ? (
                                    <Skeleton width="180px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(circSupply)
                                )}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className="landing-main-metadao-item-wrap">
                            <p className="landing-main-metadao-item-title">Treasury Balance</p>
                            <p className="landing-main-metadao-item-value">
                                {isAppLoading ? (
                                    <Skeleton width="180px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(treasuryBalance)
                                )}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div className="landing-main-metadao-item-wrap">
                            <p className="landing-main-metadao-item-title">Current APY</p>
                            <p className="landing-main-metadao-item-value">
                                {stakingAPY ? <>{new Intl.NumberFormat("en-US").format(Number(trimmedStakingAPY))}%</> : <Skeleton width="150px" />}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Main;
