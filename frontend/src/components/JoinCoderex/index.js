import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class JoinCoderex extends Component {


    render() {
        const {content} = this.props;
        let joinFeatureBg = content.backgroundImage.sourceUrl;
        return (
            <Fragment>
                <section className="join__feature pos-relative">
                    <div className="overlay"></div>
                        <div className="cr-container">
                            <div className="cr-row">
                                <div className="cr-col">
                                    <div className="join__feature__area">
                                        <div className="join__feature__title">
                                           <h3>{parse( content.sectionTitle )}</h3>
                                        </div>

                                        <div className="join__feature__content">
                                            <div className="join__feature__text">
                                                <h4>{parse( content.overviewTitle )}</h4>
                                                <div className="description">
                                                    {parse( content.overviewDescription )}
                                                </div>

                                                {content.buttonText &&
                                                    <Link
                                                    href={content.buttonLink ? content.buttonLink.url : '#'}
                                                    >
                                                        <a className="cr-btn-default apply-now goto-jobs svg-btn-effect" target={`${content.buttonLink ? content.buttonLink.target : ''}`} >
                                                            <svg>
                                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                            </svg>
                                                            <span>{content.buttonText}</span>
                                                        </a>
                                                    </Link>
                                                }
                                            </div>

                                            {content.image &&
                                                <div className="join__feature__img">
                                                    <Image width='732' height='637' src={parse( content.image.sourceUrl )} alt="team" />
                                                </div>
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
                    .join__feature .overlay { 
                        background-image: url('${joinFeatureBg}');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                    .join__feature__text .description p {
                        font-size: 20px;
                        color: rgba(35, 37, 45, 0.7);
                        line-height: 1.7;
                        padding: 5px 0;
                        margin-bottom: 10px;
                    }

                    .join__feature__text .description p:last-child {
                        margin-bottom: 0;
                    }

                    .highlighter-border {
                        position:relative;
                    }
                    
                    .highlighter-border:before {
                        background: url('/images/border.png');
                    }
                    
                    .highlighter-border:before {
                        content: "";
                        position: absolute;
                        bottom: -16px;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center bottom;
                        background-size: 100%;
                    }

                    .join__feature__title {
                        text-align: center;
                        max-width: 500px;
                        margin: 0 auto;
                        
                    }
                    .join__feature__title h3 {
                        display: inline-block;
                        background: url('/images/particless.png');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                        overflow: hidden;
                        padding: 33px 0;
                    }

                    @media (max-width: 1199px) {
                        .join__feature__title h3 {
                            padding: 25px 0;
                        }
                    }

                    @media (max-width: 575px) {
                        .highlighter-border:before {
                            bottom: -11px;
                        }
                    }


                `}</style>

            </Fragment>
        );
    }
}

export default JoinCoderex;

