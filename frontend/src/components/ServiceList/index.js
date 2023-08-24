import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class ProvidedServices extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="service-list-section pos-relative" id="service-list">
                    <div className="overlay"></div>
                        <div className="cr-container">
                            <div className="cr-row">
                                <div className="cr-col">
                                    <div className="service-content">
                                        <div className="section-title">
                                            <h2 className="circular-700">{parse( content.heading )}</h2>
                                        </div>
                                        <div className="service-list">
                                            <h6 className="sub-heading">{parse( content.subHeading )}</h6>
                                            <ul>
                                                {content.serviceList.map( ( item, index ) => {
                                                    return (
                                                        <li key={index}>{parse( item.serviceTitle )}</li>
                                                    );
                                                } )}
                                            </ul>
                                            <h6 className="bottom-text">{content.bottomText}</h6>

                                            {content.buttonText &&
                                            <Link
                                                href={content.buttonLink ? content.buttonLink.url : '#'}
                                            >
                                                <a target={content.buttonLink ? content.buttonLink.target : '_self'} className="cr-btn-default schedule-call svg-btn-effect crx">
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
                        </div>
                    </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    
                `}</style>
            </Fragment>
        );
    }
}

export default ProvidedServices;

