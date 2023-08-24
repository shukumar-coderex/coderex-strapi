import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class CareerHero extends Component {

    render() {
        const {content} = this.props;
        let bannerBg = content.backgroundImage.sourceUrl;

        return (
            <Fragment>
                <section className="career__hero">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="career__hero__content">
                                    <div className="career__hero__title">
                                        <h1>{parse( content.title )}</h1>
                                        <p>{parse( content.description )}</p>

                                        {content.buttonText &&
                                            <Link
                                            href={content.buttonLink ? content.buttonLink.url : '#'}
                                            >
                                                <a className="cr-btn-default open-jobs goto-jobs svg-btn-effect" target={`${content.buttonLink ? content.buttonLink.target : ''}`} >
                                                    <svg>
                                                        <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                    </svg>
                                                    <span>{content.buttonText}</span>
                                                </a>
                                            </Link>
                                        }

                                    </div>

                                    {content.image &&
                                        <div className="career__hero__feature-img">
                                            {/* <Image width={900} height={690} src={parse( content.image.sourceUrl )} alt="banner-img" /> */}
                                            <img src={parse( content.image.sourceUrl )} alt="banner-img" />
                                        </div>
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
                    .career__hero  {
                        background-color: #05155D;
                        background-image: url('${bannerBg}');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                    }
                    .career__hero__feature-img img{
                        max-width: 912px;
                    }
                    
                    @media (max-width: 1599px) {
                        .career__hero__feature-img img {
                            width: 100%;
                        }
                    
                    }
                    @media (max-width: 575px) {
                        .career__hero__feature-img img {
                            max-width: 290px;
                            margin: 0 auto;
                        }
                    
                    }
                `}</style>

            </Fragment>
        );
    }
}

export default CareerHero;

