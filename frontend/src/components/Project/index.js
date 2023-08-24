import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

function isURL( str ) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return pattern.test( str );
}

const isExternal = ( url ) => {
  if ( isURL( url ) ) {
    return true;
  }
  return false;
  // return url.hostname ? true : false;
};

class Project extends Component {
  componentDidMount() {
    $( document ).ready( function ( $ ) {
      $( '.portfolio-wrapper > .single-portfolio' ).hide();
      $( '.portfolio-wrapper > .single-portfolio' ).slice( 0, 4 ).show();

      $( '#load-more-portfolio' ).on( 'click', function ( e ) {
        e.preventDefault();
        $( '.portfolio-wrapper > .single-portfolio:hidden' )
          .slice( 0, 2 )
          .slideDown();
        if ( 0 == $( '.portfolio-wrapper > .single-portfolio:hidden' ).length ) {
          $( '#load-more-portfolio span' ).text( 'no more item' );
        }
      } );
    } );
  }

  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="portfolio-section section-padding">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="portfolio-wrapper">
                  {content.map( ( item, index ) => {
                    let as = item.projectLink ? item.projectLink.url : '#';
                    let href = item.projectLink ?
                      isExternal( item.projectLink.url ) ?
                        item.projectLink.url :
                        '/portfolio/[portfolioSlug]' :
                      '';
                    return (
                      <div className="single-portfolio" key={index}>
                        <figure className="crx crx-animated">
                          {item.image &&
                            ( ! isExternal( item.projectLink.url ) ? (
                              <Link as={as} href={href}>
                                <a
                                  className="ssuio"
                                  href={
                                    item.projectLink ?
                                      item.projectLink.url :
                                      '#'
                                  }
                                  target={
                                    item.projectLink ?
                                      item.projectLink.target :
                                      '_self'
                                  }
                                >
                                  <Image
                                    width="670"
                                    height="450"
                                    src={item.image.sourceUrl}
                                    className="img-fluid"
                                    alt="portfolio img"
                                  />
                                </a>
                              </Link>
                            ) : (
                              <a
                                className="ssss"
                                href={
                                  item.projectLink ? item.projectLink.url : '#'
                                }
                                target={
                                  item.projectLink ?
                                    item.projectLink.target :
                                    '_self'
                                }
                              >
                                <Image
                                  width="670"
                                  height="450"
                                  src={item.image.sourceUrl}
                                  className="img-fluid"
                                  alt="portfolio img"
                                />
                              </a>
                            ) )}
                        </figure>
                        <div className="portfolio-title">
                          {! isExternal( item.projectLink.url ) ? (
                            <Link as={as} href={href}>
                              <a className="title circular-700 ss">
                                {parse( item.title )}
                                <Image
                                  width="23"
                                  height="15"
                                  src="/images/arrow-right-black.png"
                                  alt="arrow"
                                />
                              </a>
                            </Link>
                          ) : (
                            <a
                              href={
                                item.projectLink ? item.projectLink.url : '#'
                              }
                              target={
                                item.projectLink ?
                                  item.projectLink.target :
                                  '_self'
                              }
                              className="title circular-700"
                            >
                              {parse( item.title )}
                              <Image
                                  width="23"
                                  height="15"
                                src="/images/arrow-right-black.png"
                                alt="arrow"
                              />
                            </a>
                          )}

                          <p className="category">
                            <span>{parse( item.tags )}</span>
                          </p>
                        </div>
                      </div>
                    );
                  } )}
                </div>

                <a
                  href="#"
                  className="cr-btn-default contact-btn svg-btn-effect"
                  id="load-more-portfolio"
                >
                  <svg>
                    <rect
                      x="2"
                      y="2"
                      rx="30"
                      fill="none"
                      width="98%"
                      height="56"
                    ></rect>
                  </svg>
                  <span>load more</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{''}</style>
      </Fragment>
    );
  }
}

export default Project;
