import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';
import Image from 'next/future/image';

class PortfolioHero extends Component {
  render() {
    const { content, socialLinks } = this.props;

    return (
      <Fragment>
        <section className="inner-page-banner portfolio-banner pos-relative">
          <SocialLink socialLinks={socialLinks} />

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="ipad-img">
                  {content.topImage && (
                    <Image
                      width="825"
                      height="484"
                      src={content.topImage.sourceUrl}
                      className="img2"
                      alt="img"
                    />
                  )}
                  {content.bottomImage && (
                    <Image
                      width="860"
                      height="450"
                      src={content.bottomImage.sourceUrl}
                      className="img1"
                      alt="img"
                    />
                  )}
                </div>

                <div className="banner-content align-center-center text-center">
                  <h1 className="circular-700 color-fff crx crx-animated">
                    {parse( content.heading )}
                  </h1>
                  <div className="crx description crx-animated">
                    {parse( content.description )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .portfolio-banner .banner-content .description p {
            font-size: 26px;
            line-height: 46px;
            color: #fff;
          }

          .portfolio-banner .ipad-img .img1 {
            z-index: 0;
          }
          .portfolio-banner .ipad-img .img2 {
            z-index: 1;
            bottom: 200px;
            position: absolute;
          }

          @media (max-width: 1300px) {
            .portfolio-banner .ipad-img .img2 {
              bottom: 120px;
            }
          }

          @media (max-width: 1199px) {
            .portfolio-banner .ipad-img .img2 {
              bottom: 90px;
            }
          }

          @media (max-width: 991px) {
            .portfolio-banner .cr-social-link {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .portfolio-banner .banner-content .description p {
              font-size: 20px;
              line-height: 34px;
            }
          }

          @media (max-width: 575px) {
            .portfolio-banner .ipad-img .img2 {
              bottom: 60px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default PortfolioHero;
