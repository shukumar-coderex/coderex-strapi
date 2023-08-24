import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';


class CaseStudyHighlight extends Component {

    render() {
        const {content} = this.props;
        let bgImage = content.backgroundImage ? content.backgroundImage.sourceUrl : '';
        return (
            <Fragment>
                <section className="section-highlight pos-relative">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="highlight-content">
                                    {content.sectionImage &&
                                        <Image layout='raw' width='1035' height='742' src={content.sectionImage.sourceUrl} alt="highlight section img"  />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {content.mockupView &&
                    <section className="mockup-view">
                        <img src={content.mockupView.sourceUrl} className="mockup-view-img" alt="mockup-view-img"  />
                    </section>
                }

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .section-highlight{
                        background-image: url('${bgImage}');
                    }
                    
                    .section-highlight .highlight-content img {
                        max-width: 100%;
                        display: block;
                        margin: 0 auto;
                    }
                    
                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyHighlight;

