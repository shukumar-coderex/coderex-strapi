import Header from './header';
import Script from 'next/script';
import Footer from './footer';
import Head from 'next/head';
import Seo from '../seo';
import {isEmpty} from 'lodash';
import {sanitize} from '../../utils/miscellaneous';
import PropTypes from 'prop-types';
import globalStyles from './styles';
import ScrollToTop from '../ScrollToTop';
import { NotificationContainer } from 'react-notifications';
import CookieConsent from 'react-cookie-consent';


const Layout = ( {data, isCategory, containerClassNames, isPost, children} ) => {
	const { page, category, post, posts, header, footer, headerMenus, footerMenus, socialMenus, analytics, socialLinks, globalData } = data || {};

	// If it does not have either post or page.
	if ( isEmpty( page ) && isEmpty( post ) && isEmpty( posts ) && isEmpty( category ) ) {
		return null;
	}

	let seo = {},
		uri = {};
	if ( isPost ) {
		seo =  post?.seo ?? {} ;
		uri = post?.uri ?? {};
	} else if ( isCategory ) {
		seo =  category?.seo ?? {} ;
		uri = category?.uri ?? {};
	} else {
		seo =  page?.seo ?? {} ;
		uri = page?.uri ?? {};
	}

	return (
		<div className={containerClassNames}>
			<Seo seo={seo} uri={uri} isPost={isPost}/>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<link rel="shortcut icon" href={header?.favicon}/>
				{seo?.schemaDetails ? (
					<script defer
						type='application/ld+json'
						className='yoast-schema-graph test'
						key='yoastSchema'
						dangerouslySetInnerHTML={{__html: sanitize( seo.schemaDetails )}}
					/>
				) : null
				}
				<script defer async src={`https://www.googletagmanager.com/gtag/js?id=${analytics.goggleAnalytics}`}/>
				<script
				    defer
					async
					type="text/javascript"
					dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${analytics.goggleAnalytics}');`}}/>


				<script async defer dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window, document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '${analytics.facebookPixel}');
					fbq('track', 'PageView');` }}
				/>
				<noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
					src="https://www.facebook.com/tr?id=${analytics.facebookPixel}&ev=PageView&noscript=1" />` }}
				/>
				<link href="https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap" rel="stylesheet" />

			</Head>
			<div className={'content-wrapper'}>
				<Header header={header} headerMenus={headerMenus?.edges} socialLinks={socialLinks}/>
				{children}
				<ScrollToTop/>
				<Footer globalData={globalData} footerLogo={header.siteLogoUrl} footer= {footer} footerMenus= {headerMenus?.edges} socialMenus={socialMenus?.edges} bottomFooterMenus={footerMenus?.edges}/>
				<NotificationContainer/>
				<CookieConsent
					location="bottom"
					buttonText="Accept"
					cookieName="coderexcookie"
					style={{
						background: '#fff',
						color: '#202020',
						borderTop: '1px solid #202020',
						fontSize: '18px',
						lineHeight: '18px',
						fontWeight: '700',
						paddingBottom: '0',
						textAlign: 'center'
					}}
					buttonStyle={{
						backgroundColor: '#00b4ff',
						fontWeight: '400',
						fontSize: '14px',
						lineHeight: '20px',
						borderRadius: '5px',
						color: '#fff',
						fontWeight: '800',
						textDecoration: 'none',
						borderRadius: '150px',
						padding: '8px 30px',
						transition: 'all .3s ease',
						border: 'none',
						display: 'inline-block',
						margin: '3px 4px',
						whiteSpace: 'nowrap',
						textTransform: 'none',
						letterSpacing: '0',
						cursor: 'pointer',
					}}
					expires={150}
				>
					This website uses cookies to enhance the user experience.{' '}
				</CookieConsent>
				<style jsx global>
					{globalStyles}
				</style>
				<style jsx global>{`
					@font-face {
						font-family: 'Circular Std Bold';
						src: url('/fonts/circularstd-bold.eot');
						src: url('/fonts/circularstd-bold.woff2') format('woff2'),
							url('/fonts/circularstd-bold.woff') format('woff'), 
							url('/fonts/circularstd-bold.ttf') format('truetype'),
							url('/fonts/circularstd-bold.svg') format('svg'),
							url('/fonts/circularstd-bold.eot?#iefix') format('embedded-opentype');
						font-weight: 700;
						font-style: normal;
						font-display: swap;
					}
					.CookieConsent{
						display: block !important;
						padding-top: 10px !important;
       					padding-bottom: 10px !important;
					}
					@font-face {
						font-family: 'CircularStd-Medium';
						src: url('/fonts/CircularStd-Medium.eot');
						src: url('/fonts/CircularStd-Medium.otf') format('opentype'),
							url('/fonts/CircularStd-Medium.woff') format('woff'), 
							url('/fonts/CircularStd-Medium.ttf') format('truetype'),
							url('/fonts/CircularStd-Medium.svg') format('svg'),
							url('/fonts/CircularStd-Medium.eot?#iefix') format('embedded-opentype');
						font-weight: 500;
						font-style: normal;
						font-display: swap;
					}
					
					`}
				</style>
			</div>
		</div>
	);
};

Layout.propTypes = {
	// data: PropTypes.array,
	isPost: PropTypes.bool,
	children: PropTypes.object
};

Layout.defaultProps = {
	data: {},
	isPost: false,
	children: {}
};

export default Layout;

