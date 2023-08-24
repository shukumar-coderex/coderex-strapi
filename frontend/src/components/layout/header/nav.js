import { isEmpty } from 'lodash';
import Link from 'next/link';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import $ from 'jquery';
import SocialLink from '../../SocialLink';
import Image from 'next/future/image';

class Menu extends React.Component {
  componentDidMount() {
    //------navbar toggle------
    $( '.toggle-bar' ).on( 'click', function () {
      $( '.navigation-overlay' ).addClass( 'open-overlay' );
      $( '.navigation-wrapper' ).addClass( 'visible' );
    } );

    $( '.cross-bar' ).on( 'click', function () {
      $( '.navigation-overlay' ).removeClass( 'open-overlay' );
      $( '.navigation-wrapper' ).removeClass( 'visible' );
    } );

    $( '.cr-navigation ul.dropdown' ).parent( 'li' ).addClass( 'has-children' );

    $( '.cr-navigation li svg' ).on( 'click', function () {
      $( this ).parent( 'li' ).toggleClass( 'show' );
      $( this ).parent( 'li' ).children( '.dropdown' ).slideToggle();
      $( this ).parent( 'li' ).siblings().children( '.dropdown' ).slideUp();
    } );
    $( '.cr-navigation ul.dropdown li ' ).on( 'click', function ( e ) {
      e.stopPropagation();
    } );
  }
  render() {
    let { headerMenus, socialLinks, header } = this.props;
    return (
      <div>
        <header className="cr-header">
          <div className="container-fluid">
            <div className="cr-row">
              <div className="cr-col">
                <nav>
                  <div className="logo">
                    <Link as={'/'} href={'/'}>
                      <a>
                          <Image
                            width="190"
                            height="36"
                            src={header.siteLogoUrl ? header.siteLogoUrl : ''}
                            className="custom-logo-link"
                            alt="logo"
                          />

                          <Image
                            width="190"
                            height="36"
                            src={header.blogLogoUrl ? header.blogLogoUrl : ''}
                            className="blog-logo"
                            alt="logo"
                          />
                      </a>
                    </Link>
                  </div>
                  <div className="toggle-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="cr-navigation right-canvas">
          <div className="navigation-overlay"></div>
          <div className="navigation-wrapper">
            <div className="navigation-header">
              <div className="navigation-header-logo">
                {/* <img
						src={siteOptions.logo}
						className="custom-logo-link"
						alt="logo"
						/> */}
              </div>
              <div className="cross-bar">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navigation-item">
              <div className="navigation-item-wrapper">
                {
                  <ul className="main-nav">
                    {headerMenus?.length ? (
                      <ul className="main-nav">
                        {headerMenus?.map( ( menu ) => {
                          return (
                            <li key={menu?.node?.id}>
                              <Link
                                href={menu?.node?.path}
                                activeClassName="active"
                              >
                                <a>{menu?.node?.label}</a>
                              </Link>
                            </li>
                          );
                        } )}
                      </ul>
                    ) : null}
                  </ul>
                }

                <address className="address">
                  <span>Address</span>
                  <p>
                    Chandrashila Suvastu Tower, Level 12B, 69/1 Panthapath,
                    Dhaka 1205
                  </p>
                  <SocialLink socialLinks={socialLinks} />
                </address>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-navigation .navigation-wrapper .address .cr-social-link {
            position: initial;
            left: inherit;
            bottom: inherit;
            padding: 0;
            width: auto;
            display: flex;
            flex-flow: row;
            margin: 37px 0 0;
            justify-content: center;
          }
          .cr-navigation .navigation-wrapper .address .cr-social-link li {
            margin: 0 8px;
          }

          @media (max-width: 1500px) {
            .cr-navigation .navigation-wrapper .address .cr-social-link {
              transform: translateX(0) !important;
              right: inherit;
            }
          }
          @media (max-width: 575px) {
            .cr-navigation .navigation-wrapper.visible .address{
                opacity: 1;
                visibility: visible;
                transition: all 0.8s ease 1.2s;
                bottom: 60px !important;
            }
          }
        `}</style>
      </div>
    );
  }
}

Menu.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string,
};

Menu.defaultProps = {
  header: {},
  headerMenus: [],
  slug: '',
};

export default Menu;
