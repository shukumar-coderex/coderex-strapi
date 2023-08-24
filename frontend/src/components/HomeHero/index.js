import React, { Component, Fragment } from 'react';
import styles from './style';
import SocialLink from '../SocialLink';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class HomeHero extends Component {
  render() {
    const { content, socialLinks } = this.props;
    let buttonLink = content.buttonUrl ? content.buttonUrl.url : '#';
    let bannerBg = content.backgroundImage.sourceUrl;
    return (
      <Fragment>
        <section className="cr-hero pos-relative">
          <div className="overlay"></div>
          <div className="coderex-shape-wrapper">
            <div className="coderex-shape">
              <Image
                width="840"
                height="763"
                src="/images/coderex-shape.png"
                alt="shape"
                priority
              />

              <div className="circle-wrapper">
                {content.images.image3.sourceUrl && (
                  <span className="sml-circle sml1">
                    <span>
                      <Image
                        width="59"
                        height="60"
                        src={parse( content.images.image3.sourceUrl )}
                        alt="wordpress icon"
                        priority
                      />
                    </span>
                  </span>
                )}

                {content.images.image1.sourceUrl && (
                  <span className="sml-circle sml2">
                    <span>
                      <Image
                        width="59"
                        height="60"
                        src={parse( content.images.image1.sourceUrl )}
                        alt="wordpress icon"
                        priority
                      />
                    </span>
                  </span>
                )}

                {content.images.image2.sourceUrl && (
                  <span className="sml-circle sml3">
                    <span>
                      <Image
                        width="59"
                        height="60"
                        src={parse( content.images.image2.sourceUrl )}
                        alt="woocommerce icon"
                        priority
                      />
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <SocialLink socialLinks={socialLinks} />

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="hero-content">
                  <h1 className="circular-700 color-fff crx">
                    {parse( content.heading )}
                  </h1>
                  <div className="description crx">
                    {parse( content.description )}
                  </div>

                  {content.buttonText && (
                    <Link href={buttonLink}>
                      <a className="cr-btn-default let-us-talk-btn svg-btn-effect crx">
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
                        <span>{parse( content.buttonText )}</span>
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
          .leading-tight {
            display: none;
          }
          .cr-hero {
            background: url("${bannerBg}");
          }
          .cr-hero .hero-content .description p {
            color: #fff;
            font-size: 26px;
            line-height: 46px;
          }

          @media (max-width: 991px) {
            .cr-hero .cr-social-link {
              text-align: center;
            }
          }

          @media (max-width: 575px) {
            .cr-hero .coderex-shape {
              max-width: 320px;
            }
            .cr-hero .coderex-shape .circle-wrapper {
              width: 100px;
              height: 100px;
              left: 94px;
              margin-top: -40px;
            }
            .cr-hero .coderex-shape .circle-wrapper .sml-circle img {
              width: 40px;
            }
            .cr-hero .hero-content p {
              font-size: 20px;
              line-height: 34px;
            }
            .cr-hero .hero-content .description p {
              color: #fff;
              font-size: 22px;
              line-height: 46px;
            }
          }

        `}</style>
      </Fragment>
    );
  }
}

export default HomeHero;
