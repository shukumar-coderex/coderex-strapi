import client from '../src/apollo/client';
import Layout from '../src/components/layout';
import HomeHero from '../src/components/HomeHero';
import Introduction from '../src/components/Introduction';
import WorkProcess from '../src/components/WorkProcess';
import Features from '../src/components/Features';
import Testimonial from '../src/components/Testimonial';
import CoderexAim from '../src/components/CoderexAim';
import CaseStudy from '../src/components/CaseStudy';
import Pricing from '../src/components/Pricing';
import Benefits from '../src/components/Benefits';
import ClientShowcase from '../src/components/ClientShowcase';
import ProvidedServices from '../src/components/ProvidedServices';
// import { GET_HOME_PAGE } from '../src/queries/pages/get-page';
import { GET_HOME_PAGE } from '../src/queries/pages/get-gq-page';
import { handleRedirectsAndReturnData } from '../src/utils/slug';

import CallToAction from '../src/components/CallToAction';

export default function Home( { data } ) {
  let { page, siteCta, socialLinks } = data,
    {
      hero,
      // introduction,
      // benefits,
      // coderexWorkProcess,
      // ourFeatures,
      // clientShowcase,
      // testimonial,
      // coderexAim,
      // caseStudySlider,
      // pricing,
      // providedServices,
    } = page.home;
  return (
    <div className={'content-wrapper'}>
      <HomeHero content={hero} socialLinks={socialLinks} />
    </div>
    // <Layout data={data}>
    //   <HomeHero content={hero} socialLinks={socialLinks} />
    //   {/* <Introduction content={introduction} />
    //   <Benefits content={benefits} />
    //   <WorkProcess content={coderexWorkProcess} />
    //   <Features content={ourFeatures} />
    //   <ClientShowcase content={clientShowcase} />
    //   <Testimonial content={testimonial} />
    //   <CoderexAim content={coderexAim} />
    //   <CaseStudy content={caseStudySlider} />
    //   <Pricing content={pricing} />
    //   <ProvidedServices content={providedServices} />
    //   <CallToAction cta={siteCta} /> */}
    // </Layout>
  );
}

export async function getStaticProps() {
  
  const { data, errors } = await client.query( {
    query: GET_HOME_PAGE,
    variables: {
      uri: '/',
    },
  } );

  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };

  return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}
