import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';

function isURL( str ) {
    var pattern = new RegExp( '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i' ); // fragment locator
    return pattern.test( str );
}

const isExternal = url => {
    if ( isURL( url ) ) {
       return true;
    }
    return false;
    // return url.hostname ? true : false;
};

class RelatedProject extends Component {

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="portfolio-section related-portfolio">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2 className="circular-700">{parse( content.heading )}</h2>
                                </div>

                                <div className="portfolio-wrapper">
                                    {content.project.map( ( item, index ) => {
                                        let as = item.projectLink ? item.projectLink.url : '#';
                                        let href = item.projectLink ? ( isExternal( item.projectLink.url ) ? item.projectLink.url : '/portfolio/[portfolioSlug]' ) : '';
                                        return (
                                            <div className="single-portfolio" key={index}>
                                                <figure className="crx crx-animated">
                                                    {item.image &&
                                                    (
                                                        ! isExternal( item.projectLink.url ) ?
                                                            <Link
                                                                as={as}
                                                                href={href}
                                                            >
                                                                <a href={item.projectLink ? item.projectLink.url : '#'} target={item.projectLink ? item.projectLink.target : '_self'}>
                                                                    <img src={item.image.sourceUrl} className="img-fluid" alt="portfolio img" />
                                                                </a>
                                                            </Link>                                                            :
                                                            <a href={item.projectLink ? item.projectLink.url : '#'} target={item.projectLink ? item.projectLink.target : '_self'}>
                                                                <img src={item.image.sourceUrl} className="img-fluid" alt="portfolio img"  />
                                                            </a>
                                                    )

                                                    }
                                                </figure>
                                                <div className="portfolio-title">
                                                    {item.projectLink.url &&
                                                        ! isExternal( item.projectLink.url ) ?
                                                        <Link
                                                            as={as}
                                                            href={href}
                                                        >
                                                            <a
                                                                href={item.projectLink ? item.projectLink.url : '#'} target={item.projectLink ? item.projectLink.target : '_self'}
                                                                className="title circular-700"
                                                            >{parse( item.title )}<img src="/images/arrow-right-black.png" alt="arrow" /></a>
                                                        </Link>                                                        :
                                                        <a
                                                            href={item.projectLink ? item.projectLink.url : '#'} target={item.projectLink ? item.projectLink.target : '_self'}
                                                            className="title circular-700"
                                                        >{parse( item.title )}<img src="/images/arrow-right-black.png" alt="arrow" /></a>
                                                    }


                                                    <p className="category">
                                                        <span>{parse( item.tags )}</span>
                                                    </p>
                                                </div>
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

export default RelatedProject;


