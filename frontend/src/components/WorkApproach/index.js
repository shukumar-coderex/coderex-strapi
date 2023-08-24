import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class WorkApproach extends Component {

    render() {
        const {content} = this.props;
        let workApproachBg = content.backgroundImage.sourceUrl;

        return (
            <Fragment>
                <section className="cr-work-approach pos-relative">
                    <div className="overlay"></div>

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                {content.singleApproach.length && content.singleApproach.map( ( item, index ) => {
                                    return (
                                        <div className="single-approach" key={index}>
                                            {item.approachImage &&
                                                <div className="approach-img">
                                                    <Image width='520' height='370' src={parse( item.approachImage.sourceUrl )} alt="approach-img" />
                                                </div>
                                            }

                                            <div className="approach-content">
                                                <h5 className="color-fff">{parse( item.sectionTitle )}</h5>
                                                <div className="description color-fff">{parse( item.sectionDescription )}</div>
                                            </div>
                                        </div>
                                    );
                                } )}

                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .cr-work-approach .overlay {
                        background-image: url('${workApproachBg}');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                `}</style>

            </Fragment>
        );
    }
}

export default WorkApproach;

