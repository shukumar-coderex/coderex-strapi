import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
// import ImageLoader from '../ImageLoader';
import Image from 'next/future/image';

class CaseStudyOptimization extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="optimization">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="optimization-content">
                                    <h4>{parse( content.heading )}</h4>
                                    <div className="description">{parse( content.description )}</div>

                                </div>
                                {content.image &&
                                    <Image layout='raw' width='1400' height='750' src={parse( content.image.sourceUrl )} className="optimization-img" alt="optimization img"  />
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .optimization .optimization-content .description p {
                        font-size: 26px;
                        line-height: 46px;
                        color: #071e3d;
                        text-align: justify;
                    }
                    .optimization .optimization-img {
                        margin-top: 50px;
                        display: block;
                        width: 100%;
                    }

                    @media (max-width: 1199px) {
                        .optimization .optimization-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                    @media (max-width: 767px) {
                        .optimization .optimization-content .description p {
                            text-align: left;
                        }
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyOptimization;

