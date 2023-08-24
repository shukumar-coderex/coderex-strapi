import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import ReactCompareImage from 'react-compare-image';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyCompare extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="case-study-compare">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title">
                                    <h4>{parse( content.heading )}</h4>
                                    <div className="description">{parse( content.description )}</div>
                                </div>

                                <div className="compare-imgs">
                                    <ReactCompareImage handle={<span className="img-handler">&#8596;</span>} sliderLineColor="#00b4ff" leftImage={content.newWebsiteImage.sourceUrl} rightImage={content.oldWebsiteImage.sourceUrl} />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .case-study-compare .section-title .description p {
                        color: #071e3d;
                        text-align: justify;
                        font-size: 26px;
                        line-height: 46px;
                    }
                    .case-study-compare .section-title .description ul{
                        list-style: disc;
                        margin: 10px 0px 0px 22px;
                    }
                    
                    @media (max-width: 1199px) {
                        .case-study-compare .section-title .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                    
                    @media (max-width: 767px) {
                        .case-study-compare .section-title .description p {
                            text-align: left;
                        }
                    }
                    
                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyCompare;

