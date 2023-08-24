import { Component } from 'react';
import { GET_PORTFOLIO_PAGE } from '../../src/queries/pages/get-page';
import {handleRedirectsAndReturnData} from '../../src/utils/slug';
import ScrollToTop from '../../src/components/ScrollToTop';
import client from '../../src/apollo/client';
import Layout from '../../src/components/layout';
import PortfolioHero from '../../src/components/PortfolioHero';
import PortfolioOverview from '../../src/components/PortfolioOverview';
import Project from '../../src/components/Project';
import CallToAction from '../../src/components/CallToAction';

export default class Portfolio extends Component {
    render() {
        const {data} = this.props;
		const {siteCta, socialLinks} = data;
        const {heroSection, overview, project} = data.page.portfolio;
        return (
            <Layout data={data}>
                <PortfolioHero content={heroSection} socialLinks= {socialLinks}/>
                <PortfolioOverview content={overview}/>
                <Project content={project}/>
				<CallToAction cta={siteCta} />
            </Layout>
        );
    }
}

export async function getStaticProps() {

	const { data, errors } = await client.query( {
		query: GET_PORTFOLIO_PAGE,
		variables: {
			uri: '/portfolio',
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		revalidate: 1,
	};
	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}
