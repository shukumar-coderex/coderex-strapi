import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class PerksBenefits extends Component {


    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="cr-perks-benefits pos-relative">
                    <div className="overlay"></div>

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title">
                                    <h5>{parse( content.sectionTitle )}</h5>
                                    <div className="description">{parse( content.sectionDescription )}</div>
                                </div>

                                <div className="benefit-wrapper">
                                    {content.singleBenefit.length && content.singleBenefit.map( ( item, index ) => {
                                        return (
                                            <div className="single-benefit" key={index} style={{backgroundColor: item.backgroundColor}} >
                                                {item.icon &&
                                                    <span className="icon">
                                                        <Image width='37' height='31' src={parse( item.icon.sourceUrl )} alt="benefits icon" />
                                                    </span>
                                                }

                                                <h6 className="benefit-title">{parse( item.title )} </h6>
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
                    
                `}</style>

            </Fragment>
        );
    }
}

export default PerksBenefits;

