import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';


class CallToAction extends Component {

    render() {
        const {cta} = this.props;

        return (
            <Fragment>
                <section className="cr-cta pos-relative">
                    <div className="overlay">
                            <Image layout='raw' width='205' height='182' src="/images/cta-mug.png" className="img-fluid cta-mug-img" alt="cta img"  />
                    </div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="cta-content-wrapper">
                                    <div className="cta-img-area">
                                        <Image layout='raw' width='690' height='726' src={cta.ctaImage} className="img-fluid cta-img" alt="cta-img"  />
                                    </div>
                                    <div className="cta-content crx">
                                        <h2>{parse( cta.ctaHeadingText )}</h2>

                                        {cta.ctaButtonText &&
                                            <Link
                                                href={cta.ctaButtonLink ? cta.ctaButtonLink : '#'}
                                            >
                                                <a className="cr-btn-default contact-btn svg-btn-effect">
                                                    <svg>
                                                        <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                    </svg>
                                                    <span>{cta.ctaButtonText}</span>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    @media (max-width: 1700px) {
                        .cr-cta .overlay .cta-mug-img {
                            width: 170px;
                        }
                    }
                    @media (max-width: 1300px) {
                        .cr-cta .overlay .cta-mug-img {
                            width: 140px;
                        }
                    }
                    @media (max-width: 1199px) {
                        .cr-cta .overlay .cta-mug-img {
                            display: none;
                        }
                    }
                    @media (max-width: 991px) {
                        .cr-cta .overlay {
                            display: none;
                        }
                        .cr-cta .cta-img {
                            width: 100%;
                            height: auto;
                            left: inherit;
                            max-width: 100%;
                            margin: 0 auto;
                            display: block;
                            bottom: inherit;
                        }
                    }
                `}</style>
            </Fragment>
        );
    }
}

export default CallToAction;

