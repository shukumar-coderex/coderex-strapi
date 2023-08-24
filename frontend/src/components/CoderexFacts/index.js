import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class CoderexFacts extends Component {

    render() {
        const {content} = this.props;
        let numbericAreaBg = content.backgroundImage.sourceUrl;

        return (
            <Fragment>

                <section className="career__numberic-area">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="career__numberic-factor">
                                    {content.singleFacts.length && content.singleFacts.map( ( item, index ) => {
                                        return (
                                            <div className="career__numberic-content"  key={index}>
                                                {item.icon &&
                                                    <div className="family-area-feature-img">
                                                        <Image style={{margin: "0 auto 10px"}} width='156' height='120' src={parse( item.icon.sourceUrl )} alt="coderex facts img" />
                                                    </div>
                                                }
                                                <h2><span>{parse( item.number )}</span>+</h2>
                                                <p className="circular-500">{parse( item.title )}</p>
                                            </div>
                                        );
                                    } )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .career__numberic-factor { 
                        background-image: url('${numbericAreaBg}');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                    }
                `}</style>

            </Fragment>
        );
    }
}

export default CoderexFacts;

