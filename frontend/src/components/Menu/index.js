import React, { Component } from 'react';
import Link from '../ActiveLink';
import SocialLink from '../SocialLink';
import styles from './style';
import $ from 'jquery';
import Router from 'next/router';

const getSlug = ( url ) => {
  const parts = url.split( '/' );
  return 2 < parts.length ?
    4 == parts.length ?
      parts[parts.length - 1] :
      parts[parts.length - 2] :
    '';
};

class Menu extends Component {
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
    const { data, siteOptions } = this.props;
    let menu = data.menuItems.nodes;
    return (
      <div>
        <header className="cr-header">
          <div className="container-fluid">
            <div className="cr-row">
              <div className="cr-col">
                <nav>
                  <div className="logo">
                    {/* <Link as={`/`} href={`/`}>
                      <a>
                        <img
                          src={siteOptions.logo}
                          className="custom-logo-link"
                          alt="logo"
                        />
                        <img
                          src={siteOptions.blog_logo}
                          className="blog-logo"
                          alt="logo"
                        />
                      </a>
                    </Link> */}
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
                    {menu.map( ( item, index ) => {
                      // let slug = item.title === ''Home'"/";

                      const slug =
                        'Home' === item.title ? '' : `${getSlug( item.url )}`;
                      let href = slug ? `/${slug}` : '/';

                      return (
                        <li key={item.key}>
                          <Link href={href} activeClassName="active">
                            <a>{item.title}</a>
                          </Link>
                        </li>
                      );
                    } )}
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
          
        `}</style>
      </div>
    );
  }
}

export default Menu;
