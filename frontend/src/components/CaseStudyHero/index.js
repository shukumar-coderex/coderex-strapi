import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';


class CaseStudyHero extends Component {

    render() {
        const {content, socialLinks} = this.props;
        let heroBg = content.backgroundImage ? content.backgroundImage.sourceUrl : '';
        return (
            <Fragment>
                <section className="inner-page-banner case-study-banner pos-relative">
                    <SocialLink socialLinks={socialLinks}/>

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="ipad-wrapper">
                                    <img src="/images/ipad-frame.png" className="img-fluid ipad-frame" alt="ipad-frame"  />
                                    <img src="/images/ipad-pen.png" className="img-fluid ipad-pen" alt="ipad pen"  />
                                    <span className="ipad-shadow"></span>
                                    {content.siteScreenshot &&
                                        <div className="scrolling-img-frame">
                                            <img src={content.siteScreenshot.sourceUrl} className="scroll-img img-fluid" alt="project image"  />
                                        </div>
                                    }
                                </div>

                                <div className="banner-content align-center-center">
                                    <h1 className="circular-700 color-fff crx crx-animated">{parse( content.heading )}</h1>
                                    <p className="title-26 color-fff crx crx-animated">{parse( content.shortDescription )}</p>
                                    {content.linkText &&
                                        <a href={content.link ? content.link.url : '#'} target={content.link ? content.link.target : '_self'} className="circular-700 crx crx-animated">{parse( content.linkText )} <img src="/images/arrow-right-white.png" className="crx crx-animated" alt="arrow" /></a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .inner-page-banner.case-study-banner {
                        background-image: url('${heroBg}');
                    }
                    .case-study-banner .ipad-wrapper .ipad-pen {
                        position: absolute;
                        top: 0;
                        left: -109px;
                        z-index: 2;
                        opacity: 1;
                        -webkit-animation: penMove 2s infinite ease;
                        -moz-animation: penMove 2s infinite ease;
                        -ms-animation: penMove 2s infinite ease;
                        -o-animation: penMove 2s infinite ease;
                        animation: penMove 2s infinite ease;
                    }
                    
                    .case-study-banner .ipad-wrapper .scrolling-img-frame .scroll-img {
                        width: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        opacity: 1;
                        -webkit-animation: projectMove 7s infinite ease;
                        -moz-animation: projectMove 7s infinite ease;
                        -ms-animation: projectMove 7s infinite ease;
                        -o-animation: projectMove 7s infinite ease;
                        animation: projectMove 7s infinite ease;
                    }

                    @-webkit-keyframes projectMove {
                        0% {top: 0px;}
                        25% {top: -25%;}
                        50% {top: -50%;}
                        75% {top: -75%;}
                        100% {top: -100%;}
                    }

                    @keyframes projectMove {
                        0% {top: 0px;}
                        25% {top: -25%;}
                        50% {top: -50%;}
                        75% {top: -75%;}
                        100% {top: -100%;}
                    }

                    @-webkit-keyframes penMove {
                        0% {
                            -webkit-transform: translateY(-60px);
                            -moz-transform: translateY(-60px);
                            -ms-transform: translateY(-60px);
                            -o-transform: translateY(-60px);
                            transform: translateY(-60px);
                        }

                        50% {
                            -webkit-transform: translateY(-20px);
                            -moz-transform: translateY(-20px);
                            -ms-transform: translateY(-20px);
                            -o-transform: translateY(-20px);
                            transform: translateY(-20px);
                        }

                        100% {
                            -webkit-transform: translateY(-60px);
                            -moz-transform: translateY(-60px);
                            -ms-transform: translateY(-60px);
                            -o-transform: translateY(-60px);
                            transform: translateY(-60px);
                        }
                    }

                    @keyframes penMove {
                        0% {
                            -webkit-transform: translateY(-60px);
                            -moz-transform: translateY(-60px);
                            -ms-transform: translateY(-60px);
                            -o-transform: translateY(-60px);
                            transform: translateY(-60px);
                        }

                        50% {
                            -webkit-transform: translateY(-20px);
                            -moz-transform: translateY(-20px);
                            -ms-transform: translateY(-20px);
                            -o-transform: translateY(-20px);
                            transform: translateY(-20px);
                        }

                        100% {
                            -webkit-transform: translateY(-60px);
                            -moz-transform: translateY(-60px);
                            -ms-transform: translateY(-60px);
                            -o-transform: translateY(-60px);
                            transform: translateY(-60px);
                        }
                    }

                    @media (max-width: 1700px) {
                        .case-study-banner .ipad-wrapper .ipad-pen {
                            max-width: 280px;
                            width: 100%;
                        }
                    }

                    @media (max-width: 1500px) {
                        .case-study-banner .ipad-wrapper .ipad-pen {
                            max-width: 200px;
                            left: -66px;
                            top: 50px;
                        }
                    }

                    @media (max-width: 1300px) {
                        .case-study-banner .ipad-wrapper .ipad-pen {
                            max-width: 140px;
                            left: -48px;
                            top: 70px;
                        }
                    }

                    @media (max-width: 1199px) {
                        .case-study-banner .cr-social-link {
                            text-align: center;
                        }
                    }

                    @media (max-width: 575px) {
                        .case-study-banner .ipad-wrapper .ipad-pen {
                            display: none;
                        }
                        .case-study-banner .ipad-wrapper .scrolling-img-frame .scroll-img {
                            -webkit-animation: none;
                            -moz-animation: none;
                            -ms-animation: none;
                            -o-animation: none;
                            animation: none;
                        }
                    }
                    
                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyHero;

