import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class Family extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="family-area">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="family-area-content">
                                    <div className="section-title">
                                        <h3 className="circular-700 color-232">{parse( content.sectionTitle )}</h3>
                                        <div className="description">{parse( content.sectionDescription )}</div>
                                    </div>

                                    {content.featureImage &&
                                        <div className="family-area-feature-img">
                                            <Image width='1170' height='568' src={content.featureImage.sourceUrl} alt="coderex-family-img" />
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
                    
                `}</style>

            </Fragment>
        );
    }
}

export default Family;

