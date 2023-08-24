import parse from 'html-react-parser';
import AboutHero from '../src/components/AboutHero';

import AboutOverview from '../src/components/AboutOverview';
import Career from '../src/components/Career';
import GivingBack from '../src/components/GivingBack';
import AboutFeature from '../src/components/AboutFeature';
import Team from '../src/components/Team';
import CallToAction from '../src/components/CallToAction';
import ScrollToTop from '../src/components/ScrollToTop';
import { GET_ABOUT_PAGE } from '../src/queries/pages/get-page';
import {handleRedirectsAndReturnData} from '../src/utils/slug';
import client from '../src/apollo/client';
import Layout from '../src/components/layout';


export default function About( {data} ) {
    let {page, siteCta, socialLinks} = data,
    {heroSection, overviewSection, features, team, career, givingBack} = page.about;

  return (
    <Layout data={data}>
      <AboutHero content={heroSection} socialLinks={socialLinks}/>
      <AboutOverview content={overviewSection} />
      <AboutFeature content={features} />
      <Team content={team} />
      <Career content={career} />
      <GivingBack content={givingBack} />
      <CallToAction cta={siteCta} />
    </Layout>
  );
  }

  export async function getStaticProps() {

	const { data, errors } = await client.query( {
		query: GET_ABOUT_PAGE,
		variables: {
			uri: '/about',
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
