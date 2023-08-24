import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';

class ServiceHero extends Component {
  render() {
    const { content, socialLinks } = this.props;

    return (
      <Fragment>
        <section className="inner-page-banner service-banner pos-relative">
          <div className="service-banner-img-wrapper">
            {content.welcomeImage && (
              <Image
                width="411"
                height="483"
                src={content.welcomeImage.sourceUrl}
                className="service-banner-img"
                alt="banner img"
              />
            )}
          </div>

          <SocialLink socialLinks={socialLinks} />

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="banner-content align-center-center text-center">
                  <h1 className="circular-700 color-fff crx crx-animated">
                    {parse( content.heading )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .service-banner .service-banner-img {
            position: absolute;
            right: 130px;
            bottom: -66px;
          }

          @media (max-width: 1700px) {
            .service-banner .service-banner-img {
              right: 30px;
            }
          }
          @media (max-width: 1500px) {
            .service-banner .service-banner-img {
              right: 30px;
              max-width: 370px;
              width: 100%;
              bottom: -58px;
            }
          }
          @media (max-width: 1199px) {
            .service-banner .service-banner-img {
              right: 30px;
              max-width: 310px;
              width: 100%;
              bottom: -48px;
            }
          }
          @media (max-width: 991px) {
            .service-banner .service-banner-img {
              max-width: 250px;
              bottom: -40px;
              right: 10px;
            }
          }
          @media (max-width: 767px) {
            .service-banner .service-banner-img {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default ServiceHero;
