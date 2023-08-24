import Layout from '../src/components/layout';
import { GET_SERVICES_PAGE } from '../src/queries/pages/get-page';
import {handleRedirectsAndReturnData} from '../src/utils/slug';
import client from '../src/apollo/client';

import ServiceHero from '../src/components/ServiceHero';
import ServiceOverview from '../src/components/ServiceOverview';
import ServiceList from '../src/components/ServiceList';
import Services from '../src/components/Services';
import ServiceType from '../src/components/ServiceType';
import Pricing from '../src/components/Pricing';
import CallToAction from '../src/components/CallToAction';


export default function Service( {data} ) {
    const {page, siteCta, socialLinks} = data,
    {heroSection, serviceOverviewSection, serviceList, services, typesOfServices, pricing} = page.service;
    return (
        <Layout data={data}>
        <ServiceHero content={heroSection} socialLinks = {socialLinks} />
        <ServiceOverview content={serviceOverviewSection} />
        <ServiceList content={serviceList} />
        <Services content={services} />
        <ServiceType content={typesOfServices} />
        <Pricing content={pricing} />
        <CallToAction cta={siteCta} />
        </Layout>
    );
}

export async function getStaticProps() {

	const { data, errors } = await client.query( {
		query: GET_SERVICES_PAGE,
		variables: {
			uri: '/services',
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
