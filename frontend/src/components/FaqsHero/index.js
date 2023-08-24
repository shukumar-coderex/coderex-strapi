import React, { Component, Fragment } from 'react';

import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';

class FaqsHero extends Component {
  render() {
    const { content } = this.props;
    let bannerBg = content.backgroundImage.sourceUrl;

    return (
      <Fragment>
        <section className="inner-page-banner faqs-banner pos-relative">
          <div className="overlay"></div>
          <SocialLink />

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="banner-content align-center-center text-center">
                  <h1 className="circular-700 color-fff crx crx-animated">
                    {parse( content.title )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .inner-page-banner.faqs-banner {
            background-color: transparent;
            background-image: url("${bannerBg}");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default FaqsHero;
