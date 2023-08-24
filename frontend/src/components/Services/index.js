import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

const isExternal = ( url ) => {
  var match = url.match( /:\/\/(www[0-9]?\.)?(.[^/:]+)/i );
  if (
    null != match &&
    2 < match.length &&
    'string' === typeof match[2] &&
    0 < match[2].length
  ) {
    return true;
  } else {
    return false;
  }
};

const generatedHref = ( url ) => {
  let hasSecondLevelPortfolio = url.split( '/' );
  if (
    'portfolio' == hasSecondLevelPortfolio[1] &&
    2 < hasSecondLevelPortfolio.length
  ) {
    return '/portfolio/[portfolioSlug]';
  } else {
    return url;
  }
};

class Services extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-service pos-relative">
          <div className="shape"></div>
          <div className="cr-service-wrapper">
            {content.map( ( serviceItem, index ) => {
              let serviceCount = '';
              if ( 10 > index + 1 ) {
                serviceCount = '0' + ( index + 1 );
              } else {
                serviceCount = index + 1;
              }

              let as = serviceItem.detailsButtonLink ?
                serviceItem.detailsButtonLink.url :
                '#';
              let href = serviceItem.detailsButtonLink ?
                isExternal( serviceItem.detailsButtonLink.url ) ?
                  serviceItem.detailsButtonLink.url :
                  generatedHref( serviceItem.detailsButtonLink.url ) :
                '';

              return (
                <div
                  className={`single-service service-${index + 1} `}
                  key={index + 1}
                >
                  <div className="overlay crx crx-animated"></div>
                  <div className="cr-container">
                    <div className="cr-row">
                      <div className="cr-col">
                        <div className="content-wrapper">
                          <div className="content-image">
                            <div className="icon-wrapper">
                              {serviceItem.image && (
                                <Image
                                  width="515"
                                  height="296"
                                  src={serviceItem.image.sourceUrl}
                                  alt="icon"
                                />
                              )}
                            </div>
                          </div>
                          <div className="content">
                            <span className="circular-700 count">
                              {serviceCount}
                            </span>
                            <h3 className="circular-700 ">
                              {parse( serviceItem.heading )}
                            </h3>
                            <div className="description ">
                              {parse( serviceItem.description )}
                            </div>

                            <div className="cr-srvice-btn">
                              {serviceItem.detailsButtonText ? (
                                serviceItem.detailsButtonLink ? (
                                  ! isExternal(
                                    serviceItem.detailsButtonLink.url
                                  ) ? (
                                    <Link href={href} as={as}>
                                      <a className="cr-btn-default view-example-btn svg-btn-effect crx">
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
                                        <span>
                                          {serviceItem.detailsButtonText}
                                        </span>
                                      </a>
                                    </Link>
                                  ) : (
                                    <a
                                      className="cr-btn-default view-example-btn svg-btn-effect crx"
                                      href={serviceItem.detailsButtonLink.url}
                                      target={
                                        serviceItem.detailsButtonLink.target
                                      }
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
                                      <span>
                                        {serviceItem.detailsButtonText}
                                      </span>
                                    </a>
                                  )
                                ) : null
                              ) : null}

                              {serviceItem.contactLinkText && (
                                <Link
                                  href={
                                    serviceItem.contactLink ?
                                      serviceItem.contactLink.url :
                                      '#'
                                  }
                                >
                                  <a className="lets-talk-btn">
                                    {serviceItem.contactLinkText}{' '}
                                    <Image
                                      width="18"
                                      height="12"
                                      src="/images/arrow-right-black.png"
                                      alt="arrow"
                                    />
                                  </a>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } )}
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
        .cr-service .content-wrapper .content .lets-talk-btn {
            color: #23252d;
            font-size: 20px;
            font-family: Circular Std Bold;
            text-transform: capitalize;
            display: inline-block;
            margin-left: 20px;
        }
        .cr-service .content-wrapper .content .lets-talk-btn img {
            display: inline-block;
            width: 18px;
            margin-left: 2px;
            position: relative;
            top: -1px;
            transition: all 0.3s ease;
        }
        .cr-service .content-wrapper .content .lets-talk-btn:hover img {
            margin-left: 7px;
        }
        `}</style>
      </Fragment>
    );
  }
}

export default Services;
