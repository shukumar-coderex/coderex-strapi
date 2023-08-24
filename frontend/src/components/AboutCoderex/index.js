import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class AboutCoderex extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="team__work__section">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="team__work__content__wrapper">
                                    <div className="team__work__content">
                                        <h3>{parse( content.title )}</h3>
                                        <div className="description">{parse( content.description )}</div>

                                        {content.buttonText &&
                                            <Link
                                            href={content.buttonLink ? content.buttonLink.url : '#'}
                                            >
                                                <a className="cr-btn-default explore-team svg-btn-effect" target={`${content.buttonLink ? content.buttonLink.target : ''}`} >
                                                    <svg>
                                                        <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                    </svg>
                                                    <span>{content.buttonText}</span>
                                                </a>
                                            </Link>
                                        }
                                    </div>

                                    {content.image &&
                                        <div className="team__work__img">
                                            <Image width='848' height='599' src={parse( content.image.sourceUrl )} alt="team image" />
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
                    .team__work__content .description p { 
                        font-size: 20px;
                        color: rgba(35, 37, 45, 0.7);
                        line-height: 1.4;
                        padding: 5px 0;
                        margin-bottom: 10px;
                    }
                    .team__work__content .description p:last-child { 
                        margin-bottom: 0;
                    }
                    .team__work__img img{
                        max-width: 850px;
                    }
                    @media (max-width: 1700px) {
                        .team__work__img img {
                            max-width: 100%;
                        }
                    }



                `}</style>

            </Fragment>
        );
    }
}

export default AboutCoderex;

