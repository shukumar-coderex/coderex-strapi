import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';

class CaseStudyWebsiteOverview extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="case-overview">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="overview-content">
                                    <h4>{parse( content.title )}</h4>
                                    <div className="description title-26">{parse( content.description )}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {content.pageScreenshot &&
                    <div className="img-area">
                        {content.pageScreenshot.map( ( item, index ) => {
                            return (
                                <div className="single-img" key={index}>
                                    {item.image &&
                                        <Image layout='raw' width='433' height='953' src={item.image.sourceUrl} alt="site image"  />
                                    }
                                </div>
                            );
                        } )}
                    </div>
                    }

                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .case-overview .overview-content .description p {
                        color: #071e3d;
                        text-align: justify;
                        font-size: 26px;
                        line-height: 46px;
                    }
                    
                    @media (max-width: 1199px) {
                        .case-overview .overview-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                    
                    @media (max-width: 767px) {
                        .case-overview .overview-content .description p {
                            text-align: left;
                        }
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyWebsiteOverview;

