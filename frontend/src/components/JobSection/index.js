import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';

class JobSection extends Component {


    render() {
        const {content} = this.props;
        let jobSectionBg = content.backgroundImage.sourceUrl;

        return (
            <Fragment>
                <section className="cr-jobs pos-relative" id="coderex-jobs">
                    <div className="overlay"></div>

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title">
                                    <h3 className="circular-700 color-fff">{parse( content.sectionTitle )}</h3>
                                    <div className="description color-fff">{parse( content.sectionDescription )}</div>
                                </div>

                                <div className="jobs-wrapper">
                                    {content.singleJob?.length && content.singleJob.map( ( item, index ) => {
                                        return (
                                            <div className="single-job" key={index}>
                                                <div className="job-left">
                                                    <h5 className="job-title circular-500">{parse( item.jobTitle )} <span className="vacancy">{parse( item.vacancy )}</span></h5>
                                                    <div className="job-description">
                                                        {parse( item.jobDescription )}
                                                    </div>

                                                </div>

                                                <div className="job-center">
                                                    <span className="job-type circular-500">{parse( item.jobType )}</span>
                                                    <p className="experience" dangerouslySetInnerHTML={{ __html: item.experience }}/>
                                                </div>

                                                <div className="job-right job-link">
                                                {item.buttonText &&
                                                    <Link
                                                    href={item.buttonLink ? item.buttonLink.url : '#'}
                                                    >
                                                        <a className="cr-btn-default view-more svg-btn-effect" target={`${item.buttonLink ? item.buttonLink.target : ''}`} >
                                                            <svg>
                                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                            </svg>
                                                            <span>{item.buttonText}</span>
                                                        </a>
                                                    </Link>
                                                }
                                                </div>
                                            </div>
                                        );
                                    } )}

                                    { ! content.singleJob?.length && (
                                        <p className="no-job-title">{parse( content.noJobTitle )}</p>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .join-us {
                        background: #f3f7ff;
                    }
                    .join-us .cr-cta {
                        display: none;
                    }

                    .cr-jobs .overlay {
                        background-image: url('${jobSectionBg}');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                    .cr-jobs .single-job .job-description p {
                        font-size: 18px;
                        color: rgba(35, 37, 45, 0.7);
                        line-height: 1.6;
                        margin-top: 10px;
                    }
                `}</style>

            </Fragment>
        );
    }
}

export default JobSection;

