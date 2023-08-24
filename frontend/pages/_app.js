import '../src/styles/index.scss';
import 'react-notifications/lib/notifications.css';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

function MyApp( { Component, pageProps } ) {
	return (
		<ApolloProvider client={client}>
			<ReactNotifications />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
