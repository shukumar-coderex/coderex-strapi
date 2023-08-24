import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyMobileView extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="mobile-view">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                {content.mobileViewImage &&
                                <div className="mobile-view-wrapper">
                                    {content.mobileViewImage.map( ( item, index ) => {
                                        return (
                                            <div className="single-img" key={index}>
                                                {item.image &&
                                                    <img src={item.image.sourceUrl} alt="mobile view img"  />
                                                }
                                            </div>
                                        );
                                    } )}

                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .mobile-view .mobile-view-wrapper .single-img img {
                        width: 100%;
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default CaseStudyMobileView;

