import react, {Component} from 'react';
import Link from 'next/link';
import styles from './style';
import $ from 'jquery';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import Image from 'next/future/image';


class Footer extends Component {


	state = {
        userEmail: '',
		errorMessage: null
    }

	handleChange( event ) {
        this.setState( {userEmail: event.target.value} );
    }


	createNotification( type, message ) {
		switch ( type ) {
		  case 'info':
			NotificationManager.info( message, 3000 );
			break;
		  case 'success':
			NotificationManager.success( message, 'Thank you.', 3000 );
			break;
		  case 'warning':
			NotificationManager.warning( message, 'Warning', 3000 );
			break;
		  case 'error':
			NotificationManager.error( message, 'Error', 5000, () => {
		  } );
		  break;
		}
	  };


	emailValidation() {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ( ! this.state.userEmail || false === regex.test( this.state.userEmail ) ) {
            this.setState( {
                errorMessage: 'Email is not valid'
            } );
            return false;
        }
        return true;
    }


	handleLeadSubmit( event ) {
        event.preventDefault();
		if ( this.emailValidation() ) {
			return axios( {
				data: {
					formId: 3,
					contactData: [
					{id: 11, value: this.state.userEmail}
					]
				},
				method: 'post',
				url: '/api/contact'
				} )
				.then( ( data ) => {
					const {success} = data?.data ?? {};
					if ( success ) {
						this.setState( {
							userEmail: ''
						} );
						this.createNotification( 'success', 'Thank you for signing up!' );
					}
				} )
				.catch( () => {
					this.createNotification( 'error', 'Something is wrong. Please try again later.' );
				} );
		} else {
			this.createNotification( 'error', 'Please put a valid email' );
		}

    }

	componentDidMount() {
        var newDate = new Date();
        var newYear = newDate.getFullYear();
        $( '.update-year' ).append( newYear );
    }

	render() {
		let { footerMenus, socialMenus, bottomFooterMenus, footer, footerLogo, globalData } = this.props;

		return (
			<div>
				<section className="cr-footer-widget">
					<div className="cr-container">
						<div className="cr-row">
							<div className="cr-col">
								<div className="widget-wrapper">
									<div className="widget address">
										<Link
											as={'/'}
											href={'/'}
										>
											<a>
												<Image width='190' height='36' src={footerLogo ? footerLogo : ''}  alt="footer logo"  />
											</a>
										</Link>
										<address>
											<p>
												<span>Address</span>
												{globalData.address}
											</p>
											<p>
												<span>Email</span>
												<a href={`mailto:${globalData.email}`}>{globalData.email}</a>
											</p>
										</address>
									</div>
									<div className="widget widget_nav_menu">
										<h6 className="widget-title">Explore</h6>
										<ul className="menu">
											{ footerMenus?.length ? (
												<ul className="main-nav">
													{ footerMenus?.map( menu => {
														return (
															<li key={menu?.node?.id}>
																<Link href={menu?.node?.path} activeClassName="active">
																	<a>{menu?.node?.label}</a>
																</Link>
															</li>
														);
													} ) }
												</ul>
											) : null }
										</ul>
									</div>
									<div className="widget widget_nav_menu">
										<h6 className="widget-title">Follow</h6>
										<ul className="menu">
											{ socialMenus?.length ? (
												<ul className="main-nav">
													{ socialMenus?.map( menu => {
														return <li key={menu?.node?.id}><a href={menu?.node?.path} target='_blank'>{menu?.node?.label}</a></li>;
													} ) }
												</ul>
											) : null }
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

						<div className="cr-row">
							<div className="cr-col">
								<footer>
									<p className="copyright-txt">&copy; <span className="update-year" style={{paddingRight: '5px'}}> </span>
											{footer.copyrightText}
									</p>
									<ul className="menu">
										{ bottomFooterMenus?.length ? (
												<ul className="main-nav">
													{ bottomFooterMenus?.map( menu => {
														return (
															<li key={menu?.node?.id}>
																<Link href={menu?.node?.path} activeClassName="active">
																	<a>{menu?.node?.label}</a>
																</Link>
															</li>
														);
													} ) }
												</ul>
											) : null }
									</ul>
								</footer>
							</div>
						</div>
					</div>
				</section>

				<style jsx>
					{styles}
				</style>

				<style jsx global>{`
					.cr-footer-widget .widget img {
						margin-bottom: 50px;
					}
				`}</style>
			</div>
		);
	}
}

export default Footer;
