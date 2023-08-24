import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class ServiceType extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="major-service pos-relative">
          <div className="overlay"></div>

          <div className="service-illustration-wrapper">
            {content.topLeftImage && (
              <Image
                width="456"
                height="484"
                src={content.topLeftImage.sourceUrl}
                className="service-illustration1"
                alt="service-illustration"
              />
            )}
            {content.topRightImage && (
              <Image
                width="422"
                height="425"
                src={content.topRightImage.sourceUrl}
                className="service-illustration2"
                alt="service-illustration"
              />
            )}
          </div>

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="section-title">
                  <h2 className="circular-700 color-fff">
                    {parse( content.heading )}
                  </h2>
                  <p className="sub-title">{parse( content.subHeading )}</p>
                </div>

                {content.majorServices && (
                  <div className="major-service-wrapper">
                    {content.majorServices.map( ( item, index ) => {
                      let blue = item.buleBackgroundEnable ? 'blue-bg' : '';
                      return (
                        <div
                          className={`single-service service-${
                            index + 1
                          } ${blue}`}
                          key={index}
                        >
                          {item.serviceIcon && (
                            <span className="service-icon">
                              <Image
                                width="102"
                                height="102"
                                src={item.serviceIcon.sourceUrl}
                                alt="service"
                              />
                            </span>
                          )}
                          <h5 className="circular-700">
                            {parse( item.serviceTitle )}
                          </h5>
                          <p> {parse( item.serviceDescription )} </p>
                        </div>
                      );
                    } )}
                  </div>
                )}
                <div className="major-service-btn">
                  {content.buttonText && (
                    <Link
                      href={content.buttonLink ? content.buttonLink.url : '#'}
                    >
                      <a className="cr-btn-default lets-talk-btn svg-btn-effect crx">
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
                        <span>{content.buttonText}</span>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .major-service .service-illustration1 {
            position: absolute;
            top: -371px;
            left: 0;
          }
          .major-service .service-illustration2 {
            position: absolute;
            top: -275px;
            right: 0;
          }
          .major-service .single-service .service-icon img {
            display: block;
            margin: 0 auto;
          }

          @media (max-width: 1700px) {
            .major-service .service-illustration1 {
              top: -326px;
              max-width: 416px;
              width: 100%;
            }
            .major-service .service-illustration2 {
              max-width: 340px;
              width: 100%;
              top: -260px;
            }
          }
          @media (max-width: 1500px) {
            .major-service .service-illustration1 {
              top: -312px;
              max-width: 356px;
            }
            .major-service .service-illustration2 {
              max-width: 290px;
            }
          }
          @media (max-width: 1300px) {
            .major-service .service-illustration1 {
              top: -292px;
              max-width: 296px;
            }
            .major-service .service-illustration2 {
              max-width: 260px;
              top: -270px;
            }
          }
          @media (max-width: 1199px) {
            .major-service .service-illustration1 {
              top: -272px;
              max-width: 256px;
            }
            .major-service .service-illustration2 {
              top: -240px;
              max-width: 220px;
            }
          }
          @media (max-width: 767px) {
            .major-service .service-illustration1 {
              display: none;
            }
            .major-service .service-illustration2 {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default ServiceType;
