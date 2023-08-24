import React, { Component, Fragment } from 'react';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';


class CoderexAim extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="cr-aim pos-relative">
                    <div className="illustration-img-wrapper">
                        {content.leftImage &&
                                <Image width='500' height='500' src={content.leftImage.sourceUrl} className="left-bottom-btn" alt="illustration"  />
                        }

                        {content.leftImage &&
                            <div className="cr-aim-image">
                                <Image width='800' height='800' src={parse( content.rightImage.sourceUrl )} alt="illustration"  />
                            </div>
                        }
                    </div>

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="aim-content">
                                    <h2 className="section-title circular-700 color-232">{parse( content.heading )}</h2>
                                    <p className="description title-26">{parse( content.description )}</p>
                                    {content.buttonText &&
                                    <Link href={content.buttonLink ? content.buttonLink.url : '#'} >
                                        <a target={content.buttonLink ? content.buttonLink.target : '_self'} className="cr-btn-default talk-us-btn svg-btn-effect">
                                            <svg>
                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                            </svg>
                                            <span>{parse( content.buttonText )}</span>
                                        </a>
                                    </Link>
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
                    .cr-aim .left-bottom-btn {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                    @media (max-width: 1700px) {
                        .cr-aim .left-bottom-btn {
                            max-width: 280px;
                        }
                    }
                    @media (max-width: 1500px) {
                        .cr-aim .left-bottom-btn {
                            display: none;
                        }
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CoderexAim;

