import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class Pricing extends Component {

    componentDidMount() {

        //------price-switcher------
        $( '#price-switcher' ).change( function() {
            if ( $( this ).is( ':checked' ) ) {
                $( '.senior-developer' ).css( 'display', 'none' );
                $( '.junior-developer' ).css( 'display', 'flex' );
                $( this ).siblings( 'span.senior' ).removeClass( 'active' );
                $( this ).siblings( 'span.junior' ).addClass( 'active' );
            } else {
                $( '.senior-developer' ).css( 'display', 'flex' );
                $( '.junior-developer' ).css( 'display', 'none' );
                $( this ).siblings( 'span.senior' ).addClass( 'active' );
                $( this ).siblings( 'span.junior' ).removeClass( 'active' );
            }
        } );

        //------table hover------
        $( '.single-price-plan' ).hover( function () {
            $( this ).addClass( 'active' );
            $( this ).siblings( '.popular' ).removeClass( 'active' );
        }, function () {
            $( this ).removeClass( 'active' );
            $( '.single-price-plan.popular' ).addClass( 'active' );
        } );
    }

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="cr-pricing">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2>{parse( content.heading )}</h2>
                                    <p>{content.description}</p>
                                </div>

                                {true == content.enablePriceSwitcher &&
                                    <div className="pricing-switcher">
                                        <span className="senior active">
                                            {content.pricePackage1Title &&
                                                parse( content.pricePackage1Title )
                                            }
                                        </span>
                                        <input className="switch-input" id="price-switcher" type="checkbox" />
                                        <label htmlFor="price-switcher"></label>
                                        <span className="junior">
                                            {content.pricePackage1Title &&
                                                parse( content.pricePackage2Title )
                                            }
                                        </span>
                                    </div>
                                }

                                <div className="pricing-wrapper senior-developer">
                                    {content.singlePricing.map( ( item, index ) => {
                                        let popularPlan = true == item.popularPlan ? 'popular active' : '';

                                        return (
                                            <div className={`single-price-plan text-center ${popularPlan}`} key={index}>
                                                <div className="price-header">
                                                    <h6>{parse( item.planTitle )}</h6>
                                                    {item.planImage &&
                                                        <div className="plan-img">
                                                            <Image layout='raw' width='257' height='200' src={item.planImage.sourceUrl} alt="pricing img"  />
                                                        </div>
                                                    }
                                                </div>

                                                <div className="price-body">
                                                    <h5>{parse( item.time )}</h5>
                                                    {item.features &&
                                                        <ul>
                                                            {item.features.map( ( feature, index ) => {
                                                                return (
                                                                    <li key={index}>{parse( feature.featureTitle )}</li>
                                                                );
                                                            } )}
                                                        </ul>
                                                    }
                                                </div>

                                                <div className="price-footer">
                                                    <h3>${item.price} <span>/ {parse( item.duration )}</span></h3>
                                                    {item.buttonText &&
                                                        <Link href={item.buttonLink ? item.buttonLink.url : '#'} >
                                                            <a target={item.buttonLink ? item.buttonLink.target : '_self'} className="price-btn cr-btn-default contact-btn svg-btn-effect">
                                                                <svg>
                                                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                                </svg>
                                                                <span>{parse( item.buttonText )}</span>
                                                            </a>
                                                        </Link>
                                                    }
                                                </div>
                                            </div>
                                        );
                                    } )}

                                </div>

                                {content.juniorDeveloper &&
                                    <div className="pricing-wrapper junior-developer">
                                            {content.juniorDeveloper.map( ( item, index ) => {
                                                let popularPlan = true == item.popularPlan ? 'popular active' : '';

                                                return (
                                                    <div className={`single-price-plan text-center ${popularPlan}`} key={index}>
                                                        <div className="price-header">
                                                            <h6>{parse( item.planTitle )}</h6>
                                                            {item.planImage &&
                                                                <div className="plan-img">
                                                                    <Image layout='raw' width='257' height='200' src={item.planImage.sourceUrl} alt="pricing img"  />
                                                                </div>
                                                            }
                                                        </div>

                                                        <div className="price-body">
                                                            <h5>{parse( item.time )}</h5>
                                                            {item.features &&
                                                                <ul>
                                                                    {item.features.map( ( feature, index ) => {
                                                                        return (
                                                                            <li key={index}>{parse( feature.featureTitle )}</li>
                                                                        );
                                                                    } )}
                                                                </ul>
                                                            }
                                                        </div>

                                                        <div className="price-footer">
                                                            <h3>${item.price} <span>/ {parse( item.duration )}</span></h3>
                                                            {item.buttonText &&
                                                                <Link href={item.buttonLink ? item.buttonLink.url : '#'} >
                                                                    <a target={item.buttonLink ? item.buttonLink.target : '_self'} className="price-btn cr-btn-default contact-btn svg-btn-effect">
                                                                        <svg>
                                                                            <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                                        </svg>
                                                                        <span>{parse( item.buttonText )}</span>
                                                                    </a>
                                                                </Link>
                                                            }
                                                        </div>
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
                    .cr-pricing .single-price-plan .price-header img {
                        display: block;
                        margin: 0 auto;
                        max-height: 100%;
                    }
                `}</style>
            </Fragment>
        );
    }
}

export default Pricing;

