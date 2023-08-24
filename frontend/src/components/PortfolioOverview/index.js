import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/future/image';

class PortfolioOverview extends Component {
  render() {
    const { content } = this.props;
    let buttonLink = content.buttonLink ? content.buttonLink.url : '#';
    let buttonTarget = content.buttonLink ? content.buttonLink.target : '_self';
    let siteDemoImage = content.siteDemoImage ?
      content.siteDemoImage.sourceUrl :
      '';

    return (
      <Fragment>
        <section className="featured-portfolio">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="content-wrapper">
                  <div className="img-area pos-relative">
                    <div className="monitor-area pos-relative">
                      <Image
                        width="588"
                        height="492"
                        src="/images/featured-portfolio-monitor.png"
                        className="monitor img-fluid"
                        alt="monitor"
                      />
                      <div className="scrolling-img-frame"> </div>
                    </div>
                    <Image
                      width="940"
                      height="275"
                      src="/images/featured-portfolio-keyboard.png"
                      className="keyboard img-fluid"
                      alt="keyboard"
                    />
                  </div>

                  <div className="content-area">
                    <h5 className="circular-700 crx crx-animated">
                      {parse( content.title )}
                    </h5>
                    <div className="crx crx-animated description">
                      {parse( content.description )}
                    </div>
                    {content.buttonText && (
                      <Link href={buttonLink}>
                        <a className="cr-btn-default contact-btn svg-btn-effect crx crx-animated">
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
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
            background: #e8e8e8 url(${siteDemoImage});
          }
          .featured-portfolio .content-wrapper .img-area .keyboard {
            position: absolute;
            bottom: -110px;
            max-width: none;
            left: -260px;
          }

          .featured-portfolio .content-wrapper .content-area .description p {
            font-size: 30px;
            line-height: 52px;
            text-align: justify;
          }

          @media (max-width: 1700px) {
            .featured-portfolio .content-wrapper .img-area .keyboard {
              max-width: 890px;
              left: -230px;
            }
          }
          @media (max-width: 1500px) {
            .featured-portfolio .content-wrapper .img-area .keyboard {
              max-width: 716px;
              left: -140px;
            }
          }
          @media (max-width: 1300px) {
            .featured-portfolio .content-wrapper .content-area .description p {
              text-align: center;
            }
            .featured-portfolio .content-wrapper .img-area .keyboard {
              max-width: none;
              left: -247px;
            }
          }
          @media (max-width: 1199px) {
            .featured-portfolio .content-wrapper .img-area .keyboard {
              max-width: 890px;
              left: -207px;
            }
          }
          @media (max-width: 991px) {
            .featured-portfolio .content-wrapper .content-area .description p {
              font-size: 25px;
              line-height: 40px;
            }
          }

          @media (max-width: 767px) {
            .featured-portfolio .content-wrapper .content-area .description p {
              font-size: 22px;
              line-height: 34px;
            }
            .featured-portfolio .content-wrapper .img-area .keyboard {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default PortfolioOverview;
