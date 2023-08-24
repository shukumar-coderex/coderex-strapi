import React, { Component } from 'react';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';


class Introduction extends Component {

    render() {

        const {content} = this.props;
        let buttonLink = content.buttonUrl ?  content.buttonUrl.url : '#';
        return (
            <div>
                <section className="cr-hire pos-relative">
                    <div className="hire-illustration-wrapper">
                    {/* {content.image &&
                            <Image width='839' height='791' src={parse( content.image.data.attributes.url )} className="img-fluid hire-illustration" alt="hire image"  />
                    } */}
                    </div>

                    {/* <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="hire-content">
                                    <h2 className="circular-700 color-232 crx">{parse( content.heading )}</h2>
                                    <div className="crx description">{parse( content.description )}</div>

                                    {content.buttonText &&
                                        <Link
                                        href={buttonLink}
                                        >
                                            <a className="cr-btn-default lets-talk-btn svg-btn-effect crx">
                                                <svg>
                                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                </svg>
                                                <span>{content.buttonText}</span>
                                            </a>
                                        </Link>
                                    }


                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .hire-illustration {
                        position: absolute;
                        top: 50%;
                        left: -100px;
                        transform: translateY(-50%);
                    }
                    .cr-hire .hire-content .description p {
                        font-size: 26px;
                        line-height: 46px;
                        letter-spacing: 1px;
                        text-align: justify;
                    }

                    @media (max-width: 1700px) {
                        .hire-illustration {
                            max-width: 680px;
                            width: 100%;
                            left: -50px;
                        }
                    }
                    @media (max-width: 1500px) {
                        .hire-illustration {
                            max-width: 640px;
                        }
                    }

                    @media (max-width: 1300px) {
                        .hire-illustration {
                            max-width: 590px;
                        }
                        
                    }
                    @media (max-width: 1199px) {
                        .hire-illustration {
                            max-width: 490px;
                        }
                        .cr-hire .hire-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                            letter-spacing: normal;
                        }
                    }
                    @media (max-width: 991px) {
                        .hire-illustration {
                            position: relative;
                            top: inherit;
                            left: inherit;
                            display: block;
                            margin: 0 auto 60px;
                            padding: 0 15px;
                            transform: inherit;
                        }
                        .cr-hire .hire-content .description p {
                            text-align: center;
                        }
                    }
                    @media (max-width: 575px) {
                        .hire-illustration {
                            max-width: 300px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Introduction;
