import react, { Component } from 'react';
import Link from '../ActiveLink';
import styles from './style';
import Config from '../../config';
import $ from 'jquery';
import axios from 'axios';
import ReactNotification, { store } from 'react-notifications-component';

const getSlug = ( url ) => {
  const parts = url.split( '/' );
  return 2 < parts.length ?
    4 == parts.length ?
      parts[parts.length - 1] :
      parts[parts.length - 2] :
    '';
};

export default class extends Component {
  state = {
    userEmail: '',
  };

  handleChange( event ) {
    this.setState( { userEmail: event.target.value } );
  }

  componentDidMount() {
    var newdate = new Date();
    var newYear = newdate.getFullYear();
    $( '.update-year' ).append( newYear );
  }

  handleLeadSubmit( event ) {
    event.preventDefault();
    if ( this.state.userEmail ) {
      let bodyFormData = new FormData();
      bodyFormData.set( 'subscriber-email', this.state.userEmail );

      axios
        .post(
          `${Config.apiUrl}contact-form-7/v1/contact-forms/4346/feedback`,
          bodyFormData,
          {
            headers: {
              Authorization: 'Bearer tokenKey',
            },
          }
        )
        .then( ( res ) => {
          this.setState( {
            userEmail: '',
          } );
          store.addNotification( {
            title: 'Thank you!',
            message: res.data.message,
            type: 'default',
            insert: 'top',
            container: 'top-center',
            animationIn: [ 'animated', 'fadeIn' ],
            animationOut: [ 'animated', 'fadeOut' ],
            dismiss: {
              duration: 3000,
              onScreen: true,
            },
          } );
        } )
        .catch( function ( error ) {
          console.log( error );
        } );
    }
  }

  render() {
    const { data, siteOptions, socialMenu, footerMenu } = this.props;
    const { footerOptions } = siteOptions;
    let menu = data.menuItems.nodes;
    let _socialMenu = socialMenu.menuItems.nodes;
    return (
      <div>
        <section className="cr-footer-widget">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="widget-wrapper">
                  <div className="widget address">
                    <Link as={'/'} href={'/'}>
                      <a>
                        <img src={footerOptions[0].logo} alt="footer logo" />
                      </a>
                    </Link>
                    <address>
                      <p>
                        <span>Address</span>
                        {footerOptions[0].address}
                      </p>
                      <p>
                        <span>Email</span>
                        <a href={`mailto:${footerOptions[0].email}`}>
                          {footerOptions[0].email}
                        </a>
                      </p>
                    </address>
                  </div>
                  <div className="widget widget_nav_menu">
                    <h6 className="widget-title">Explore</h6>
                    <ul className="menu">
                      {menu.map( ( item, index ) => {
                        const slug =
                          'Home' === item.title ? '' : `${getSlug( item.url )}`;
                        let href = slug ? `/${slug}` : '/';
                        return (
                          <li key={item.key}>
                            <Link
                              href={href}
                              activeClassName="active"
                            >
                              <a>{item.title}</a>
                            </Link>
                          </li>
                        );
                      } )}
                    </ul>
                  </div>
                  <div className="widget widget_nav_menu">
                        <h6 className="widget-title">Follow</h6>
                        <ul className="menu">
                            { _socialMenu.map( ( item, index ) => {
                                return <li key={item.id}><a href={item.url} target='_blank'>{item.title}</a></li>;
                            } )}

                        </ul>
                    </div>
                  <div className="widget newsletter">
                        <h6 className="widget-title">Newsletter</h6>
                        <p>Get our stuff in your mail.</p>
                        <div className="form-wrapper">
                            <form onSubmit={this.handleLeadSubmit.bind( this )}>
                                <input
                                    type="email"
                                    name="subscribe"
                                    placeholder="Enter your email"
                                    value={this.state.userEmail}
                                    onChange={this.handleChange.bind( this )}
                                    required
                                />
                                <button type="submit">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-footer-widget .widget img {
            margin-bottom: 50px;
          }
        `}</style>
      </div>
    );
  }
}
