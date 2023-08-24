import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';


class CaseStudyBrand extends Component {

    render() {
        const {content} = this.props;
        let fontLength = content.typography.fontFamily.length ;

        return (
            <Fragment>
                <section className="project-typography">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="typography-wrapper">
                                    <div className="typo-title">
                                        <h4 className="circular-700">{parse( content.typography.title )}</h4>
                                    </div>
                                    <div className="project-brand-color">
                                        {content.typography.image &&
                                            <Image width='368' height='405' src={content.typography.image.sourceUrl} alt="img"  />
                                        }
                                    </div>
                                    <div className="project-font-family">
                                        {content.typography.fontFamily.map( ( item, index ) => {

                                            return (
                                                <div className="single-font-family" key={index}>
                                                    <h5 className="circular-700" dangerouslySetInnerHTML={{__html: item.name}} />
                                                    {item.sampleImage &&
                                                        <Image width='385' height='84' src={item.sampleImage.sourceUrl} alt="img"  />
                                                    }
                                                </div>
                                            );
                                        } )}

                                    </div>
                                </div>

                                <div className="project-color">
                                    {content.color.color.map( ( item, index ) => {
                                        return (
                                            <div
                                            className={`single-color color-${index + 1} `}
                                            style={{backgroundColor: item.backgroundColor, color: item.textColor}}
                                            key={index}
                                            >
                                                <span>{item.backgroundColor}</span>
                                            </div>
                                        );
                                    } )}

                                    <div className="color-title">
                                        <h4 className="circular-700 pos-relative">{parse( content.color.title )}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {content.completeViewImage &&
                <section className="complete-view pos-relative">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="complete-view-img">
                                    <Image width='1256' height='1860' src={content.completeViewImage.sourceUrl} alt="complete-view-img"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .complete-view .complete-view-img {
                        text-align: center;
                    }
                    
                    .complete-view .complete-view-img img {
                        display: block;
                        margin: 0 auto;
                        max-width: 100%;
                    }
                    
                    @media (max-width: 1199px) {
                        .project-typography .project-font-family .single-font-family {
                            width: calc(100% / ${fontLength});
                        }
                    }
                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyBrand;

